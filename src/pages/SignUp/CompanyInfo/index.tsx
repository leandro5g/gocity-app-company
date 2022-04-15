import React, { useCallback, useState } from "react";
import { Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "react-native-toast-notifications";
import { api } from "../../../services/api";

import { maskBrazilianCellPhoneNumber, maskCNPJ } from "../../../utils/masks";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonPrimary } from "../../../components/Buttons/ButtonPrimary";
import { InputHookForm } from "../../../components/Forms/HookForms/InputHookForm";
import { KeyboardDismiss } from "../../../components/Keyboards/KeyboardDismiss";
import { KeyboardView } from "../../../components/Keyboards/KeyboardView";

import { ButtonBack } from "../components/ButtonBack";
import { HeaderSignUp } from "../components/HeaderSignUp";

import { Container, Content, Group } from "./styles";
import {
  PickerCategory,
  ItemData,
} from "../../../components/Forms/PickerCategory";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  cellphone: Yup.string()
    .required("A telefone é obrigatório")
    .min(15, "Telefone inválido")
    .max(15, "Telefone inválido"),
  category: Yup.string().required("A categoria é obrigatório"),
  cnpj: Yup.string().required("O CNPJ é obrigatório").min(18, "CNPJ inválido"),
});

interface FormProps {
  email: string;
  password: string;
  cpf: string;
  cellphone: string;
  name: string;
}

const CompanyInfo: React.FC = () => {
  const { goBack } = useNavigation();
  const toast = useToast();

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [categoryId, setCategoryId] = useState("");

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

  const handleSelectedCategory = useCallback(({ id, value }: ItemData) => {
    setValue("category", value);
    setError("category", {
      message: "",
    });
    setCategoryId(id);
  }, []);

  return (
    <KeyboardView>
      <KeyboardDismiss>
        <Container>
          <HeaderSignUp
            title="Informação da sua loja"
            subTitle="preencha os dados abaixo com os dados do seu negócio"
          />

          <Group>
            <ButtonBack />
          </Group>

          <Content>
            <InputHookForm
              error={errors?.name?.message}
              name="name"
              icon="city-variant"
              control={control}
              placeholder="Nome da loja"
              keyboardType="default"
              autoCapitalize="words"
              isLoading={isLoading}
            />

            <InputHookForm
              error={errors?.cnpj?.message}
              name="cnpj"
              icon="card-text"
              control={control}
              placeholder="CNPJ da sua loja"
              keyboardType="numeric"
              isLoading={isLoading}
              mask={maskCNPJ}
              maxLength={18}
            />

            <InputHookForm
              error={errors?.cellphone?.message}
              name="cellphone"
              icon="cellphone"
              control={control}
              mask={maskBrazilianCellPhoneNumber}
              placeholder="Telefone ou celular da loja"
              keyboardType="numeric"
              maxLength={15}
              isLoading={isLoading}
            />

            <PickerCategory
              isLoad={false}
              title="Escolha a categoria"
              onSelectedValue={handleSelectedCategory}
            >
              <InputHookForm
                error={errors?.category?.message}
                name="category"
                icon="clipboard-list"
                control={control}
                placeholder="Categoria da Loja"
                editable={false}
              />
            </PickerCategory>
          </Content>

          <ButtonPrimary
            onPress={handleSubmit(onSubmit)}
            icon="city-variant"
            textButton="Cadastrar loja"
          />
        </Container>
      </KeyboardDismiss>
    </KeyboardView>
  );
};

export { CompanyInfo };
