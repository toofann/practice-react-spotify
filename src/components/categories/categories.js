import React, { Component } from "react";
import { Link } from "react-router-dom";
class Categories extends Component {
  state = {
    categories: [],
    loading: true
  };
  componentDidMount() {
    let accessToken = localStorage.getItem("access_token");
    fetch("https://api.spotify.com/v1/browse/categories", {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` }
    })
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          categories: resJson.categories.items,
          loading: false
        });
      });
  }

  render() {
    let currentpath = this.props.match.path;
    if (this.state.loading) return <p>loading...</p>;
    return (
      <ul>
        {this.state.categories.map(item => (
          <li key={item.id}>
            <Link to={`${currentpath}/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Categories;
