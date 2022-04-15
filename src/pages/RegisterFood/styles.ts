import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  margin-top: ${RFValue(32)}px;
  padding: 0px ${({ theme }) => theme.metrics.paddingHorizontal}px;
`;

export const Form = styled.View`
  flex: 1;
  margin-top: ${RFValue(32)}px;
`;
