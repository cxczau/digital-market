import React from "react";
import styled from "styled-components";
import { specificService } from "../../Constants/Text";
import { designImages } from "../../Assets";
import {
  TitleContainer,
  Summary,
  SectionContainer,
  SubSection,
  Section,
  Image,
} from "./Base";

const ContentCreationPage = () => {
  const serviceDesc = specificService("creative");

  return (
    <div>
      <TitleContainer>
        <h3>Our Services</h3>
      </TitleContainer>

      <SectionContainer>
        <Section>
          <Image src={designImages[4]} width="200px" />

          <SubSection>
            <h4>{serviceDesc.title}</h4>
            <Summary>{serviceDesc.text}</Summary>
          </SubSection>
        </Section>
      </SectionContainer>
    </div>
  );
};

export default ContentCreationPage;
