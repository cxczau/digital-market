import React from "react";
import styled from "styled-components";
import { aboutLinks } from "../Constants/Data";
import { companyDescription } from "../Constants/Text";



const Summary = styled.p`
  position: relative;
  width: 65vw;
  height: 100%;
`;

const HomePage = () => {
  return (
    <div>
      

      

      {companyDescription.text.map((item, index) => (
        <Summary key={`summary-text-${index}`}>{item}</Summary>
      ))}
    </div>
  );
};

export default HomePage;
