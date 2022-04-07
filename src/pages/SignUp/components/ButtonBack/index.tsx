import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { Container, ContentDescription, Description } from "./styles";

const ButtonBack: React.FC = () => {
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container activeOpacity={0.9} onPress={goBack}>
      <ContentDescription>
        <Feather
          color={colors.secondary}
          name="arrow-left"
          size={RFValue(20)}
        />
        <Description>Voltar</Description>
      </ContentDescription>
    </Container>
  );
};

export { ButtonBack };
