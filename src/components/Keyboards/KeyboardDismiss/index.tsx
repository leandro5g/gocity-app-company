import React, { useCallback } from "react";
import { Keyboard } from "react-native";

import { Container } from "./styles";

const KeyboardDismiss: React.FC = ({ children }) => {
  const handleDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, [Keyboard]);

  return <Container onPress={handleDismiss}>{children}</Container>;
};

export { KeyboardDismiss };
