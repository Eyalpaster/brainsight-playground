import { createTheme } from "@mui/material";

const EXTRA_TRANSPARENT_WHITE = "rgba(255, 255, 255, 0.3)";
const MID_TRANSPARENT_WHITE = "rgba(255, 255, 255, 0.4)";
const TRANSPARENT_WHITE = "rgba(255, 255, 255, 0.7)";
const WHITE = "#FFFFFF";
export const ERROR_RED = "#EF5350";
export const PALE_GREEN = "#CCFDCD";
export const PALE_YELLOW = "#F3E2AB";

const theme = createTheme({
  colors: {
    transparentWhite: TRANSPARENT_WHITE,
    extraTransparentWhite: EXTRA_TRANSPARENT_WHITE,
    errorRed: ERROR_RED,
    paleGreen: PALE_GREEN,
    regularRed: "#FF0000",
    submitBlue: "#9EB0CA",
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: EXTRA_TRANSPARENT_WHITE,
          height: "10vh",
          justifyContent: "center",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          color: WHITE,
          fontSize: "1.5rem",
          fontFamily: "HeaderFont",
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          fontSize: "0.9rem",
          background: TRANSPARENT_WHITE,
          fontWeight: "normal",
          color: "black",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: TRANSPARENT_WHITE,
          fontSize: "0.9rem",
          fontColor: WHITE,
          fontFamily: "HeaderFont",
          fontWeight: "normal",
        },
        notchedOutline: {
          borderTop: "none",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.22rem",
          fontFamily: "HeaderFont",
          transform: "translate(0rem, -1.6rem) scale(0.9)",
          color: TRANSPARENT_WHITE,
          "&.Mui-disabled": {
            color: MID_TRANSPARENT_WHITE,
            fontSize: "1.22rem",
            transform: "translate(0rem, -1.6rem) scale(0.9)",
          },
        },
        shrink: {
          color: TRANSPARENT_WHITE,
          fontSize: "1.22rem",
          transform: "translate(0rem, -1.6rem) scale(0.9)",
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          height: "2.75rem",
          width: "5rem",
          marginTop: "-1.2rem",
          backgroundColor: TRANSPARENT_WHITE,
          borderRadius: "1rem",
        },
        thumb: {
          height: "1.5rem",
          width: "1.5rem",
          position: "relative",
        },
        switchBase: {
          "&.Mui-checked": {
            color: WHITE,

            transform: "translate(2.5rem)",
          },
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: "1.5rem",
          borderRadius: "0.3rem",
          backgroundColor: EXTRA_TRANSPARENT_WHITE,
        },
      },
    },
  },

  palette: {
    primary: {
      main: WHITE,
    },
    secondary: {
      main: WHITE,
    },
    error: {
      main: ERROR_RED,
    },
  },
});

export default theme;
