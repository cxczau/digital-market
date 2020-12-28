import React from "react";
import "./App.css";
import NavBar from "./Components/Home/NavBar";
import UrbicaReactHookMap from "./Components/UrbicaMap";
import { jsonData, SectionEnum, mapConfiguration, urbicaMapConfiguration } from "./Constants/Data";
import { generateRandomDataSet } from "./Utilities/Numbers";

function App() {
  const dataset = generateRandomDataSet(30, mapConfiguration.lngLat);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
        <UrbicaReactHookMap mapData={dataset} configuration={urbicaMapConfiguration} />
      </header>
    </div>
  );
}

export default App;
