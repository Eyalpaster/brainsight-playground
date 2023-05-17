import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { StandardBox } from "@/common/UI/AppStyledComponents";
import { NUMBER_TYPES } from "@/common/consts";
import { setMainError, setRunningAnalyses } from "@/redux/slicer";

import ParametersFields from "./components/ParametersFields";
import ActionButtons from "./components/ActionButtons";
import { GenerateValidationSchema } from "./helpers/validationSchemeGenerator";
import { postCheckValidity } from "./helpers/apiCalls";

// ----------------------------------------------------------------- //

const REQUEST_PROBLEM_MSG = "Request problem in CheckValidity";

const VALIDATION_ERROR_MSG = (expected_type) =>
  `expected to type ${expected_type}`;

// ----------------------------------------------------------------- //

function AnalysisParametersForm() {
  const {
    currentAnalysis: { json_params },
    currentAnalysis,
    runningAnalyses,
  } = useSelector((state) => state.elements);
  const dispatch = useDispatch();

  // ************************************************************** //

  const initialValues = {};
  json_params.forEach((field) => {
    initialValues[field.name] = field.default;
  });

  const validationSchema = GenerateValidationSchema(json_params);

  // ************************************************************** //

  const handleSubmit = async (
    values,
    { setSubmitting, setErrors }
  ) => {
    let params = {};
    json_params.forEach((field) => {
      if (field.isSelect) {
        params[field.name] = field.isList
          ? values[field.name].map((item) => item.value)
          : values[field.name].value;
      } else if (NUMBER_TYPES.includes(field.type)) {
        params[field.name] = field.isList
          ? values[field.name].map((item) => Number(item))
          : (params[field.name] = Number(values[field.name]));
      } else {
        params[field.name] = values[field.name];
      }
    });
    await checkValidity(params, { setSubmitting, setErrors });
  };

  const checkValidity = async (
    params,
    { setSubmitting, setErrors }
  ) => {
    await postCheckValidity(currentAnalysis.analysis_id, params)
      .then(() => {
        dispatch(setRunningAnalyses(params));
        setSubmitting(false);
      })
      .catch((e) => {
        if (!e.response.data.valid) {
          let errors = {};
          errors[e.response.data.invalid_param] =
            VALIDATION_ERROR_MSG(e.response.data.expected_type);
          setErrors(errors);
        } else {
          dispatch(setMainError(REQUEST_PROBLEM_MSG));
        }
        console.log(e);
        setSubmitting(false);
      });
  };

  // *********** RETURN ************ //

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={6}
      width={"40rem"}
      borderRight={1}
    >
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        validateOnBlur={false}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          handleSubmit(values, {
            setSubmitting,
            setErrors,
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <StandardBox direction="column" gap={50} pb={5}>
              <ParametersFields
                disabled={isSubmitting || runningAnalyses}
              />
              <ActionButtons
                disabled={isSubmitting || runningAnalyses}
              />
            </StandardBox>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default AnalysisParametersForm;
