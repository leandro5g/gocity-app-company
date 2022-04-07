import React from "react";
import { useTheme } from "styled-components";

import { ButtonVoid } from "../../Buttons/ButtonVoid";

import {
  Container,
  ContentText,
  Desc,
  UserName,
  ContainerLogo,
  Logo,
} from "./styles";

const HeaderPage: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <ContentText>
        <Desc>Bem vindo,</Desc>
        <UserName>Paulo Leandro</UserName>
      </ContentText>

      <ContainerLogo>
        <Logo
          source={{
            uri: "http://blog.selfiemodels.com.br/wp-content/uploads/2018/09/modelomasc.jpg?x65681",
          }}
        />
      </ContainerLogo>
    </Container>
  );
};

export { HeaderPage };
