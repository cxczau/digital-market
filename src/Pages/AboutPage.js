import React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import { aboutLinks } from "../Constants/Data";
import { companyDescription } from "../Constants/Text";

const HrefContainer = styled.div`
  display: flex;
  justify-content: center;

  > * {
    margin: 0px 10px;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    margin: 10px;
  }
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 5px;
  }
`;

const Summary = styled.h5`
  position: relative;
  width: 65vw;
  height: 100%;
`;

const AboutPage = () => {
  return (
    <PageContainer>
      <HrefContainer>
        {aboutLinks.map((item, index) => (
          <a className="icon" href={item.url} key={index}>
            <Icon color="black" path={item.mdi} size="40px" />
          </a>
        ))}
      </HrefContainer>

      <SummaryContainer>
        {companyDescription.text.map((item, index) => (
          <Summary key={`summary-text-${index}`}>{item}</Summary>
        ))}
      </SummaryContainer>
    </PageContainer>
  );
};

export default AboutPage;
