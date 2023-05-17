import { useState } from "react";
import {
  Autocomplete,
  Chip,
  TextField,
} from "@mui/material";

// ---------------------------------------------------- //

const FormikListField = ({
  field,
  form: { touched, errors, setFieldValue, isValidating },
  ...props
}) => {
  const [isBlur, setIsBlur] = useState(false);

  // *********** HANDLER  ************ //

  const handleOnChange = (_, newValue) => {
    (!errors[field.name] ||
      field.value.length === 0 ||
      newValue.length <= field.value.length) &&
      setFieldValue(field.name, newValue);
  };

  // *********** RETURN ************* //
  return (
    <Autocomplete
      size="small"
      multiple
      fullWidth
      freeSolo
      disabled={props.disabled}
      id={field.name}
      name={field.name}
      onBlur={(e) => {
        setIsBlur(true);
        field.onBlur(e);
      }}
      onFocus={() => {
        setIsBlur(false);
      }}
      options={[]}
      limitTags={2}
      getLimitTagsText={(more) => `+${more}`}
      value={field.value}
      onChange={handleOnChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          placeholder={
            field.value.length === 0 ||
            !Boolean(errors[field.name])
              ? "Type and press enter"
              : "Invalid value"
          }
          error={
            (!isValidating || isBlur) &&
            touched[field.name] &&
            Boolean(errors[field.name])
          }
          helperText={
            (!isValidating || isBlur) &&
            touched[field.name] &&
            errors[field.name]
          }
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            key={index}
            variant="outlined"
            label={option}
            style={{
              backgroundColor:
                value.length - 1 === index &&
                !isValidating &&
                Boolean(errors[field.name]) &&
                value.length > 0
                  ? "#EF5350"
                  : "rgba(0, 0, 0, 0.1)",
            }}
          />
        ))
      }
    />
  );
};

export default FormikListField;
