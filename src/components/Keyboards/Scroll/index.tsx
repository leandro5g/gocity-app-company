import React from "react";
import { Platform } from "react-native";

import { Container } from "./styles";

const Scroll: React.FC = ({ children }) => {
  return <Container showsVerticalScrollIndicator={false}>{children}</Container>;
};

export { Scroll };
