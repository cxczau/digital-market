import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/Home/NavBar";
import UrbicaReactHookMap from "./Components/UrbicaMap";
import { urbicaMapConfiguration, SectionEnum } from "./Constants/Data";
import Magic from "./Components/Magic/Index";

function App() {
  const [currentSection, setCurrentSection] = useState(SectionEnum.maps);

  let displayElement = <div />;

  switch (currentSection) {
    case SectionEnum.maps:
      displayElement = (
        <UrbicaReactHookMap configuration={urbicaMapConfiguration} />
      );
      break;
    case SectionEnum.magic:
      displayElement = <Magic />;
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
