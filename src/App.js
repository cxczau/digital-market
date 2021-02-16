import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "./App.css";
import NavBar from "./Components/Home/NavBar";
import UrbicaReactHookMap from "./Components/UrbicaMap";
import ReactPage from "./Components/ByteSized/ReactPage";
import VideoPage from "./Components/ByteSized/VideoPage";
import AboutPage from "./Pages/AboutPage";
import { urbicaMapConfiguration, SectionEnum } from "./Constants/Data";
// import Magic from "./Components/Magic/Index";
// import CardListSorter from "./Components/Magic/CardListSorter";
import MatchEntryPage from "./Components/Magic/MatchEntryPage";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  const [currentSection, setCurrentSection] = useState(SectionEnum.about);

  let displayElement = <div />;

  switch (currentSection) {
    case SectionEnum.maps:
      displayElement = (
        <UrbicaReactHookMap configuration={urbicaMapConfiguration} />
      );
      break;
    case SectionEnum.about:
      displayElement = (
        <AboutPage />
        // <VideoPage />
      );
      break;
    case SectionEnum.react:
      displayElement = (
        <ReactPage />
        // <VideoPage />
      );
      break;
    case SectionEnum.aws:
      displayElement = <MatchEntryPage />;
      // displayElement = <Magic />;
      // displayElement = <CardListSorter />;
      break;
    case SectionEnum.contact:
      displayElement = <VideoPage />;
      // displayElement = <Magic />;
      // displayElement = <CardListSorter />;
      break;
    default:
      displayElement = <div>Error</div>;
      break;
  }

  return (
    <div className="App">
      <HomePageContainer>
        <NavBar setCurrentSection={setCurrentSection} />

        {displayElement}
      </HomePageContainer>
    </div>
  );
}

export default App;
