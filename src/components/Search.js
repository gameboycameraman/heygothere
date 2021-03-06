import React from 'react';
import Result from './Result';
import { Fetch } from 'react-request';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: ''};

    this.searchLocation = this.searchLocation.bind(this);
  }

  searchLocation(locationName) {
    this.setState({location: locationName.target.value});
  }

  render() {
    return(
      <div className="App">
        <div className="homepage">
          <h2 className="title">Hey! Go! Let's Go!</h2>
          <input className="search-field" type="text" placeholder="Type in a location" value={this.state.location} onChange={this.searchLocation} data-testid="search-field"/>
          <div className="list-locations">
            <Fetch url={'https://code-challenge-backend.herokuapp.com/locations?q=' + this.state.location}>
              {({ fetching, failed, data }) => {
                if (data != null && data.length > 0) {
                  return data.map(location => {
                    return <Result key={location.id} url={location.id} name={location.name}/>
                  });
                }
                return null;
              }}
            </Fetch>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;