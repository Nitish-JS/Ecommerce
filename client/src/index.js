import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./GlobalStyles";
import { DarkModeProvider, useDarkMode } from "./darkModeContext";

const ThemedApp = () => {
  const { mode } = useDarkMode();
  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
};


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <DarkModeProvider>
        <ThemedApp />
      </DarkModeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
