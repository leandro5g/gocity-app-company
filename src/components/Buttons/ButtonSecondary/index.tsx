import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import { Container, Content, TextButton, Loading } from "./styles";

interface ButtonSecondaryProps extends TouchableOpacityProps {
  textButton: string;
  isLoading?: boolean;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  textButton,

  isLoading,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container disabled={isLoading} activeOpacity={0.9} {...rest}>
      <Content>
        {!isLoading && <TextButton>{textButton}</TextButton>}

        {isLoading && (
          <Loading color={colors.shape} animating={isLoading} size="small" />
        )}
      </Content>
    </Container>
  );
};

export { ButtonSecondary };
