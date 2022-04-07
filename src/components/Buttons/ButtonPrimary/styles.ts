import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface IsSecondaryProps {
  isSecondary?: boolean;
}

export const Container = styled.TouchableOpacity<IsSecondaryProps>`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${RFValue(8)}px;
  flex-direction: row;

  ${({ isSecondary }) =>
    isSecondary &&
    css`
      background-color: ${({ theme }) => theme.colors.success};
    `}
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text<IsSecondaryProps>`
  font-size: ${({ theme }) => theme.metrics.RFValue(15)}px;
  line-height: ${RFValue(22.5)}px;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-family: ${({ theme }) => theme.fonts.primary_600};

  ${({ isSecondary }) =>
    isSecondary &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;

export const ContentIcon = styled.View<IsSecondaryProps>`
  width: ${RFValue(56)}px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-top-right-radius: ${RFValue(8)}px;
  border-bottom-right-radius: ${RFValue(8)}px;
  justify-content: center;
  align-items: center;

  ${({ isSecondary }) =>
    isSecondary &&
    css`
      background-color: ${({ theme }) => theme.colors.positive};
    `}
`;

export const Loading = styled.ActivityIndicator``;
