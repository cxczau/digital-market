import React, { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import MapGL, { Layer, Marker, Popup } from "@urbica/react-map-gl";
import Cluster from "@urbica/react-map-gl-cluster";
import { mapIcon } from "../Constants/Icons";
import { jsonData } from "../Constants/Data";
import { generateRandomDataSet } from "../Utilities/Numbers";
import { blue1 } from "../Constants/Colors";

const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  max-height: 30vh;
  max-width: 30vh;
  background: ${blue1};
`;

const style = {
  width: "20px",
  height: "20px",
  color: "#fff",
  background: "#1978c8",
  borderRadius: "20px",
  textAlign: "center",
};

const ClusterMarker = ({ longitude, latitude, pointCount }) => (
  <Marker longitude={longitude} latitude={latitude}>
    <div style={{ ...style, background: "#f28a25" }}>{pointCount}</div>
  </Marker>
);

const UrbicaReactHookMap = (props) => {
  const [hoverSite, setHoverSite] = useState();
  const [mapPins, setMapPins] = useState([]);
  const [visible, setVisible] = useState(false);

  const [viewport, setViewport] = useState(props.configuration);

  useEffect(() => {
    setMapPins(generateRandomDataSet(30, viewport));
  }, []);

  // console.log(props);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Show</button>

      <MapGL
        style={{ width: "80vw", height: "80vh" }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        accessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...viewport}
        onViewportChange={setViewport}
      >
        {!!hoverSite && !!hoverSite.siteName && (
          <Popup
            longitude={hoverSite.longitude}
            latitude={hoverSite.latitude}
            closeButton={false}
            closeOnClick={false}
            style={{
              color: "black",
            }}
          >
            <Dialog>
              <div>{hoverSite.siteName}</div>

              <div>Click to view full site details</div>
            </Dialog>
          </Popup>
        )}

        {visible && <Cluster
          // ref={clusterRef}
          radius={40}
          extent={512}
          nodeSize={64}
          component={ClusterMarker}
        >
          {
            mapPins.length > 0 &&
            mapPins.map((item, index) => (
              <Marker
                key={item.uniqueId}
                longitude={item.lngLat[0]}
                latitude={item.lngLat[1]}
              >
                <div
                  // onClick={() => setCurrentSite(item)}
                  onMouseEnter={() => setHoverSite(item)}
                  onMouseLeave={() => setHoverSite(null)}
                >
                  <img src={mapIcon.src} />
                </div>
              </Marker>
            ))}
        </Cluster>}
      </MapGL>
    </div>
  );
};

export default UrbicaReactHookMap;
