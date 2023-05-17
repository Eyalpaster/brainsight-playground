import { useEffect } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";

import theme from "@/styles/theme";
import TopBar from "@/components/TopBar";
import { store } from "@/redux/store";
import { fetchElements } from "@/redux/slicer";
import MainErrorModal, {
  MainErrorModalEscapable,
} from "@/components/MainErrorModal";

import "@/styles/globals.css";

// ---------------------------------------------------- //

export default function App({ Component, pageProps }) {
  useEffect(() => {
    store.dispatch(fetchElements());
  }, []);

  // *********** RETURN ************ //
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TopBar />
        <Component {...pageProps} />
        <MainErrorModal />
        <MainErrorModalEscapable />
      </ThemeProvider>
    </Provider>
  );
}
