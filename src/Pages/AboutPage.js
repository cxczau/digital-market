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

const Summary = styled.p`
  position: relative;
  width: 65vw;
  height: 100%;
`;

const AboutPage = () => {
  return (
    <div>
      

      <HrefContainer>
        {aboutLinks.map((item, index) => (
          <a className="icon" href={item.url} key={index}>
          <Icon color="black" path={item.mdi} size="40px" />
          </a>
        ))}
      </HrefContainer>

      {companyDescription.text.map((item, index) => (
        <Summary key={`summary-text-${index}`}>{item}</Summary>
      ))}
    </div>
  );
};

export default AboutPage;
