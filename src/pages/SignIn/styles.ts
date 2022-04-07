import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(60)}px ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
`;

export const Content = styled.View`
  justify-content: center;
  margin: ${RFPercentage(10)}px 0px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(15)}px;
  line-height: ${({ theme }) => theme.metrics.RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const DescriptionSpan = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(15)}px;
  line-height: ${({ theme }) => theme.metrics.RFValue(20)}px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const ContentDescription = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(20)}px;
  align-self: center;
`;
