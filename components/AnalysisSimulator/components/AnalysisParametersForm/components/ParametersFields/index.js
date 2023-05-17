import { StandardBox } from "@/common/UI/AppStyledComponents";

import BooleanFields from "./components/BooleanFields";
import TextFields from "./components/TextFields";
import ListFields from "./components/ListFields";
import SelectionFields from "./components/SelectionFields";

// ---------------------------------------------------- //

const LABEL = "Analysis Parameters";

// ---------------------------------------------------- //

function ParametersFields({ disabled }) {
  
  // *********** RETURN ************ //

  return (
    <StandardBox direction="column" gap={80}>
      <h2>{LABEL}</h2>
      <StandardBox direction="column" gap={40}>
        <ListFields disabled={disabled} />
        <SelectionFields disabled={disabled} />
        <TextFields disabled={disabled} />
        <BooleanFields disabled={disabled} />
      </StandardBox>
    </StandardBox>
  );
}

export default ParametersFields;
