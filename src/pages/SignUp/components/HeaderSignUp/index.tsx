import React from "react";

import { SubTitle } from "../../../../components/Texts/SubTitle";
import { SubTitleDescription } from "../../../../components/Texts/SubTitleDescription";

import { Container } from "./styles";

type HeaderSignUpProps = {
  title: string;
  subTitle: string;
};

const HeaderSignUp: React.FC<HeaderSignUpProps> = ({ subTitle, title }) => {
  return (
    <Container>
      <SubTitle>{title}</SubTitle>
      <SubTitleDescription>{subTitle}</SubTitleDescription>
    </Container>
  );
};

export { HeaderSignUp };
