import { Field } from "formik";
import { useSelector } from "react-redux";

import FormikTextField from "@/common/FormikComponents/FormikTextField";
import { DISABLED, HIDDEN } from "@/common/consts";

// ---------------------------------------------------- //

const TEXT_FIELD = [
  "integer",
  "float",
  "measurement_id",
  "string",
];

// ---------------------------------------------------- //

function TextFields({ disabled }) {
  const {
    currentAnalysis: { json_params },
  } = useSelector((state) => state.elements);

  // *********** RETURN ************ //

  return json_params
    .filter((field) => field.access_rights !== HIDDEN)
    .filter((field) => !field.isList)
    .filter((field) => TEXT_FIELD.includes(field.type))
    .map((field) => (
      <Field
        key={field.name}
        name={field.name}
        label={field.label}
        disabled={field.access_rights === DISABLED || disabled}
        component={FormikTextField}
      />
    ));
}

export default TextFields;
