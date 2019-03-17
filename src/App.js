import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import SpotifyCallback from "./SpotifyCallback";
import HomePage from "./HomePage";
import Categories from "./Categories";
import Dashboard from "./Dashboard.js";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%", textAlign: "center" }}>
        <nav>
          <ul>
            <li>
              <a href="https://accounts.spotify.com/authorize?client_id=f9428e0a6da742fe95c588e01e9ce4bf&response_type=token&redirect_uri=http://localhost:3000/callback/">
                Login
              </a>
            </li>
            <li>
              <Link to="/Categories">Login Categorise</Link>
            </li>
          </ul>
        </nav>
        <Route path="/callback" component={SpotifyCallback} />
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/Categories" component={Categories} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
