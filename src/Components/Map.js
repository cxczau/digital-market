import React, { Component } from "react";
import ReactMapboxGl, { Feature, Layer } from "react-mapbox-gl";
import { siteAuditMarkers } from "../Constants/Icons";
import { jsonData } from "../Constants/Data";

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

  render() {
    const { Map, viewport } = this.state;

    // const { siteData } = this.props;

    // console.log(siteData);
    const siteData = jsonData;

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
            {siteData && siteData.map((site) => (
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
