import React from "react";
import { useParams, Link } from 'react-router-dom';

import { Fetch } from 'react-request';
import './LocationPage.css';
import GoogleMap from '../components/GoogleMap';

function LocationPage(props) {
  const params = useParams();
  let locationDetails;
  console.log("LOCATION")
  console.log("This is params", params);
  console.log("This is props.name", props.name);
  console.log("This is google", window)

  return (
    <>
      <Fetch url={'https://code-challenge-backend.herokuapp.com/locations/' + params.id}>
        {({ fetching, failed, data }) => {
          if (fetching) {
            return <div>Loading data...</div>;
          }

          if (failed) {
            return <div>The request did not succeed.</div>;
          }

          if (data) {
            console.log(data)
            return (
              <div className="parent">
                <div>
                  <p>Welcome to {data.name}!</p>
                </div>
                <div className="map">
                  <GoogleMap latitude={data.latitude} longitude={data.longitude} />
                </div>
                <div>
                  <Link to={'/'}>Start a new Search!</Link>
                </div>
              </div>
            )
          }

          return null;
        }}
      </Fetch>
    </>
  )
};

export default LocationPage;