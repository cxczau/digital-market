import React, { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import MapGL, { Layer, Marker, Popup } from "@urbica/react-map-gl";
import Cluster from "@urbica/react-map-gl-cluster";
import { mapIcon } from "../Constants/Icons";
import {
  generateRandomDataSet,
  generateRandomCities,
} from "../Utilities/Numbers";
import { blue1, gradientColor, grey6 } from "../Constants/Colors";
import { Button } from "react-bootstrap";

const INITIAL_DATA_POINTS = 10;
const NUMBER_OF_DATA_POINTS = 20;

const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  max-height: 30vh;
  max-width: 30vh;
  background: ${blue1};
`;

const style = {
  width: "30px",
  height: "30px",
  color: grey6,
  background: "#1978c8",
  borderRadius: "20px",
  textAlign: "center",
};

const ClusterMarker = ({ longitude, latitude, pointCount }) => (
  <Marker longitude={longitude} latitude={latitude}>
    {/* TODO: make text a bit bigger and centered */}
    <div style={{ ...style, background: gradientColor('Deep Blue') }}>{pointCount}</div>
  </Marker>
);

const UrbicaReactHookMap = (props) => {
  const [hoverSite, setHoverSite] = useState();
  const [mapPins, setMapPins] = useState([]);
  const [visible, setVisible] = useState(true);

  const [viewport, setViewport] = useState(props.configuration);

  useEffect(async () => {
    // TODO: generate map pins within bounds of map view
    setMapPins(await generateRandomDataSet(INITIAL_DATA_POINTS, viewport));
  }, []);

  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </Button>

      <Button
        onClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, 200));

          const newPins = await generateRandomCities(
            NUMBER_OF_DATA_POINTS,
            mapPins.length
          );

          setMapPins([...mapPins, ...newPins]);
        }}
      >
        Generate New Data
      </Button>

      <Button
        onClick={async () => {
          const newPin = await generateRandomDataSet(
            1,
            viewport,
            mapPins.length
          );

          setMapPins([...mapPins, ...newPin]);
        }}
      >
        Add a New Pin (Random)
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

              <div>
                {hoverSite.latitude},{hoverSite.longitude}
              </div>

              <div>{hoverSite.city?.city}</div>

              <div>
                {hoverSite.city?.population
                  ? `Est. Population of City: ${hoverSite.city?.population}`
                  : ""}
              </div>

              {/* <div>Click to view full site details</div> */}
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
                  longitude={item.longitude}
                  latitude={item.latitude}
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
