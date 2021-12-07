import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

function GMaps() {

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 45.77149554747741, lng: 4.831496284233565 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 45.77149554747741, lng: 4.831496284233565 }} />}
    </GoogleMap>
  ))
  return (
    <div className="sm:mx-96 m-12">
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}

export default GMaps
