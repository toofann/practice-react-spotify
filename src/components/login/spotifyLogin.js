import React, { Component } from "react";
import { css } from "styled-components/macro";

let clientId = `f9428e0a6da742fe95c588e01e9ce4bf`;
class SpotifyLogin extends Component {
  render() {
    return (
      <a
        css={css`
          background-color: #9e35fd;
          color: white;
          border: 1px solid gray;
          padding: 10px;
          border-radius: 3px;
          &:hover {
            color: white !important;
            background-color: #be48fd;
          }
        `}
        href={`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000/callback/&scope=user-read-email playlist-read-collaborative playlist-modify-private playlist-modify-public playlist-read-private user-top-read`}
      >
        login whit spotify
      </a>
    );
  }
}

export default SpotifyLogin;
