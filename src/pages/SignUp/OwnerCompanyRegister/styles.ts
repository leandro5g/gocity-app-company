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
  margin-bottom: ${RFPercentage(2)}px;
`;

export const Group = styled.View`
  margin: ${RFPercentage(3)}px 0px;
`;
