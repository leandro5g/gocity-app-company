import React from "react";
import { useTheme } from "styled-components";

import { Container, IsLoading } from "./styles";

type LoadingProps = {
  isLoad: boolean;
};

const Loading: React.FC<LoadingProps> = ({ isLoad }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <IsLoading color={colors.secondary} animating={isLoad} size="small" />
    </Container>
  );
};

export { Loading };
