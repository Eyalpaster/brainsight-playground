import { Box, InputLabel, Switch } from "@mui/material";

// ---------------------------------------------------- //

function FormikBooleanField({ field, ...props }) {
  
  // *********** RETURN ************ //

  return (
    <Box
      display="inline-flex"
      flexDirection="column"
      alignContent="center"
    >
      <InputLabel id={field.name}>{props.label}</InputLabel>
      <Switch
        id={field.name}
        name={field.name}
        label={props.label}
        value={field.value}
        checked={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        disabled={props.disabled}
      />
    </Box>
  );
}

export default FormikBooleanField;
