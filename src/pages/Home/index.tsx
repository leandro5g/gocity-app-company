import React from "react";

import { HeaderHome } from "./components/HeaderHome";
import { ListFood } from "./components/ListFood";

import { Container, Scroll } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <HeaderHome />
      <ListFood />
    </Container>
  );
};

export { Home };
