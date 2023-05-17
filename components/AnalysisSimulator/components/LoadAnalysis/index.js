import { useDispatch, useSelector } from "react-redux";
import { Box, LinearProgress } from "@mui/material";

import { ERROR_RED, PALE_GREEN, PALE_YELLOW } from "@/styles/theme";
import { setCurrentAnalysis } from "@/redux/slicer";
import { useEffect } from "react";

// ---------------------------------------------------- //

const LABEL = (name) => `${name} execution`;

const STATUS_VALUES = {
  SUBMITTED: { color: PALE_YELLOW, value: 5 },
  PENDING: { color: PALE_YELLOW, value: 20 },
  RUNNABLE: { color: PALE_YELLOW, value: 40 },
  STARTING: { color: PALE_YELLOW, value: 60 },
  RUNNING: { color: PALE_YELLOW, value: 80 },
  SUCCEEDED: { color: PALE_GREEN, value: 100 },
  FAILED: { color: ERROR_RED, value: 100 },
  "": { color: ERROR_RED, value: 0 },
};

// ---------------------------------------------------- //

function LoadAnalysis() {
  const { analysis, currentAnalysis, runningAnalyses } = useSelector(
    (state) => state.elements
  );

  useEffect(() => {}, []);
  // *********** RETURN ************ //

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={"40rem"}
      p={6}
      gap={10}
    >
      <Box display="flex" flexDirection="column" gap={5}>
        <h2>{LABEL(currentAnalysis.label)}</h2>
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <LinearProgress variant="determinate" value={50} />
        <h3> Status : </h3>
      </Box>
    </Box>
  );
}

export default LoadAnalysis;
