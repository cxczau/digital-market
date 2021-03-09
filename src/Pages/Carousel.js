import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { aboutLinks, sampleText } from "../Constants/Data";
import { mdiLinkedin, mdiCards } from "@mdi/js";
import { designImages } from "../Assets";
import { Col, Row } from "react-bootstrap";
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const styles = { height: 400, width: "100%" };

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin: 0px 5px;
  }
`;

const Summary = styled.div`
  
`;

const SectionContainer = styled.div`
  display: grid;
  
`;

const Image = styled.img`
  
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

/**
 * Not an actual component; just for copy/pasting when writing new components
 */
const Carousel = (props) => {
  const [users, setUsers] = useState([]);
  const [showObject, setShowObject] = useState(false);

  return (
    <div>
      <Row>
        
        <Col span={3} style={{ paddingTop: "20px" }}></Col> 
        <Col span={12} style={{ marginTop: 20 }}>
          <ReactBootstrapCarousel
            animation={true}
            slideshowSpeed={10000}
            defaultActiveIndex={0}
            version={4}
            className="carousel-fade"
          >
            {designImages.map((img, key) => (
              <SectionContainer style={{ ...styles, backgroundColor: "white" }} key={`carousel-section-${key}`}>
                <Image src={img} />
                <Summary>{sampleText.slice(0, 400)}</Summary>
              </SectionContainer>
            ))}

            {/* <div style={{ height: 400 }}>
              
            </div>
            <div style={{ ...styles, backgroundColor: "aqua" }}>
              
            </div>
            <div style={{ ...styles, backgroundColor: "lightpink" }}>
              
            </div>
            <div style={{ ...styles, backgroundColor: "lightblue" }}>
              
            </div>
            <div style={{ ...styles, backgroundColor: "lightblue" }}>
              
            </div> */}
          </ReactBootstrapCarousel>
        </Col>
        <Col span={3} style={{ paddingTop: "20px" }}></Col>
      </Row>
    </div>
  );
};

export default Carousel;
