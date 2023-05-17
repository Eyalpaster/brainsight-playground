import * as Yup from "yup";

import {
  BOOL_TYPE,
  DICT_TYPE,
  FLOAT_TYPE,
  HIDDEN,
  INT_TYPE,
  MEASUREMENT_ID_TYPE,
  STRING_TYPE,
} from "@/common/consts";
import { setMainError } from "@/redux/slicer";

import { validateMeasurementId } from "./apiCalls";
import { useDispatch } from "react-redux";

// ---------------------------------------------------- //

const TOO_SHORT_MEAS_ID_MSG = "Measurement ID must have 8 chars";

const MEASUREMENT_ID_SIZE = 8;

const REQUIRED_MSG = "Required";
const INVALID_NUMBER_MSG = "Must be a number";
const INVALID_INTEGER_MSG = "Must be an integer";
const ERROR_NOT_VALID_MSG = "This measurement ID is invalid ";
const VALIDATION_ERROR_MSG = "There is a problem with the validation";

// ---------------------------------------------------- //

const BOOL_VALIDATION = Yup.boolean();

const FLOAT_VALIDATION = Yup.number()
  .required(REQUIRED_MSG)
  .typeError(INVALID_NUMBER_MSG);

const INT_VALIDATION = Yup.number()
  .integer()
  .required(REQUIRED_MSG)
  .typeError(INVALID_INTEGER_MSG);

const STRING_VALIDATION = Yup.string()
  .ensure()
  .required(REQUIRED_MSG);

const OBJECT_VALIDATION = Yup.object().required(REQUIRED_MSG);

const MEASUREMENT_ID_VALIDATION = ({ name }) =>
  Yup.string()
    .ensure()
    .required(REQUIRED_MSG)
    .length(MEASUREMENT_ID_SIZE, TOO_SHORT_MEAS_ID_MSG)
    .test(name, ERROR_NOT_VALID_MSG, async (value) => {
      let { exist } = await validateMeasurementId(value);
      return exist;
    });

// ----------------- VALIDATION SCHEMA ---------------- //

const checkField = (field, validator) => {
  const newValidator = selectCase(field, validator);
  return checkIfList(field, newValidator);
};

const checkIfList = (field, validator) => {
  return field.isList
    ? Yup.array().of(validator).min(1, REQUIRED_MSG)
    : validator;
};

const selectCase = (field, validator) => {
  return field.isSelect
    ? Yup.object(
        {
          label: Yup.string().required(),
          value: validator,
        } || null
      ).required(REQUIRED_MSG)
    : validator;
};

export function GenerateValidationSchema(fields) {
  const dispatch = useDispatch();
  const schema = {};

  try {
    fields
      .filter((field) => field.access_rights !== HIDDEN)
      .forEach((field) => {
        switch (field.type) {
          case BOOL_TYPE:
            schema[field.name] = checkField(field, BOOL_VALIDATION);
            break;

          case FLOAT_TYPE:
            schema[field.name] = checkField(field, FLOAT_VALIDATION);
            break;

          case INT_TYPE:
            schema[field.name] = checkField(field, INT_VALIDATION);
            break;

          case STRING_TYPE:
            schema[field.name] = checkField(field, STRING_VALIDATION);
            break;

          case DICT_TYPE:
            schema[field.name] = checkField(field, OBJECT_VALIDATION);
            break;

          case MEASUREMENT_ID_TYPE:
            schema[field.name] = checkField(
              field,
              MEASUREMENT_ID_VALIDATION(field.name)
            );
            break;

          default:
            schema[field.name] = Yup.mixed();
        }
      });

    return Yup.object().shape(schema);
  } catch (e) {
    console.log(e);
    dispatch(setMainError(VALIDATION_ERROR_MSG));
  }
}
