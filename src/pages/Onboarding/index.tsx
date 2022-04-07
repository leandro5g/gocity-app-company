import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary";
import { LogoSimple } from "../../components/Logos/LogoSimple";

import { Container, Title, Footer } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

const Onboarding: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate("SignIn" as never);
  }, []);

  return (
    <Container>
      <LogoSimple />
      <Title>Expanda seu negócio para toda a cidade!</Title>
      <Footer>
        <ButtonPrimary
          onPress={handleNavigate}
          icon="login"
          textButton="Fazer Login"
          style={{ marginBottom: RFValue(20) }}
        />

        <ButtonPrimary
          isSecondary
          onPress={handleNavigate}
          icon="city"
          textButton="Cadastrar loja"
        />
      </Footer>
    </Container>
  );
};

export { Onboarding };
