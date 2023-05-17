import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { titleCase } from "title-case";
import { cloneDeep } from "lodash";

import { brieApi } from "@/common/apiBaseUrl";
import { TYPE_DICT } from "@/common/consts";

// ---------------------------------------------------- //

const GET_ANALYSIS = "get-analysis";
const ERROR_MSG = "cannot fetch analysis";

const TYPE_ERROR = (type) =>
  `The type "${type}" is invalid`;

// ---------------- INITIAL STATE --------------------- //

const initialState = {
  loading: false,
  currentAnalysis: null,
  analysis: [],
  runningAnalyses: "",
  mainError: "",
  mainErrorEscapable: "",
  uuid: "",
  disable: false,
};

// ----------------------- THUNK ---------------------- //

export const fetchElements = createAsyncThunk(
  "elements/fetchElements",
  async (_, thunkAPI) => {
    return brieApi
      .get(GET_ANALYSIS)
      .then(({ data }) => {
        let processedAnalysisList = [];
        Object.keys(data.analyses).forEach((type) => {
          data.analyses[type].forEach((someAnalysis) => {
            let analysisWithValue = cloneDeep(someAnalysis);
            analysisWithValue.json_params.map((param) => {
              let new_param = param;
              new_param.value = new_param.default;
              new_param.isSelect = param.options.length > 0;
              new_param.label = titleCase(
                new_param.name.replaceAll("_", " ")
              );
              new_param.isList =
                param.type.includes("List");
              new_param.type =
                TYPE_DICT[param.type] ||
                thunkAPI.dispatch(
                  setMainError(TYPE_ERROR(new_param.type))
                );
              return new_param;
            });
            processedAnalysisList.push(analysisWithValue);
          });
        });
        return processedAnalysisList;
      })
      .catch((error) => {
        console.log(error);
        thunkAPI.dispatch(setMainError(ERROR_MSG));
      });
  }
);

// ----------------- REDUCERS SLICE --------------------//

export const slicer = createSlice({
  name: "elements",
  initialState,
  reducers: {
    setAnalysis: (state, action) => {
      state.analysis = action.payload;
    },
    setCurrentAnalysis: (state, action) => {
      state.currentAnalysis = action.payload;
    },
    setRunningAnalyses: (state, action) => {
      state.runningAnalyses = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUUID: (state, action) => {
      state.uuid = action.payload;
    },
    setDisable: (state, action) => {
      state.disable = action.payload;
    },
    setMainError: (state, action) => {
      state.mainError = action.payload;
    },
    setMainErrorEscapable: (state, action) => {
      state.mainErrorEscapable = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchElements.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchElements.fulfilled,
      (state, action) => {
        state.loading = false;
        state.analysis = action.payload;
        state.error = "";
      }
    );
    builder.addCase(
      fetchElements.rejected,
      (state, action) => {
        state.loading = true;
        state.analysis = [];
        state.error = action.error.message;
      }
    );
  },
});

// --------------------- EXPORTS -----------------------//

// Action creators are generated for each case reducer function
export const {
  setAnalysis,
  setCurrentAnalysis,
  setRunningAnalyses,
  setError,
  setUUID,
  setDisable,
  setMainError,
  setMainErrorEscapable,
} = slicer.actions;

export default slicer.reducer;
