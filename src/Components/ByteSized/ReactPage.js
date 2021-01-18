import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const BaseCard = styled(animated.div)`
  position: relative;
  border-radius: 5px;

  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
`;

const BackImage = styled(BaseCard)`
  width: 60vw;
  height: 60vh;
  max-width: 80vw;
  max-height: 80vh;
  background-image: url(https://image.flaticon.com/icons/svg/119/119596.svg);
`;

// Sun
const TopImage = styled(BaseCard)`
  width: 150px;
  height: 150px;
  background-image: url(https://image.flaticon.com/icons/svg/789/789395.svg);
`;

// Cloud
const LeftImage = styled(BaseCard)`
  opacity: 0.9;
  width: 250px;
  height: 250px;
  background-image: url(https://image.flaticon.com/icons/svg/414/414927.svg);
`;

// Bird
const RightImage = styled(BaseCard)`
  width: 100px;
  height: 100px;
  background-image: url(https://image.flaticon.com/icons/svg/789/789392.svg);
`;

const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  
`;
const ComponentContainer = styled.div`
  display: flex;
  position: relative;
  background: grey;
  width: 80vw;
  height: 80vh;

  align-items: center;
  justify-content: center;
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 100}px,${y / 100}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 9 - 350}px,${y / 9 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 30 - 750}px,${y / 60 - 150}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 5 - 750}px,${y / 3 - 100}px,0)`;

const ReactPage = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  console.log(window.innerWidth);

  return (
    <ComponentContainer>
      

      <AnimationContainer
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <BackImage style={{ transform: props.xy.interpolate(trans1) }} />
        <TopImage style={{ transform: props.xy.interpolate(trans2) }} />
        <LeftImage style={{ transform: props.xy.interpolate(trans3) }} />
        <RightImage style={{ transform: props.xy.interpolate(trans4) }} />
      </AnimationContainer>
    </ComponentContainer>
  );
};

export default ReactPage;
