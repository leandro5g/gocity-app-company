import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { MaterialIcons } from "@expo/vector-icons";

import { ButtonVoid } from "../../Buttons/ButtonVoid";

import { Container, Title, ButtonBack, TextButton } from "./styles";

const HeaderEdit: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <ButtonBack activeOpacity={0.9}>
        <MaterialIcons
          color={colors.shape}
          size={RFValue(22)}
          name="chevron-left"
        />
      </ButtonBack>
      <Title>Cadastrar</Title>
      <ButtonVoid>
        <TextButton>Deletar</TextButton>
      </ButtonVoid>
    </Container>
  );
};

export { HeaderEdit };
