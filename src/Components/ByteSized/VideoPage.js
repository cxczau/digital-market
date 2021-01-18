import React, { useEffect, useState } from "react";
import video from './video.mp4';
import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  margin: 100px;
`;

const getVideoSrc = width => {
  // when versions of video are available
  // https://medium.com/frontend-digest/responsive-and-progressive-video-loading-in-react-e8753315af51
  // if (width >= 1080) return desktopVideo;
  // if (width >= 720) return tabletVideo;
  return video;
};

const VideoPage = (props) => {
  const [ users, setUsers ] = useState([]);
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  // useEffect(() => {
  //   console.log('Component did mount')
  // }, []);

  // useEffect(() => {
  //   console.log('On props change')
  // }, [props]);

  

  const src = getVideoSrc(window.innerWidth);
  return (
    <VideoContainer>
      <video autoPlay playsInline muted src={src} />
    </VideoContainer>
  );
};

export default VideoPage;
