import styled from "styled-components/native";

export const Container = styled.View`
  width: ${({ theme }) => theme.metrics.RFValue(110)}px;
  height: ${({ theme }) => theme.metrics.RFValue(110)}px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: ${({ theme }) => theme.metrics.RFValue(16)}px;
  padding: ${({ theme }) => theme.metrics.RFValue(16)}px
    ${({ theme }) => theme.metrics.RFValue(10)}px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  text-align: center;
`;
