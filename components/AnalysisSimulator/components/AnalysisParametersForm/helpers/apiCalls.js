import { brieApi } from "@/common/apiBaseUrl";

// ---------------------------------------------------- //

const VALIDATE_MEASUREMENT_ID_URL =
  "/is-exist-measurement-id?measurement_id=";
const BRIE_CHECK_VALIDITY_URL = "/check-validity";

// ---------------------------------------------------- //

export const validateMeasurementId = async (
  measurementId
) => {
  let { data } = await brieApi.get(
    `${VALIDATE_MEASUREMENT_ID_URL}${measurementId}`
  );
  return data;
};

/**
 * Validate the analysis parameters.
 * @param {*} analysis_id : The analysis id.
 * @param {*} analysisParams : The analysis parameters.
 */
export const postCheckValidity = async (
  analysis_id,
  analysisParams
) => {
  return brieApi.post(BRIE_CHECK_VALIDITY_URL, {
    id: analysis_id,
    params: analysisParams,
  });
};
