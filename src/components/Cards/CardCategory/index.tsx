import React from "react";
import { SvgProps } from "react-native-svg";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

type CardCategoryProps = {
  id: string;
  name: string;
  icon: React.FC<SvgProps>;
};

const CardCategory: React.FC<CardCategoryProps> = ({ name, icon: Icon }) => {
  const { metrics } = useTheme();

  return (
    <Container>
      <Icon width={metrics.RFValue(54)} height={metrics.RFValue(45)} />
      <Title numberOfLines={2}>{name}</Title>
    </Container>
  );
};

export { CardCategory };
