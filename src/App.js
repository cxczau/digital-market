import React from 'react';
import './App.css';
import { ReactMap } from './Components/Map';
import ReactHookMap from './Components/MapWithHooks';
import { jsonData, MAP_CONFIG } from './Constants/Data';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <ReactMap 
          siteData={jsonData}
          data={MAP_CONFIG}
        />
        {/* <ReactHookMap 
          mapData={jsonData}
          data={MAP_CONFIG}
        /> */}
        
      </header>
    </div>
  );
}

export default App;
