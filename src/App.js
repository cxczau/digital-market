import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./Components/Home/NavBar";
import UrbicaReactHookMap from "./Components/UrbicaMap";
import ReactPage from "./Components/ByteSized/ReactPage";
// import VideoPage from "./Components/ByteSized/VideoPage";
import { urbicaMapConfiguration, SectionEnum } from "./Constants/Data";
import Magic from "./Components/Magic/Index";
// import CardListSorter from "./Components/Magic/CardListSorter";

function App() {
  const [currentSection, setCurrentSection] = useState(SectionEnum.react);

  let displayElement = <div />;

  switch (currentSection) {
    case SectionEnum.maps:
      displayElement = (
        <UrbicaReactHookMap configuration={urbicaMapConfiguration} />
      );
      break;
    case SectionEnum.react:
      displayElement = (
        <ReactPage />
        // <VideoPage />
      );
      break;
    case SectionEnum.magic:
      displayElement = <Magic />;
      // displayElement = <CardListSorter />;
      break;
    default:
      displayElement = <div>Error</div>;
      break;
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar setCurrentSection={setCurrentSection} />

        {displayElement}
      </header>
    </div>
  );
}

export default App;
