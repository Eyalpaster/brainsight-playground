export const DICT_TYPE = "dict";
export const BOOL_TYPE = "bool";
export const FLOAT_TYPE = "float";
export const INT_TYPE = "int";
export const STRING_TYPE = "str";
export const MEASUREMENT_ID_TYPE = "measurement_id";

export const TYPE_DICT = {
  "List[str]": STRING_TYPE,
  "List[int]": INT_TYPE,
  "List[float]": FLOAT_TYPE,
  "List[bool]": BOOL_TYPE,
  "List[dict]": DICT_TYPE,
  "List[measurement_id]": MEASUREMENT_ID_TYPE,
  string: STRING_TYPE,
  integer: INT_TYPE,
  float: FLOAT_TYPE,
  boolean: BOOL_TYPE,
  dict: DICT_TYPE,
  measurement_id: MEASUREMENT_ID_TYPE,
};

export const NUMBER_TYPES = [INT_TYPE, FLOAT_TYPE];

export const ACTIVE = "read_write";
export const HIDDEN = "hidden";
export const DISABLED = "read_only";
