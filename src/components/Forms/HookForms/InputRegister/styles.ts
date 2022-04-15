import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface FocusProps {
  isFocus: boolean;
}

export const Container = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const ContainerInput = styled.View<FocusProps>`
  width: 100%;
  height: ${({ theme }) => theme.metrics.RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: ${RFValue(8)}px;
  border-width: ${RFValue(2)}px;
  border-color: ${({ theme }) => theme.colors.border};

  ${({ isFocus }) =>
    isFocus &&
    css`
      border-color: ${({ theme }) => theme.colors.primaryDark};
    `}
`;

export const InputForm = styled(TextInput)`
  flex: 1;
  padding-left: ${RFValue(15)}px;
  font-size: ${({ theme }) => theme.metrics.RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const MessageError = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(12)}px;
  margin-top: ${RFValue(2)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.primaryLight};
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.primaryDark};
`;
