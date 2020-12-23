import React, { useState, useEffect } from "react";
import ReactMapboxGl, { Feature, Layer, Popup } from "react-mapbox-gl";
import { siteAuditMarkers } from "../Constants/Icons";
import { jsonData } from "../Constants/Data";
import { generateRandomDataSet } from "../Utilities/Numbers";

const ReactHookMap = (props) => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     Map: ReactMapboxGl({
  //       accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
  //     }),
  //     viewport: [
  //       props.data.MAP_START.lng,
  //       props.data.MAP_START.lat,

  //     ],
  //     initialZoom: [props.data.MAP_START.zoom],
  //     currentHover: false,
  //     hoverSite: {},
  //   };
  // }

  const [hoverSite, setHoverSite] = useState(jsonData[0]);

  const [viewport, setViewport] = useState(props.data.lngLat);

  useEffect(() => {
    setViewport(props.data.lngLat);
  }, [props]);

  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
  });

  // console.log(props);

  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v11"
        center={viewport}
        containerStyle={{
          height: "80vh",
          width: "80vw",
        }}
        zoom={props.zoom}
      >
        {!!hoverSite && !!hoverSite.siteName && (
          <Popup
            coordinates={hoverSite.lngLat}
            closeButton={false}
            closeOnClick={false}
            style={{
              color: "black",
            }}
          >
            <h4>{hoverSite.siteName}</h4>

            <div>Click to view full site details</div>
          </Popup>
        )}

        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "mapIcon", "icon-allow-overlap": true }}
          images={siteAuditMarkers}
        >
          {/* {jsonData.map((element) => (
              <Feature
                key={element.uniqueId}
                coordinates={element.lngLat}
                // onMouseEnter={() => {
                //   setHoverSite(element)
                // }}
                // onMouseLeave={()=>{setHoverSite(null)}}
              />
            ))} */}
          <Feature coordinates={viewport} />
        </Layer>
      </Map>
    </div>
  );
};

export default ReactHookMap;
