import React from "react";
import { Platform } from "react-native";

import { Container } from "./styles";

const KeyboardView: React.FC = ({ children }) => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      {children}
    </Container>
  );
};

export { KeyboardView };
