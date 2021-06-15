import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function GoogleMap(props) {
  return (
    <Map
      google={props.google}
      zoom={12}
      // style={mapStyles}
      initialCenter={{ lat: props.latitude, lng: props.longitude}}
    >
      <Marker
      title={'The marker`s title will appear as a tooltip.'}
      name={'SOMA'}
      position={{lat: props.latitude, lng: props.longitude}} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB8NfCAYnuWKCWbynLO-cT3_5YpBrjuHK8'
})(GoogleMap);