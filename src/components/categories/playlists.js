import React, { Component } from "react";
class PlayLists extends Component {
  state = {
    playLists: [],
    loading: true
  };
  componentDidMount() {
    let accessToken = localStorage.getItem("access_token");
    console.log(this.props);

    fetch(
      `https://api.spotify.com/v1/playlists/${this.props.match.params.categoriesPlaylist}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    )
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          playLists: resJson.tracks.items,
          loading: false
        });
      });
  }
  render() {
    if (this.state.loading) return <p>loading...</p>;
    return (
      <ul>
        {this.state.playLists.map(playLists => {
          console.log(playLists);
          if (playLists.track.preview_url) {
            return (
              <li style={{ margin: "30px", listStyle: "none" }}>
                <img
                  alt="myimage"
                  style={{
                    paddingRight: "10px",
                    width: "40px",
                    height: "40px",
                    verticalAlign: "-15px"
                  }}
                  src={playLists.track.album.images[0].url}
                />
                <i>{playLists.track.name}</i>
                <audio
                  style={{
                    height: "30px",
                    verticalAlign: "-10px",
                    marginLeft: "10px"
                  }}
                  controls>
                  <source
                    src={`${playLists.track.preview_url}`}
                    type="audio/ogg"
                  />
                  >
                  <source
                    src={`${playLists.track.preview_url}`}
                    type="audio/mpeg"
                  />
                  >
                </audio>
              </li>
            );
          } else if (playLists.track === null) return <p>not url</p>;
        })}
      </ul>
    );
  }
}

export default PlayLists;
