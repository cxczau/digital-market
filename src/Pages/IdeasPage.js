import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { aboutLinks, sampleText } from "../Constants/Data";
import FilledIcon from "../Components/FilledIcon";
import { mdiLinkedin, mdiCards } from "@mdi/js";
import { designImages } from "../Assets";
import { Col, Row, Carousel } from "react-bootstrap";
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import Carousel from './Carousel';

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
`;

const SectionContainer = styled.div`
  padding: 0px 25px;
  width: 80vw;
`;

const Image = styled.img`
  object-fit: cover;
  width: 350px;
  height: 350px;
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

      <h3>Our Ideas</h3>

      {/* <Carousel /> */}

      {/* <ReactBootstrapCarousel>
        {designImages.map((img, key) => (
          <SectionContainer key={`carousel-slide-${key}`}>
            <Image src={img} />
            <Summary>{sampleText.slice(0, 400)}</Summary>
          </SectionContainer>
        ))}
      </ReactBootstrapCarousel> */}

      <Carousel>
        {designImages.map((img, key) => (
          <Carousel.Item
            as={SectionContainer}
            interval={30000}
            key={`carousel-slide-${key}`}
          >
            <SectionContainer>
              <Image src={img} />
              <Summary>{sampleText.slice(0, 350)}</Summary>
            </SectionContainer>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default WorkPage;
