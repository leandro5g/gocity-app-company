import React from "react";

import LogoSvg from "../../../assets/svg/logo.svg";

import { Container, TitleContainer, Title } from "./styles";

const LogoSimple: React.FC = () => {
  return (
    <Container>
      <LogoSvg />
      <TitleContainer>
        <Title>GoCity - Para empresas</Title>
      </TitleContainer>
    </Container>
  );
};

export { LogoSimple };
