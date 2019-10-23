import React, { Component } from "react";
import { Link } from "react-router-dom";
import Categories from "./categories";
class CategoriesItem extends Component {
  state = {
    data: [],
    tracks: [],
    loading: true
  };

  componentDidMount() {
    let accessToken = localStorage.getItem("access_token");
    console.log(this.props + "skjrbvjhv");
    fetch(
      `https://api.spotify.com/v1/browse/categories/${this.props.match.params.categoriesItem}/playlists`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    )
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          data: resJson.playlists.items,
          loading: false
        });
      });
  }
  render() {
    let currentpath = this.props.match.path;
    if (this.state.loading) return <p>loading...</p>;
    return (
      <ul>
        {this.state.data.map(playlists => (
          <li key={playlists.id} style={{ marginBottom: "10px" }}>
            <img
              alt="muImage"
              style={{
                paddingRight: "10px",
                width: "40px",
                height: "40px",
                verticalAlign: "-15px"
              }}
              src={playlists.images[0].url}
            />
            <Link
              style={{ textDecoration: "none" }}
              to={`${currentpath}/${playlists.id}`}>
              {playlists.name} ({playlists.tracks.total})
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default CategoriesItem;
