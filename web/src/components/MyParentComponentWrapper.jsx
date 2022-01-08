import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBk7A5ced35QBnyqBlPONErGyLu-E9Jh6E&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        position: null,
        onMarkerMounted: (ref) => {
          refs.marker = ref;
        },

        onPositionChanged: () => {
          const position = refs.marker.getPosition();
          console.log(position.toString());
          let livePos = position.toString();

          console.log("fsdf" + livePos);
        },
      });
    },
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 41.69323, lng: -8.83287 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 41.69323, lng: -8.83287 }}
        draggable={true}
        ref={props.onMarkerMounted}
        onPositionChanged={props.onPositionChanged}
      />
    )}
  </GoogleMap>
));

class MyParentComponentWrapper extends React.PureComponent {
  state = {
    isMarkerShown: false,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render() {
    return (
      <div>
        <MyMapComponent isMarkerShown={true} />
      </div>
    );
  }
}

export default MyParentComponentWrapper;
