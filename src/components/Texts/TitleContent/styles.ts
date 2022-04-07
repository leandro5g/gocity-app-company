import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Texts = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(20)}px;
  line-height: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.titles};
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;
