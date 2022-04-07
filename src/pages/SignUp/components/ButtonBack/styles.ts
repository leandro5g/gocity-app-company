import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity``;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(16)}px;
  line-height: ${({ theme }) => theme.metrics.RFValue(20)}px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  margin-left: ${RFValue(7)}px;
`;

export const ContentDescription = styled.View`
  align-items: center;
  flex-direction: row;
`;
