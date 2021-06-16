import React from "react";
import { useParams, Link } from 'react-router-dom';

import { Fetch } from 'react-request';
import './LocationPage.css';
import GoogleMap from '../components/GoogleMap';

function LocationPage(props) {
  const params = useParams();

  return (
    <>
      <Fetch url={'https://code-challenge-backend.herokuapp.com/locations/' + params.id}>
        {({ fetching, failed, data }) => {
          if (data) {
            return (
              <div className="parent">
                <p className="center location-title">Welcome to {data.name}!</p>
                <div className="map">
                  <GoogleMap latitude={data.latitude} longitude={data.longitude} />
                </div>
                <div className="center">
                  <Link to={'/'} className="link">Start a new <span className="search">Search!</span></Link>
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