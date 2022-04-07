import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.RFValue(114)}px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${({ theme }) => theme.metrics.RFValue(16)}px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding-right: ${({ theme }) => theme.metrics.RFValue(16)}px;
`;

export const ContainerImage = styled.View`
  width: ${({ theme }) => theme.metrics.RFValue(114)}px;
  height: 100%;
  margin-right: ${({ theme }) => theme.metrics.RFValue(16)}px;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Content = styled.View`
  flex: 1;
  height: 100%;
  justify-content: space-between;
  padding: ${({ theme }) => theme.metrics.RFValue(13)}px 0px;
`;
export const Name = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(18)}px;
  color: ${({ theme }) => theme.colors.titles};
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;
export const Desc = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(12)}px;
  color: ${({ theme }) => theme.colors.titles};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(18)}px;
  color: ${({ theme }) => theme.colors.success};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_700};
`;
