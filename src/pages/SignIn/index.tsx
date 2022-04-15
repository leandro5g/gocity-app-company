import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary";
import { InputHookForm } from "../../components/Forms/HookForms/InputHookForm";
import { KeyboardDismiss } from "../../components/Keyboards/KeyboardDismiss";
import { KeyboardView } from "../../components/Keyboards/KeyboardView";
import { LogoSimple } from "../../components/Logos/LogoSimple";
import { SubTitle } from "../../components/Texts/SubTitle";
import { ButtonVoid } from "../../components/Buttons/ButtonVoid";

import {
  Container,
  Content,
  ContentDescription,
  Description,
  DescriptionSpan,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("O e-mail é obrigatório")
    .email("E-mail inválido"),
  password: Yup.string().required("A senha é obrigatória"),
});

interface FormProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const { navigate } = useNavigation();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async ({ email, password }: FormProps) => {
    Keyboard.dismiss();

    setIsLoading(true);

    const responseError = await signIn({ email, password });

    if (responseError === "400") {
      alert("deu erro");
    }

    if (responseError) {
      alert("deu merda");
    }

    setIsLoading(false);
  }, []);

  const handleNavigate = useCallback(() => {
    navigate(
      "SignUpRoutes" as never,
      {
        screen: "OwnerCompanyRegister",
      } as never
    );
  }, []);

  return (
    <KeyboardView>
      <KeyboardDismiss>
        <Container>
          <LogoSimple />

          <Content>
            <SubTitle style={{ marginBottom: RFValue(40) }}>
              Bem vindo ao GoCity, faça seu login para entrar
            </SubTitle>

            <InputHookForm
              error={errors?.email?.message}
              name="email"
              icon="email"
              isLoading={isLoading}
              control={control}
              placeholder="Digite seu E-mail"
              keyboardType="email-address"
            />
            <InputHookForm
              error={errors?.password?.message}
              name="password"
              icon="lock"
              isLoading={isLoading}
              control={control}
              placeholder="Digite sua senha"
              keyboardType="visible-password"
            />
          </Content>

          <ButtonPrimary
            isLoading={isLoading}
            onPress={handleSubmit(onSubmit)}
            icon="login"
            textButton="Fazer Login"
          />

          <ContentDescription>
            <Description>Não Possui uma conta?</Description>
            <ButtonVoid onPress={handleNavigate}>
              <DescriptionSpan> cadastre sua loja aqui!</DescriptionSpan>
            </ButtonVoid>
          </ContentDescription>
        </Container>
      </KeyboardDismiss>
    </KeyboardView>
  );
};

export { SignIn };
