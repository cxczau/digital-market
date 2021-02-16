import React, { useState } from "react";
import styled from "styled-components";
import { gradientList } from "../Constants/Colors";
import { animated, useSpring } from "react-spring";

const PaletteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  margin: 0px 10px;
`;

const ColorTile = styled(animated.div)`
  color: black;
  padding: 10px;
  border-radius: 5px;
  background: ${(p) => p.background};
`;

const xValue = (active) => {
  const { x } = useSpring({
    from: { x: 0 },
    x: active ? 1 : 0,
    config: { duration: 1400 },
  });

  return x;
};

/**
 * Component to showcase different color gradients
 */
const ColorPalette = () => {
  const [active, setActive] = useState(null);

  return (
    <PaletteContainer>
      {gradientList.map((item, index) => (
        <ColorTile
          key={`tile-${item.name}`}
          background={item.css}
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
          {item.name}-{index}
        </ColorTile>
      ))}
    </PaletteContainer>
  );
};

export default ColorPalette;
