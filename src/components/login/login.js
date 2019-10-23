import React from "react";
import SpotifyLogin from "./spotifyLogin";
import { Redirect } from "react-router-dom";

let accessToken = !!localStorage.getItem("access_token");

class Login extends React.Component {
  constructor(props) {
    super(props);
    let redirected = localStorage.getItem("redirect");
    localStorage.removeItem("redirect");
    this.redirectpath = redirected ? JSON.parse(redirected) : "/";
  }
  componentDidMount() {
    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.from
    ) {
      localStorage.setItem(
        "redirect",
        JSON.stringify(this.props.location.state.from)
      );
    }
  }

  render() {
    if (accessToken) {
      return <Redirect to={this.redirectpath} />;
    } else
      return (
        <div>
          <SpotifyLogin />
        </div>
      );
  }
}

export default Login;
