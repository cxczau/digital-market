import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "./App.css";
import Main from './Main';
import NavBar from "./Components/Home/NavBar";
import ReactPage from "./Components/ByteSized/ReactPage";
// import VideoPage from "./Components/ByteSized/VideoPage";
import { SectionEnum } from "./Constants/Data";
import {
  HomePage,
  ContactPage,
  IdeasPage,
  WorkPage,
  AboutPage,
  ServicesPage,
} from "./Pages";

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
  const [currentSection, setCurrentSection] = useState(SectionEnum.contact);

  let displayElement = <div />;

  switch (currentSection) {
    case SectionEnum.home:
      displayElement = <HomePage setCurrentSection={setCurrentSection} />;
      break;
    case SectionEnum.services:
      displayElement = <ServicesPage setCurrentSection={setCurrentSection} />;
      break;
    case SectionEnum.work:
      displayElement = <WorkPage setCurrentSection={setCurrentSection} />;
      break;
    case SectionEnum.ideas:
      displayElement = <IdeasPage setCurrentSection={setCurrentSection} />;
      break;
    case SectionEnum.contact:
      displayElement = <ContactPage setCurrentSection={setCurrentSection} />;
      break;
    case SectionEnum.about:
      displayElement = <AboutPage setCurrentSection={setCurrentSection} />;
      break;
    default:
      displayElement = <ReactPage />;
      // displayElement = <div>Error</div>;
      break;
  }

  return (
    <div className="App">
      {/* <HomePageContainer>
        <NavBar setCurrentSection={setCurrentSection} />

        {displayElement}
      </HomePageContainer> */}
      <NavBar />

      <Main />

      <footer>Copyright 2021 All rights reserved.</footer>
    </div>
  );
}

export default App;
