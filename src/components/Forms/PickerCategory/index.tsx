import React, { useState, useCallback } from "react";
import { Keyboard } from "react-native";

import { ButtonVoid } from "../../Buttons/ButtonVoid";

import { Picker, ItemData } from "./Picker";

import { Container } from "./styles";

interface PickerCategoryProps {
  onSelectedValue(data: ItemData): void;
  title: string;
  isLoad?: boolean;
}

const PickerCategory: React.FC<PickerCategoryProps> = ({
  onSelectedValue,
  title,
  isLoad,
  children,
}) => {
  const [viewModal, setViewModal] = useState(false);

  const closeModal = useCallback(() => {
    setViewModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    Keyboard.dismiss();
    setViewModal(true);
  }, []);

  return (
    <ButtonVoid
      style={{ zIndex: 9999999 }}
      disabled={isLoad}
      onPress={handleOpenModal}
    >
      <Container>
        {children}

        {viewModal && (
          <Picker
            title={title}
            onSelectedValue={onSelectedValue}
            isVisible={viewModal}
            onClose={closeModal}
          />
        )}
      </Container>
    </ButtonVoid>
  );
};

export { PickerCategory, ItemData };
