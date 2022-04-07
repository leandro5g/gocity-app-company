import React from "react";
import { TextProps } from "react-native";

import { Texts } from "./styles";

type SubTitleProps = TextProps;

const SubTitle: React.FC<SubTitleProps> = ({ children, ...rest }) => {
  return <Texts {...rest}>{children}</Texts>;
};

export { SubTitle };
