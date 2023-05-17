import Image from "next/image";

import { StandardBox } from "@/common/UI/AppStyledComponents";

// ---------------------------------------- //

const LABEL = "BraInsight";

// ---------------------------------------- //

function BarHeader() {
  return (
    <StandardBox alignContent="center" alignItems="center">
      <Image
        aria-label="open drawer"
        src="/images/brainSpaceWhiteIcon.png"
        alt="Brain"
        width={0}
        height={0}
        sizes="6vw"
        style={{ width: "auto", height: "50%" }}
      />
      <h3>{LABEL}</h3>
    </StandardBox>
  );
}

export default BarHeader;
