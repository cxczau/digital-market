import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { aboutLinks, sampleText } from "../Constants/Data";
import FilledIcon from "../Components/FilledIcon";
import { mdiCards } from "@mdi/js";
import { designImages } from "../Assets";

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin: 0px 5px;
  }
`;

const Summary = styled.div`
  position: relative;
  width: 60vw;
  height: 100%;
`;

const SectionContainer = styled.div`
  display: grid;
`;

const Section = styled.div`
  display: flex;

  > * {
    margin: 10px 5px;
  }

  :nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 300px;
  width: 300px;
`;

/**
 * Not an actual component; just for copy/pasting when writing new components
 */
const WorkPage = (props) => {
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
      <TitleContainer>
        <FilledIcon path={mdiCards} />

        <h1>Koko Media</h1>
      </TitleContainer>

      <h2>Our Work</h2>

      <SectionContainer>
        {designImages.map((img, key) => (
          <Section key={`work-section-${key}`}>
            <Image src={img} width="200px" />

            <Summary>{sampleText.slice(0, 400)}</Summary>
          </Section>
        ))}
      </SectionContainer>
    </div>
  );
};

export default WorkPage;
