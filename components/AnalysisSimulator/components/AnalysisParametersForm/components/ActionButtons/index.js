import { Box, Button } from "@mui/material";

// ---------------------------------------------------- //

const SUBMIT_LABEL = "submit";
const DEFAULT_LABEL = "default";

// ---------------------------------------------------- //

function ActionButtons({ disabled }) {

  
  // *********** RETURN ************//
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="100%"
    >
      <Button
        disabled={disabled}
        variant="contained"
        type="submit"
        size="medium"
      >
        {SUBMIT_LABEL}
      </Button>
      <Button
        disabled={disabled}
        variant="outlined"
        type="reset"
        size="medium"
      >
        {DEFAULT_LABEL}
      </Button>
    </Box>
  );
}

export default ActionButtons;
