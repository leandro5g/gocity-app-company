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
  height: ${({ theme }) => theme.metrics.RFValue(55)}px;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
  align-items: center;

  ${({ isFocus }) =>
    isFocus &&
    css`
      border-width: ${RFValue(2)}px;
      border-color: ${({ theme }) => theme.colors.primaryLight};
    `}
`;

export const Content = styled.View`
  width: ${({ theme }) => theme.metrics.RFValue(46)}px;
  align-items: center;
  border-right-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.grayDark};
`;

export const InputForm = styled(TextInput)`
  flex: 1;
  font-size: ${({ theme }) => theme.metrics.RFValue(16)}px;
  padding-left: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const MessageError = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(12)}px;
  margin-top: ${RFValue(2)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.primaryLight};
`;
