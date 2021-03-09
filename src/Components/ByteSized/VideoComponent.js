import React, { useState } from "react";
import video from "./video2.mp4";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: fixed;
  max-width: 80vw;
  top: 100;
  ${
    "" /* display: flex;
  top: 110;
  margin: 0px 50px;
  max-height: 80vh;
  max-width: 80vw;
  align-items: center;
  justify-content: center;
  pointer-events: none; */
  }
`;

const Video = styled.video`
  position: fixed;
  z-index: 2;
  width: 100%;
  margin: auto;
`;

const getVideoSrc = (width) => {
  // when versions of video are available
  // https://medium.com/frontend-digest/responsive-and-progressive-video-loading-in-react-e8753315af51
  // if (width >= 1080) return desktopVideo;
  // if (width >= 720) return tabletVideo;
  return video;
};

/**
 * Self-contained component that will display a local video on loop
 */
const VideoComponent = () => {
  const [users, setUsers] = useState([]);
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const src = getVideoSrc(window.innerWidth);

  return (
    <VideoContainer>
      <Video autoPlay playsInline muted loop src={src} />
    </VideoContainer>
  );
};

export default VideoComponent;
