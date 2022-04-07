import React from "react";
import { Category } from "../../../../components/Category";
import { categories } from "../../../../services/categories";

import { Container, List, Title } from "./styles";

const ListCategories: React.FC = () => {
  return (
    <Container>
      <Title>Categorias</Title>

      <List horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </List>
    </Container>
  );
};

export { ListCategories };
