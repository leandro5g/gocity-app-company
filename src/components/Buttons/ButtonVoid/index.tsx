import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container } from "./styles";

type ButtonVoidProps = TouchableOpacityProps;

const ButtonVoid: React.FC<ButtonVoidProps> = ({ ...rest }) => {
  return <Container activeOpacity={0.9} {...rest}></Container>;
};

export { ButtonVoid };
