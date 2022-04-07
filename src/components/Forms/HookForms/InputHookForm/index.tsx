import React, { useCallback, useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { Control, Controller } from "react-hook-form";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  Content,
  InputForm,
  MessageError,
  ContainerInput,
} from "./styles";

interface InputHookFormProps extends TextInputProps {
  name: string;
  control: Control;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  error: string;
  mask?(value: string): string;
  isLoading?: boolean;
}

const InputHookForm: React.FC<InputHookFormProps> = ({
  icon,
  control,
  name,
  error,
  mask,
  isLoading,
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
      <ContainerInput isFocus={isFocus}>
        <Content>
          <MaterialCommunityIcons
            name={icon}
            color={isFocus ? colors.primary : colors.grayDark}
            size={metrics.RFValue(20)}
          />
        </Content>

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

export { InputHookForm };
