import { brieApi } from "@/common/apiBaseUrl";

// ---------------------------------------------------- //

const BRIE_GET_ANALYSIS_RUN_ID_URL =
  "/get-analysis-run-uuid";
const BRIE_RUN_ANALYSIS_URL = "/run-analysis";
const BRIE_RUN_STATUS_URL =
  "/get-analysis-job-status?analysis_run_uuid=";
const BRIE_GET_ANALYSIS_OUTPUT_URL =
  "/get-analysis-outputs";

// ---------------------------------------------------- //

/**
 * Get the analysis uuid to run the analysis.
 * @param {*} id : The analysis id.
 * @param {*} analysisParams  : The analysis parameters.
 */
export const getAnalysisRunId = async (
  id,
  analysisParams
) => {
  return brieApi.post(BRIE_GET_ANALYSIS_RUN_ID_URL, {
    analysis_id: id,
    json_params: analysisParams,
  });
};

/**
 * Run the analysis.
 * @param {*} uuid : The uuid of the analysis to run.
 */
export const runAnalysis = async (uuid) => {
  return brieApi.post(BRIE_RUN_ANALYSIS_URL, {
    analysis_run_uuid: uuid,
  });
};

/**
 *  Get the analysis status according to the uuid.
 *  The status can be:
 *    "SUBMITTED", "PENDING", "RUNNABLE", "STARTING",
 *    "RUNNING", "SUCCEEDED", "FAILED"
 * @param {*} uuid : The running analysis uuid.
 */
export const getRunStatus = async (uuid) => {
  return brieApi.get(BRIE_RUN_STATUS_URL + uuid);
};

/**
 * Get the analysis output.
 * @param {*} uuid : The running analysis uuid.
 */
export const getAnalysisOutput = async (uuid) => {
  return brieApi.post(BRIE_GET_ANALYSIS_OUTPUT_URL, {
    analysis_run_uuid: uuid,
  });
};
