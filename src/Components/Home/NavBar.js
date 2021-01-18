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

const Overlay = styled.div`
  ${(props) => (props.visible ? "" : "display: none")};
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  margin: 5vw;
  width: 90vw;
  height: 90vh;
  background: ${grey3};
`;

const Container = styled(a.div)`
  position: relative;
  display: grid;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  width: 90vw;
  height: 90vh;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`;
// const Container = styled(a.div)`
//   position: relative;
//   display: grid;
//   grid-template-columns: repeat(4, minmax(100px, 1fr));
//   grid-gap: 25px;
//   padding: 25px;
//   background: white;
//   border-radius: 5px;
//   cursor: pointer;
//   box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
//   will-change: width, height;
// `;

const Item = styled(a.div)`
  width: 100%;
  height: 100%;
  color: black;
  border-radius: 5px;
  will-change: transform, opacity;
`;

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
  const [showObject, setShowObject] = useState(true);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "0px", background: grey3 },
    to: {
      size: showObject ? "100%" : "0%",
      background: showObject ? "white" : grey3,
    },
  });

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

      <Container
        style={{ ...rest, width: size, height: size }}
        onClick={() => setShowObject(!showObject)}
      >
        {transitions.map(({ item, key, props }) => (
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
        ))}
      </Container>
    </div>
  );
};

export default NavBar;
