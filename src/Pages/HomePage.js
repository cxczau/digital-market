import React from "react";
import styled from "styled-components";
import { aboutLinks } from "../Constants/Data";
import { companyDescription } from "../Constants/Text";
import FilledIcon from "../Components/FilledIcon";

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

const HomePage = () => {
  return (
    <div>
      <h1>Koko Media</h1>

      <HrefContainer>
        {aboutLinks.map((item, index) => (
          <a className="icon" href={item.url} key={index}>
            <FilledIcon path={item.mdi} />
          </a>
        ))}
      </HrefContainer>

      {companyDescription.text.map((item, index) => (
        <Summary key={`summary-text-${index}`}>{item}</Summary>
      ))}
    </div>
  );
};

export default HomePage;
