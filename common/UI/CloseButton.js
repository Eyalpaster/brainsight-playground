import { Box, IconButton } from "@mui/material";
import { Clear } from "@mui/icons-material";

// ---------------------------------------------------- //

const CloseButton = ({ onClick, ...props }) => {

  // *********** RETURN ************//

  return (
    <Box {...props}>
      <IconButton onClick={onClick}>
        <Clear size="large" />
      </IconButton>
    </Box>
  );
};
export default CloseButton;
