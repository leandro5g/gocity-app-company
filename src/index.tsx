import React from "react";
import { ThemeProvider } from "styled-components";
import { ContextProvider } from "./contexts/";
import { ToastProvider } from "react-native-toast-notifications";
import { RFValue } from "react-native-responsive-fontsize";

import { Routes } from "./routes";
import { theme } from "./styles/theme";

const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <ToastProvider
          offsetTop={Number(theme.metrics.marginTop) + RFValue(20)}
        >
          <Routes />
        </ToastProvider>
      </ContextProvider>
    </ThemeProvider>
  );
};

export { Application };
