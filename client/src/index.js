import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, ThemeContext } from "./themeContext";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyle from "./GlobalStyles";


const ThemedApp = () => {
  const { mode } = React.useContext(ThemeContext);
  return (
    <StyledThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <App />
    </StyledThemeProvider>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
