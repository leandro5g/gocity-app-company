import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerPhoto = styled.View`
  height: ${RFValue(160)}px;
  width: ${RFValue(160)}px;
  border-radius: ${RFValue(160 / 2)}px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.colors.primaryDark};
  border-width: ${RFValue(2)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  justify-content: center;
  align-items: center;
  margin-right: ${RFValue(32)}px;
`;

export const PlaceholderImage = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(14)}px;
  line-height: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  height: ${RFValue(56)}px;
  width: ${RFValue(90)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(12)}px;
`;

export const TextButton = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(14)}px;
  line-height: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  text-align: center;
`;
