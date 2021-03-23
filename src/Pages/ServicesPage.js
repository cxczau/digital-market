import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { servicesDescription } from "../Constants/Text";
import { designImages } from "../Assets";
import { grey4 } from "../Constants/Colors";

const PaletteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 100%));
  grid-gap: 25px;
  margin: 0px 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(350px, 100%));
  }
`;

const ColorTile = styled(animated.div)`
  color: black;
  margin: 15px;
  padding: 10px;
  border-radius: 5px;
  background: ${(p) => p.background};
  max-width: 400px;

  @media (min-width: 768px) {
    margin: 10px;
    padding: 30px;
    min-width: 300px;
    /* max-width: 400px; */
  }
`;

const xValue = (active) => {
  const { x } = useSpring({
    from: { x: 0 },
    x: active ? 1 : 0,
    config: { duration: 1400 },
  });

  return x;
};

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
  /* max-width ensures the summary won't exceed parent's boundaries */
  max-width: 100%;
  height: 100%;
  color: black;
`;

const PageContainer = styled.div`
  > * {
    margin: 15px 0px;
  }
`;

/**
 * Not an actual component; just for copy/pasting when writing new components
 */
const ServicesPage = (props) => {
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState(null);

  // useEffect(() => {
  //   console.log('Component did mount')
  // }, []);

  // useEffect(() => {
  //   console.log('On props change')
  // }, [props]);

  return (
    <PageContainer>
      <TitleContainer>
        <h3>Our Services</h3>
      </TitleContainer>

      <PaletteContainer>
        {servicesDescription.map((service, index) => (
          <Link color="inherit" to={service.link} key={`tile-${service.name}`}>
            <ColorTile
              background={grey4}
              style={{
                opacity: xValue(active === index).interpolate({
                  range: [0, 1],
                  output: [0.7, 1],
                }),
                transform: xValue(active === index)
                  .interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  })
                  .interpolate((x) => `scale(${x})`),
              }}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              <h3>{service.title}</h3>
              <Summary>{service.summary}</Summary>
            </ColorTile>
          </Link>
        ))}
      </PaletteContainer>

      {/* <SectionContainer>
        {servicesDescription.map((service, key) => (
          <Section key={`work-section-${key}`}>
            <Image src={designImages[key]} width="200px" />

            <SubSection>
              <h4>{service.title}</h4>
              <Summary>{service.text}</Summary>
            </SubSection>
          </Section>
        ))}
      </SectionContainer> */}
    </PageContainer>
  );
};

export default ServicesPage;
