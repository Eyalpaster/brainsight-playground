import { useDispatch, useSelector } from "react-redux";
import {
  Autocomplete,
  Box,
  TextField,
} from "@mui/material";

import { setCurrentAnalysis } from "@/redux/slicer";

// ---------------------------------------------------- //

const LABEL = "Choose Analysis";

// ---------------------------------------------------- //

function ChooseAnalysis() {
  const { analysis, currentAnalysis, runningAnalyses } =
    useSelector((state) => state.elements);
  const dispatch = useDispatch();

  // *********** RETURN ************ //

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={"30rem"}
      p={6}
      borderRight={1}
    >
      <Box display="flex" flexDirection="column" gap={10}>
        <h2>{LABEL}</h2>
        <Autocomplete
          fullWidth
          id="choose-analysis"
          value={currentAnalysis}
          disabled={runningAnalyses}
          defaultValue={currentAnalysis}
          options={analysis}
          renderInput={(params) => (
            <TextField {...params} />
          )}
          onChange={(_, newValue) => {
            dispatch(setCurrentAnalysis(newValue));
          }}
        />
      </Box>
      {/* <TextField
        size="small"
        label="Choose name:"
      /> */}
    </Box>
  );
}

export default ChooseAnalysis;
