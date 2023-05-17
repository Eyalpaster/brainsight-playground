import { TextField } from "@mui/material";

// ---------------------------------------------------- //

const FormikTextField = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  // *********** RETURN ************ //

  return (
    <TextField
      placeholder={props.placeholder}
      variant="outlined"
      size="small"
      fullWidth
      id={field.name}
      name={field.name}
      label={props.label}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      error={
        touched[field.name] && Boolean(errors[field.name])
      }
      helperText={touched[field.name] && errors[field.name]}
      type={field.type}
      disabled={props.disabled}
    />
  );
};

export default FormikTextField;
