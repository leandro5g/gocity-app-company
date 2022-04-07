import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${RFValue(136)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: space-between;
  padding: 0px ${({ theme }) => theme.metrics.paddingHorizontal}px;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.marginTop}px;
`;

export const ContentText = styled.View``;

export const Desc = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(20)}px;
  line-height: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;
export const UserName = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(20)}px;
  line-height: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const ContainerLogo = styled.View`
  height: ${RFValue(56)}px;
  width: ${RFValue(56)}px;
  border-radius: ${RFValue(56 / 2)}px;
`;

export const Logo = styled.Image`
  border-radius: ${RFValue(56 / 2)}px;
  flex: 1;
`;
