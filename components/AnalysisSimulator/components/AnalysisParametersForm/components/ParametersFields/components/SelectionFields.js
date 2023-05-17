import { Field } from "formik";
import { useSelector } from "react-redux";

import FormikSelectField from "@/common/FormikComponents/FormikSelectField";
import { DISABLED, HIDDEN } from "@/common/consts";

// ---------------------------------------------------- //

function SelectionFields({ disabled }) {
  const {
    currentAnalysis: { json_params },
  } = useSelector((state) => state.elements);

  // *********** RETURN ************ //

  return json_params
    .filter((field) => field.access_rights !== HIDDEN)
    .filter((field) => field.isSelect)
    .map((field) => (
      <Field
        key={field.name}
        name={field.name}
        label={field.label}
        options={field.options}
        multiple={field.isList}
        disabled={field.access_rights === DISABLED || disabled}
        component={FormikSelectField}
      />
    ));
}

export default SelectionFields;
