import React, { useCallback, useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { Control, Controller } from "react-hook-form";

import {
  Container,
  InputForm,
  MessageError,
  ContainerInput,
  Label,
} from "./styles";

interface InputRegisterProps extends TextInputProps {
  name: string;
  control: Control;
  error: string;
  mask?(value: string): string;
  isLoading?: boolean;
  label: string;
}

const InputRegister: React.FC<InputRegisterProps> = ({
  control,
  name,
  error,
  mask,
  isLoading,
  label,
  ...rest
}) => {
  const { colors, metrics } = useTheme();

  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <Container>
      <Label>{label}</Label>
      <ContainerInput isFocus={isFocus}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputForm
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
              placeholderTextColor={colors.grayDark}
              {...rest}
              onChangeText={(text) =>
                !!mask ? onChange(mask(text)) : onChange(text)
              }
              value={value}
            />
          )}
        />
      </ContainerInput>

      {!!error && <MessageError>{error}</MessageError>}
    </Container>
  );
};

export { InputRegister };
