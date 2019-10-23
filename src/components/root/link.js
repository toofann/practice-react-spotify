import React, { Component } from "react";
import { Link } from "react-router-dom";
import Li from "../uiComponent/li";
import Ul from "../uiComponent/ul";

let accessToken = !!localStorage.getItem("access_token");
const AuthLink = ({ AuthComponent, UnauthComponent }) => {
  if (accessToken) return AuthComponent;
  else return UnauthComponent;
};

class LinkComponent extends Component {
  render() {
    return (
      <div>
        <Ul>
          <Li>
            <AuthLink
              AuthComponent={<Link to="/dashboard">Dashboard</Link>}
              UnauthComponent={<Link to="/login">Login</Link>}
            />
          </Li>
          <Li>
            <Link to="/">home</Link>
          </Li>
          <Li>
            <Link to="/categories">categories</Link>
          </Li>
        </Ul>
      </div>
    );
  }
}

export default LinkComponent;
