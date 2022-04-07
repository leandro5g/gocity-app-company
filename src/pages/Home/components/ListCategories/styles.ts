import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0px ${({ theme }) => theme.metrics.RFValue(24)}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(20)}px;
  color: ${({ theme }) => theme.colors.titles};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin-bottom: ${({ theme }) => theme.metrics.RFValue(12)}px;
`;

export const List = styled.ScrollView``;
