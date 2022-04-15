import React, { useCallback, useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

import { AntDesign } from "@expo/vector-icons";

import { getCategories } from "../../../../services/requests/category";
import { Category } from "../../../../dtos/category";

import { ButtonVoid } from "../../../Buttons/ButtonVoid";

import {
  Modal,
  Container,
  Group,
  Content,
  Header,
  Title,
  Item,
  ContainerItem,
  Scroll,
  ContainerImage,
  Image,
} from "./styles";
import { Loading } from "../../../Loading";

export interface ItemData {
  id: string;
  value: string;
}

interface PickerProps {
  isVisible: boolean;
  title: string;
  onClose(): void;
  onSelectedValue(data: ItemData): void;
}

const Picker: React.FC<PickerProps> = ({
  isVisible,
  title,

  onClose,
  onSelectedValue,
}) => {
  const { colors } = useTheme();

  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSelected = useCallback((data: ItemData) => {
    onSelectedValue(data);
    onClose();
  }, []);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = useCallback(async () => {
    const data = await getCategories();

    if (data === "error") {
      setIsLoading(false);
      return;
    }

    setCategories(data);
    setIsLoading(false);
  }, []);

  return (
    <Modal
      onRequestClose={onClose}
      transparent
      animationType="slide"
      visible={isVisible}
    >
      <Container>
        <Group onPress={onClose} />
        <Content>
          <Header>
            <Title>{title}</Title>

            <ButtonVoid onPress={onClose}>
              <AntDesign
                color={colors.shape}
                name="closecircle"
                size={RFValue(18)}
              />
            </ButtonVoid>
          </Header>

          <Scroll showsVerticalScrollIndicator={false}>
            {!isLoading && (
              <>
                {categories?.map((item) => (
                  <ContainerItem
                    activeOpacity={0.9}
                    key={item?.id}
                    onPress={() =>
                      handleSelected({ id: item?.id, value: item?.name })
                    }
                  >
                    <ContainerImage>
                      <Image source={{ uri: item?.image }} />
                    </ContainerImage>
                    <Item>{item?.name}</Item>
                  </ContainerItem>
                ))}
              </>
            )}

            {isLoading && <Loading isLoad={isLoading} />}
          </Scroll>
        </Content>
      </Container>
    </Modal>
  );
};

export { Picker };
