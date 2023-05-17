import { setMainError } from "@/redux/slicer";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// ---------------------------------------------------- //

const ERROR = (name) => `There is a problem with the ${name} field`;

// ---------------------------------------------------- //

const FormikSelectField = ({
  field,
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  const dispatch = useDispatch();

  // ******************************* //

  useEffect(() => {
    const clearedValue = [null, ""].includes(field.value)
      ? null
      : field.value;
    setFieldValue(field.name, clearedValue);
    if (
      !props.options.some((option) => option === clearedValue) &&
      clearedValue !== null
    ) {
      dispatch(setMainError(ERROR(field.name)));
    }
  }, [
    dispatch,
    field.name,
    field.value,
    props.options,
    setFieldValue,
  ]);

  // *********** RETURN ************ //

  return (
    <Autocomplete
      size="small"
      filterSelectedOptions
      multiple={props.multiple}
      fullWidth
      id={field.name}
      name={field.name}
      onBlur={field.onBlur}
      options={props.options}
      limitTags={2}
      getLimitTagsText={(more) => `+${more}`}
      defaultValue={field.value}
      freeSolo={props.disabled}
      disabled={props.disabled}
      value={field.value}
      onChange={(_, newValue) => setFieldValue(field.name, newValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          error={touched[field.name] && Boolean(errors[field.name])}
          helperText={touched[field.name] && errors[field.name]}
        />
      )}
      isOptionEqualToValue={(option, value) =>
        value === null || value === "" || option.label === value.label
      }
    />
  );
};

export default FormikSelectField;
