import { Box, styled } from "@mui/material";

export const StandardBox = styled(Box)(
  ({
    gap = 20,
    height = "100%",
    width = "100%",
    direction = "row",
  }) => ({
    display: "flex",
    gap: gap,
    height: height,
    width: width,
    flexDirection: direction,
  })
);
export const UserMsgHeader = styled("h1")(
  ({
    level = "1.8rem",
    color = "black",
    alignSelf = "center",
    textAlign = "center",
  }) => ({
    fontSize: level,
    color: color,
    alignSelf: alignSelf,
    textAlign: textAlign,
  })
);
