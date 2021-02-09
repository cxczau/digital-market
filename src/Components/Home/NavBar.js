import React, { useEffect, useState, useRef } from "react";
import { Button, CloseButton } from "react-bootstrap";
import Icon from "@mdi/react";
import styled from "styled-components";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  a,
  useTrail,
} from "react-spring";
import { mdiMenu } from "@mdi/js";
import { sectionData } from "../../Constants/Data";
import { grey3, gradientColor, gradientList } from "../../Constants/Colors";
import { Trail } from "./NavBar1";

const Container = styled(a.div)`
  ${(props) => (props.visible ? "" : "display: none")};
  background: white;
  border-radius: 5px;
  cursor: pointer;
  width: 90vw;
  height: 90vh;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 5vh 5vw;
  z-index: 98;
  background: linear-gradient(to top, white 20%, rgba(255, 255, 255, 0) 100%);
`;

const Item = styled(a.div)`
  width: 100%;
  height: 100%;
  color: black;
  border-radius: 5px;
  will-change: transform, opacity;
`;

// const AnimatedContainer = styled(a.div)`
// position: absolute;
//   will-change: transform, opacity;
// `;

const TrailsMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const TrailsTextContainer = styled(a.div)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const TrailsText = styled(a.div)`
  overflow: hidden;
`;

const NavButton = styled.button`
  position: fixed;
  left: 0;
  top: calc(50vh);
`;

const NavBar = (navBarProps) => {
  const [users, setUsers] = useState([]);
  const [showObject, setShowObject] = useState(false);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring(
    {
      ref: springRef,
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      y: open ? 0 : 200,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    }
    
  );

  const transRef = useRef();
  const transitions = useTransition(
    showObject ? sectionData : [],
    (item) => item.name,
    {
      ref: transRef,
      unique: true,
      trail: 400 / sectionData.length,
      from: { opacity: 0, transform: "scale(0)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0)" },
    }
  );

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(showObject ? [springRef, transRef] : [transRef, springRef], [
    0,
    showObject ? 0.1 : 0.6,
  ]);

  return (
    <div>
      <NavButton onClick={() => setShowObject(!showObject)}>
        <Icon color="blue" path={mdiMenu} size="40px" />
      </NavButton>

      {/* <AnimatedContainer> */}
        <Container
          style={{ ...rest, width: size, height: size }}
          visible={showObject}
          onClick={() => setShowObject(!showObject)}
        >
          {/* {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, background: item.css }}>
            <span
              onClick={() => {
                setShowObject(false);
                navBarProps.setCurrentSection(item.section);
              }}
            >
              {item.title}
            </span>
          </Item>
        ))} */}

          <Trail open={showObject}>
            {sectionData.map((item, index) => (
              <span
                key={index}
                onClick={() => {
                  setShowObject(false);
                  navBarProps.setCurrentSection(item.section);
                }}
              >
                {item.title}
              </span>
            ))}
          </Trail>
        </Container>
      {/* </AnimatedContainer> */}
    </div>
  );
};

export default NavBar;
