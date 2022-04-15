import React from "react";
import { useForm } from "react-hook-form";

import { ButtonSecondary } from "../../components/Buttons/ButtonSecondary";
import { InputRegister } from "../../components/Forms/HookForms/InputRegister";
import { InputPhoto } from "../../components/Forms/InputPhoto";
import { KeyboardDismiss } from "../../components/Keyboards/KeyboardDismiss";
import { KeyboardView } from "../../components/Keyboards/KeyboardView";
import { HeaderRegisterFood } from "./components/HeaderRegisterFood";

import { Container, Content, Form } from "./styles";

const RegisterFood: React.FC = () => {
  const { control } = useForm();

  return (
    <KeyboardView>
      <Container>
        <KeyboardDismiss>
          <>
            <HeaderRegisterFood />

            <Content>
              <InputPhoto />

              <Form>
                <InputRegister
                  label="Nome do produto"
                  error=""
                  name="name"
                  autoCapitalize="words"
                  control={control}
                  placeholder="Digite o nome do produto"
                />
                <InputRegister
                  label="Valor do produto"
                  error=""
                  name="value"
                  keyboardType="numeric"
                  control={control}
                  placeholder="Digite o valor do produto"
                />

                <InputRegister
                  label="Categoria do produto"
                  error=""
                  name="value"
                  control={control}
                  placeholder="Escolha a categoria do produto"
                />

                <ButtonSecondary textButton="Cadastrar produto" />
              </Form>
            </Content>
          </>
        </KeyboardDismiss>
      </Container>
    </KeyboardView>
  );
};

export { RegisterFood };
