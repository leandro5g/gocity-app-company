import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${RFValue(120)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: space-between;
  padding: 0px ${({ theme }) => theme.metrics.paddingHorizontal}px;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.marginTop}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(24)}px;
  line-height: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_700};
`;

export const TextButton = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(14)}px;
  line-height: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const ButtonBack = styled.TouchableOpacity`
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
  border-radius: ${RFValue(12)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.shape};
  justify-content: center;
  align-items: center;
`;
