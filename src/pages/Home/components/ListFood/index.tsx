import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { MaterialIcons } from "@expo/vector-icons";

import { CardFood } from "../../../../components/Cards/CardFood";
import { TitleContent } from "../../../../components/Texts/TitleContent";
import { ButtonVoid } from "../../../../components/Buttons/ButtonVoid";

import { Container, Content, List, Header } from "./styles";

const ListFood: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <Header>
        <TitleContent style={{ marginVertical: RFValue(16) }}>
          Meus produtos
        </TitleContent>

        <ButtonVoid>
          <MaterialIcons
            color={colors.primary}
            name="add-circle"
            size={RFValue(30)}
          />
        </ButtonVoid>
      </Header>

      <Content>
        <List
          data={[1, 2, 3, 4]}
          keyExtractor={(_, index) => String(index)}
          showsVerticalScrollIndicator={false}
          renderItem={() => <CardFood />}
        />
      </Content>
    </Container>
  );
};

export { ListFood };
