import React from "react";

import {
  Container,
  ContainerPhoto,
  PlaceholderImage,
  Button,
  TextButton,
} from "./styles";

const InputPhoto: React.FC = () => {
  return (
    <Container>
      <ContainerPhoto>
        <PlaceholderImage>Nenhuma foto carregada</PlaceholderImage>
      </ContainerPhoto>

      <Button>
        <TextButton>Carregar</TextButton>
      </Button>
    </Container>
  );
};

export { InputPhoto };
