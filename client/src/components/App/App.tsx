import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Homepage from '../../pages/Homepage/Homepage'
import Playlists from '../../pages/Playlists/Playlists'
import FriendList from '../../pages/FriendList/FriendList'
import Friend from '../../pages/Friend/Friend'

function App() {
  return (
    <Router>
      <div className="App">
        {console.log("App page")}
        <Navbar/>
        <Switch>
          <Route exact path="/"  component={Homepage}/>
          <Route path="/playlists" component={Playlists}/>
          <Route exact path="/friendlist" component={FriendList}/>
          <Route path="/shop/:id" component={Friend}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
