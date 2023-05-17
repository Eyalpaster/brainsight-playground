import { useSelector, useDispatch } from "react-redux";
import { Backdrop, Box, useTheme } from "@mui/material";

import { UserMsgHeader } from "@/common/UI/AppStyledComponents";
import CloseButton from "@/common/UI/CloseButton";
import { setMainErrorEscapable } from "@/redux/slicer";

// -------------------------------------- CONST -------------------------------------- //

const NOTE_MSG = "Note:";

// -------------------------------------- ERROR MODAL FUNCTION ----------------------- //

const MsgError = ({ error, isEscapable = false }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
      onClick={
        isEscapable
          ? () => dispatch(setMainErrorEscapable(""))
          : null
      }
    >
      <Box
        display="inline-flex"
        backgroundColor="white"
        p={10}
        flexDirection="column"
        borderRadius={2}
        gap={5}
      >
        {isEscapable && (
          <CloseButton
            onClick={() =>
              dispatch(setMainErrorEscapable(""))
            }
            pt={2}
            alignSelf="end"
          />
        )}
        <UserMsgHeader
          color={theme.colors.regularRed}
          level="2.5rem"
        >
          {NOTE_MSG}
        </UserMsgHeader>
        <UserMsgHeader level="1.5rem">
          {error}
        </UserMsgHeader>
      </Box>
    </Backdrop>
  );
};

// ---------------------------------------------------------------------------//

const MainErrorModal = () => {
  const mainError = useSelector(
    (state) => state.elements.mainError
  );

  return (
    Object.keys(mainError).length > 0 && (
      <MsgError error={mainError} />
    )
  );
};

// ---------------------------------------------------------------------------//

export const MainErrorModalEscapable = () => {
  const mainErrorEscapable = useSelector(
    (state) => state.elements.mainErrorEscapable
  );

  return (
    Object.keys(mainErrorEscapable).length > 0 && (
      <MsgError
        error={mainErrorEscapable}
        isEscapable={true}
      />
    )
  );
};

export default MainErrorModal;
