import { Field } from "formik";
import { useSelector } from "react-redux";

import FormikListField from "@/common/FormikComponents/FormikListField";
import { DISABLED, HIDDEN } from "@/common/consts";

// ---------------------------------------------------- //

function ListFields({ disabled, invalidMeasurements }) {
  const {
    currentAnalysis: { json_params },
  } = useSelector((state) => state.elements);

  // *********** RETURN ************ //

  return json_params
    .filter((field) => field.access_rights !== HIDDEN)
    .filter((field) => !field.isSelect)
    .filter((field) => field.isList)
    .map((field) => (
      <Field
        key={field.name}
        name={field.name}
        label={field.label}
        options={field.options}
        disabled={field.access_rights === DISABLED || disabled}
        problematicValues={invalidMeasurements}
        component={FormikListField}
      />
    ));
}

export default ListFields;
