import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Callback extends Component {
  constructor(props) {
    super(props);
    let redirected = localStorage.getItem("redirect");
    localStorage.removeItem("redirect");
    this.redirectpath = redirected ? JSON.parse(redirected) : "/";
  }
  componentDidMount() {
    let props = new URLSearchParams(this.props.location.hash.slice(1));
    let accessToken = props.get("access_token");
    localStorage.setItem("access_token", accessToken);
    window.location.reload();
  }
  render() {
    return <Redirect to={this.redirectpath} />;
  }
}

export default Callback;
