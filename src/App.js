import React from "react";
import "./App.css";
import { ReactMap } from "./Components/Map";
import NavBar from "./Components/Home/NavBar";
import ReactHookMap from "./Components/MapWithHooks";
import { jsonData, SectionEnum, mapConfiguration } from "./Constants/Data";
import { generateRandomDataSet } from "./Utilities/Numbers";

function App() {
  const dataset = generateRandomDataSet(30, mapConfiguration.lngLat);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {/* <ReactMap 
          siteData={dataset}
          data={mapConfiguration}
        /> */}
        <ReactHookMap mapData={dataset} data={mapConfiguration} />
      </header>
    </div>
  );
}

export default App;
