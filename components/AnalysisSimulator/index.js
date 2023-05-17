import { useSelector } from "react-redux";

import { StandardBox } from "@/common/UI/AppStyledComponents";

import ChooseAnalysis from "./components/ChooseAnalysis";
import AnalysisParametersForm from "./components/AnalysisParametersForm";
import LoadAnalysis from "./components/LoadAnalysis/index";

// ---------------------------------------------------- //

function AnalysisSimulator() {
  const { currentAnalysis, runningAnalyses } = useSelector(
    (state) => state.elements
  );

  // *********** RETURN ************ //
  return (
    <StandardBox direction="row">
      <ChooseAnalysis />
      {currentAnalysis && (
        <AnalysisParametersForm
          key={currentAnalysis.analysis_id}
        />
      )}
      {runningAnalyses && <LoadAnalysis />}
    </StandardBox>
  );
}

export default AnalysisSimulator;
