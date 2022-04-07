import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: space-between;
  padding: ${RFValue(40)}px;
`;

export const Footer = styled.View``;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(40)}px;
  line-height: ${RFValue(50)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;
