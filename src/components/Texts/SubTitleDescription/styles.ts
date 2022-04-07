import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Texts = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(16)}px;
  line-height: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
