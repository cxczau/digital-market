import React, { useState } from "react";
import styled from "styled-components";
import { servicesDescription, specificService } from "../../Constants/Text";
import FilledIcon from "../../Components/FilledIcon";
import { mdiCards } from "@mdi/js";
import { designImages } from "../../Assets";

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
  font-size: 0.8em;
  width: 50vw;
  height: 100%;
`;

const SectionContainer = styled.div`
  display: grid;
`;

const SubSection = styled.div``;

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
const WddPage = (props) => {
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

        
      </TitleContainer>

      <h3>Our Services</h3>

      <SectionContainer>
        {specificService('Website Design & Development').map((service, key) => (
          <Section key={`work-section-${key}`}>
            <Image src={designImages[key]} width="200px" />

            <SubSection>
              <h4>{service.title}</h4>
              <Summary>{service.text}</Summary>
            </SubSection>
          </Section>
        ))}
      </SectionContainer>
    </div>
  );
};

export default WddPage;
