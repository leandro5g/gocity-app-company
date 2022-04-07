import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity``;

export const TitleContainer = styled.View`
  margin-left: ${({ theme }) => theme.metrics.RFValue(15)}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(22)}px;
  line-height: ${({ theme }) => theme.metrics.RFValue(28)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_700};
`;
