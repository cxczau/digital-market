import React, { useState } from "react";
import Icon from "@mdi/react";
import styled from "styled-components";
import { a, useTrail } from "react-spring";
import { mdiMenu } from "@mdi/js";
import { sectionData } from "../../Constants/Data";
import { grey3 } from "../../Constants/Colors";

const TrailsMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const TrailsText = styled(a.div)`
  position: relative;
  width: 100%;
  height: 100%;
  color: black;
  font-size: 4em;
  font-weight: 800;
  letter-spacing: -6px;
  will-change: transform, opacity;
`;

export function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <TrailsMain {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <TrailsTextContainer
            key={items[index].key}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <TrailsText style={{ height }} key={`trails-text-${index}`}>{items[index]}</TrailsText>
          </TrailsTextContainer>
        ))}
      </div>
    </TrailsMain>
  );
}