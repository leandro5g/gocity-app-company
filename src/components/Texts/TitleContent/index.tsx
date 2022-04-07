import React from "react";
import { TextProps } from "react-native";

import { Texts } from "./styles";

type TitleContentProps = TextProps;

const TitleContent: React.FC<TitleContentProps> = ({ children, ...rest }) => {
  return <Texts {...rest}>{children}</Texts>;
};

export { TitleContent };
