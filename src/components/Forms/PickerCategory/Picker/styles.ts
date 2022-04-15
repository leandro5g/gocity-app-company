import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Group = styled.TouchableOpacity`
  flex: 1;
`;

export const Content = styled.View`
  height: ${RFValue(220)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: ${RFValue(8)}px;
  border-top-right-radius: ${RFValue(8)}px;
`;

export const Scroll = styled.ScrollView``;

export const Header = styled.View`
  border-bottom-width: ${RFValue(2)}px;
  height: ${RFValue(50)}px;
  border-color: ${({ theme }) => theme.colors.bg};
  flex-direction: row;
  justify-content: space-between;
  padding: 0px ${({ theme }) => theme.metrics.paddingHorizontal}px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const Item = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const ContainerImage = styled.View`
  height: ${RFValue(25)}px;
  width: ${RFValue(25)}px;
  border-radius: ${RFValue(25 / 2)}px;
  margin-right: ${RFValue(8)}px;
`;

export const Image = styled.Image`
  flex: 1;
`;

export const ContainerItem = styled.TouchableOpacity`
  border-bottom-width: ${RFValue(0.5)}px;
  border-color: ${({ theme }) => theme.colors.border};
  height: ${RFValue(40)}px;
  align-items: center;
  padding-left: ${({ theme }) => theme.metrics.paddingHorizontal}px;
  flex-direction: row;
`;
