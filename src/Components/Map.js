import React, { useState, Component } from "react";
import ReactMapboxGl, { Feature, Layer, Popup } from "react-mapbox-gl";
import { siteAuditMarkers } from "../Constants/Icons";
import { generateRandomDataSet } from "../Utilities/Numbers";

export class ReactMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Map: ReactMapboxGl({
        accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
      }),
      viewport: props.data.lngLat,
      // initialZoom: props.data.zoom,
      hoverSite: {},
    };
  }

  componentDidMount() {
    const dataset = generateRandomDataSet(30, this.props.data.lngLat);

    this.setState({ dataset });
  }

  render() {
    const { siteData } = this.props;

    const { Map, hoverSite, viewport, dataset } = this.state;

    console.log(this.state);

    return (
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v11"
          center={viewport}
          containerStyle={{
            height: "80vh",
            width: "80vw",
          }}
        >
          {/* {hoverSite?.siteName && (
            <Popup
              coordinates={hoverSite.lngLat}
              closeButton={false}
              closeOnClick={false}
            >
              {`Hello, this site is called ${hoverSite.siteName}`}
            </Popup>
          )} */}

          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "mapIcon", "icon-allow-overlap": true }}
            images={siteAuditMarkers}
          >
            {siteData.map((site) => (
              <Feature
                key={site.uniqueId}
                coordinates={[site.longitude, site.latitude]}
                onMouseEnter={() => {
                  this.setState({ hoverSite: site });
                }}
                // onMouseLeave={() => {
                //   this.setState({ hoverSite: {} });
                // }}
              />
            ))}
          </Layer>

          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "mapIcon", "icon-allow-overlap": true }}
            images={siteAuditMarkers}
          >
            {dataset && dataset.map((site) => (
              <Feature
                key={site.uniqueId}
                coordinates={site.lngLat}
                onMouseEnter={() => {
                  this.setState({ hoverSite: site });
                }}
                // onMouseLeave={() => {
                //   this.setState({ hoverSite: {} });
                // }}
              />
            ))}
          </Layer>
        </Map>
      </div>
    );
  }
}
