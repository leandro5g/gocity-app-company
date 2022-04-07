import React from "react";

import {
  Container,
  ContainerImage,
  Image,
  Content,
  Name,
  Desc,
  Label,
  Value,
} from "./styles";

const CardFood: React.FC = () => {
  return (
    <Container>
      <ContainerImage>
        <Image
          resizeMode="cover"
          source={{
            uri: "https://www.revistabula.com/wp/wp-content/uploads/2018/06/Virado-a-Paulista-610x350.jpg",
          }}
        />
      </ContainerImage>

      <Content>
        <Name>Ao Molho</Name>
        <Desc numberOfLines={2}>
          Macarrão ao molho branco, fughi e cheiro verde das montanhas.
        </Desc>
        <Label>
          R$<Value>19,90</Value>
        </Label>
      </Content>
    </Container>
  );
};

export { CardFood };
