import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "../Navbar/Navbar";
import Player from "../Player/Player";

//Pages
import Homepage from "../../pages/Homepage/Homepage";
import Playlists from "../../pages/Playlists/Playlists";
import FriendList from "../../pages/FriendList/FriendList";
import Friend from "../../pages/Friend/Friend";
import FeedPage from "../../pages/FeedPage/FeedPage";
import LoginRegister from "../../pages/LoginRegister/LoginRegister";
import SpotifyAuth from "../../pages/SpotifyAuth/SpotifyAuth";

function App() {
  return (
    <Router>
      <div className="App">
        {console.log("App page")}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/playlists" component={Playlists} />
          <Route exact path="/friendlist" component={FriendList} />
          <Route path="/activityfeed" component={FeedPage} />
          <Route path="/shop/:id" component={Friend} />
          <Route path="/login" component={LoginRegister} />
          <Route path="/spotify_auth" component={SpotifyAuth} />
        </Switch>
        <div className="MediaPlayer">
          <Player />
        </div>
      </div>
    </Router>
  );
}

export default App;
