import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { aboutLinks, summary } from "../Constants/Data";
import FilledIcon from "../Components/FilledIcon";
import { mdiLinkedin } from "@mdi/js";

const HrefContainer = styled.div`
  display: flex;
  justify-content: center;
  
  > * {
    margin: 0px 10px;
  }
`;

const Summary = styled.div`
  position: relative;
  width: 60vw;
  height: 100%;
`;

/**
 * Not an actual component; just for copy/pasting when writing new components
 */
const AboutPage = (props) => {
  const [users, setUsers] = useState([]);
  const [showObject, setShowObject] = useState(false);

  // useEffect(() => {
  //   console.log('Component did mount')
  // }, []);

  // useEffect(() => {
  //   console.log('On props change')
  // }, [props]);

  return (
    <div>
      <h1>Charles Zhang</h1>

      <HrefContainer>
        {aboutLinks.map((item, index) => (
          <a className="icon" href={item.url} key={index}>
            <FilledIcon path={item.mdi} />
          </a>
        ))}
      </HrefContainer>

      <Summary>{summary}</Summary>
    </div>
  );
};

export default AboutPage;
