import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import LocationPage from './pages/LocationPage'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact>
          <Search/>
        </Route>
        <Route path='/location/:id' exact>
          <LocationPage/>
        </Route>
      </Switch>
    );
  }
}

export default App;
