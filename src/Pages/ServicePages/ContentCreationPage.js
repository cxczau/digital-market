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
  PageContainer,
  ServiceBreadcrumb,
} from "./Base";

const ContentCreationPage = () => {
  const serviceDesc = specificService("creative");

  return (
    <PageContainer>
      <TitleContainer>
        <ServiceBreadcrumb currentService={serviceDesc} />
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
    </PageContainer>
  );
};

export default ContentCreationPage;
