import React, { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import MapGL, { Layer, Marker, Popup } from "@urbica/react-map-gl";
import Cluster from "@urbica/react-map-gl-cluster";
import { mapIcon } from "../Constants/Icons";
import { generateRandomDataSet } from "../Utilities/Numbers";
import { blue1 } from "../Constants/Colors";
import { Button } from "react-bootstrap";

const NUMBER_OF_DATA_POINTS = 5;
const AUSTRALIA_BOUNDS = {
  longitude: 147.19554,
  latitude: -25.5632,
  zoom: 10,
};

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
  const [visible, setVisible] = useState(true);

  const [viewport, setViewport] = useState(props.configuration);

  useEffect(async () => {
     setMapPins(await generateRandomDataSet(NUMBER_OF_DATA_POINTS, viewport));
  }, []);

  console.log(mapPins);

  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </Button>

      {/* <Button
        onClick={() =>
          setMapPins(generateRandomDataSet(NUMBER_OF_DATA_POINTS, viewport))
        }
      >
        Generate new data points
      </Button> */}

      <Button
        onClick={async () => {
          await new Promise(r => setTimeout(r, 200));

          const newPin = await generateRandomDataSet(1, viewport, mapPins.length);
            
          setMapPins([...mapPins, ...newPin]);
        }}
      >
        Add a new random data point in view
      </Button>

      <MapGL
        style={{ width: "80vw", height: "80vh" }}
        mapStyle="mapbox://styles/cxczau/ckjmnzi6321ze19o2to7b49im"
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

              <div>{hoverSite.lngLat}</div>

              <div>Click to view full site details</div>
            </Dialog>
          </Popup>
        )}

        {visible && (
          <Cluster
            radius={40}
            extent={512}
            nodeSize={64}
            component={ClusterMarker}
          >
            {mapPins.length > 0 &&
              mapPins.map((item, index) => (
                <Marker
                  key={`marker-${item.uniqueId}`}
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
          </Cluster>
        )}
      </MapGL>
    </div>
  );
};

export default UrbicaReactHookMap;
