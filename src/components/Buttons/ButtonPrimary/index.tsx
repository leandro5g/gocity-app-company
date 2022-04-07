import React from "react";
import { TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Content, ContentIcon, TextButton, Loading } from "./styles";

interface ButtonPrimaryProps extends TouchableOpacityProps {
  textButton: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  isLoading?: boolean;
  isSecondary?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  textButton,
  icon,
  isLoading,
  isSecondary,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container
      isSecondary={isSecondary}
      disabled={isLoading}
      activeOpacity={0.9}
      {...rest}
    >
      <Content>
        {!isLoading && (
          <TextButton isSecondary={isSecondary}>{textButton}</TextButton>
        )}

        {isLoading && (
          <Loading
            color={isSecondary ? colors.shape : colors.primaryDark}
            animating={isLoading}
            size="small"
          />
        )}
      </Content>

      <ContentIcon isSecondary={isSecondary}>
        <MaterialCommunityIcons
          color={isSecondary ? colors.shape : colors.primaryDark}
          size={RFValue(22)}
          name={icon}
        />
      </ContentIcon>
    </Container>
  );
};

export { ButtonPrimary };
