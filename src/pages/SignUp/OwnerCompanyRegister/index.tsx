import React, { useCallback, useState } from "react";
import { Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "react-native-toast-notifications";
import { api } from "../../../services/api";

import { maskBrazilianCellPhoneNumber, maskCPF } from "../../../utils/masks";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonPrimary } from "../../../components/Buttons/ButtonPrimary";
import { InputHookForm } from "../../../components/Forms/HookForms/InputHookForm";
import { KeyboardDismiss } from "../../../components/Keyboards/KeyboardDismiss";
import { KeyboardView } from "../../../components/Keyboards/KeyboardView";

import { ButtonBack } from "../components/ButtonBack";
import { HeaderSignUp } from "../components/HeaderSignUp";

import { Container, Content, Group } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .required("O e-mail é obrigatório")
    .email("E-mail inválido"),
  cellphone: Yup.string()
    .required("A telefone é obrigatório")
    .min(15, "Telefone inválido")
    .max(15, "Telefone inválido"),
  password: Yup.string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve possuir pelo menos 6 caracteres."),
  cpf: Yup.string().required("O CPF é obrigatório").min(14, "CPF inválido"),
});

interface FormProps {
  email: string;
  password: string;
  cpf: string;
  cellphone: string;
  name: string;
}

const OwnerCompanyRegister: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const toast = useToast();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(
    async ({ email, password, cellphone, name, cpf }: FormProps) => {
      Keyboard.dismiss();

      setIsLoading(true);

      const body = {
        email,
        password,
        cellphone: cellphone.replace(/\D/g, ""),
        name,
        cpf: cpf.replace(/\D/g, ""),
      };

      console.log(body);

      try {
        const response = await api.post("/owners", body);
        toast.show(
          "Seu primeiro cadastro foi realizado com sucesso! Agora informe os dados da sua empresa.",
          {
            type: "success",
            placement: "top",
            duration: 4000,
            animationType: "zoom-in",
          }
        );

        navigate("CompanyInfo" as never);
      } catch (error) {
        const alreadyError = error?.response?.data?.already_Error;

        console.log(error?.response?.data);

        let tittle;

        if (alreadyError === "cpf") {
          tittle = "Ops, parece que já existe um cadastro com esse CPF";
        }

        if (alreadyError === "email") {
          tittle = "Ops, parece que já existe um cadastro com esse CPF";
        }

        toast.show(
          tittle ||
            "Ocorreu um erro inesperado ao realizar o seu cadastro. Tente novamente ou entre em contato com o suporte.",
          {
            type: "danger",
            placement: "top",
            duration: 4000,
            animationType: "zoom-in",
          }
        );
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return (
    <KeyboardView>
      <KeyboardDismiss>
        <Container>
          <HeaderSignUp
            title="Cadastre sua loja"
            subTitle="Primeiro informe os dados do responsável pelo comércio"
          />

          <Group>
            <ButtonBack />
          </Group>

          <Content>
            <InputHookForm
              error={errors?.name?.message}
              name="name"
              icon="account"
              control={control}
              placeholder="Digite seu nome"
              keyboardType="default"
              autoCapitalize="words"
              isLoading={isLoading}
            />

            <InputHookForm
              error={errors?.cpf?.message}
              name="cpf"
              icon="card-account-details"
              control={control}
              placeholder="Digite seu CPF"
              keyboardType="numeric"
              isLoading={isLoading}
              mask={maskCPF}
              maxLength={14}
            />

            <InputHookForm
              error={errors?.cellphone?.message}
              name="cellphone"
              icon="cellphone"
              control={control}
              mask={maskBrazilianCellPhoneNumber}
              placeholder="Digite seu número de telefone"
              keyboardType="numeric"
              maxLength={15}
              isLoading={isLoading}
            />

            <InputHookForm
              error={errors?.email?.message}
              name="email"
              icon="email"
              control={control}
              placeholder="Digite seu E-mail"
              keyboardType="email-address"
              isLoading={isLoading}
            />
            <InputHookForm
              error={errors?.password?.message}
              name="password"
              icon="lock"
              keyboardType="visible-password"
              control={control}
              placeholder="Digite sua senha"
              isLoading={isLoading}
            />
          </Content>

          <ButtonPrimary
            onPress={handleSubmit(onSubmit)}
            icon="login"
            textButton="Cadastrar agora"
          />
        </Container>
      </KeyboardDismiss>
    </KeyboardView>
  );
};

export { OwnerCompanyRegister };
