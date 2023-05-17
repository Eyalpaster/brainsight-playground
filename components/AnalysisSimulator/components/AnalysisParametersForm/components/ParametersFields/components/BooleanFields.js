import { Field } from "formik";
import { useSelector } from "react-redux";

import FormikBooleanField from "@/common/FormikComponents/FormikBooleanField";
import { DISABLED, HIDDEN } from "@/common/consts";

// ---------------------------------------------------- //

const BOOL_FIELD = "boolean";

// ---------------------------------------------------- //

function BooleanFields({ disabled }) {
  const {
    currentAnalysis: { json_params },
  } = useSelector((state) => state.elements);

  // *********** RETURN ************ //

  return json_params
    .filter((field) => field.access_rights !== HIDDEN)
    .filter((field) => field.type === BOOL_FIELD)
    .map((field) => (
      <Field
        key={field.name}
        name={field.name}
        label={field.label}
        disabled={field.access_rights === DISABLED || disabled}
        component={FormikBooleanField}
      />
    ));
}

export default BooleanFields;
