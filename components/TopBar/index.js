import { AppBar, Toolbar } from "@mui/material";

import { StandardBox } from "@/common/UI/AppStyledComponents";

import BarHeader from "./components/BarHeader";
import BarLinks from "./components/BarLinks";

// ---------------------------------------------------- //

function TopBar() {
  // *********** RETURN ************ //

  return (
    <AppBar position="static">
      <Toolbar>
        <StandardBox
          alignContent="center"
          alignItems="center"
        >
          <BarHeader />
          <BarLinks />
        </StandardBox>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
