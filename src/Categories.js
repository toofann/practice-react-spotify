import React, { Component } from "react";

export class Categories extends Component {
  state = {
    isLoding: true,
    categories: []
  };
  componentDidMount() {
    let accessToken = localStorage.getItem("access_token");
    fetch("https://api.spotify.com/v1/browse/categories", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(jsonResponse => {
        this.setState({
          isLoding: false,
          categories: jsonResponse.categories.items
        });
      });
  }
  render() {
    if (this.state.isLoding) {
      return (
        <div>
          <p>loding...</p>
        </div>
      );
    } else {
      return (
        <ul>
          <h1>Categories</h1>
          {this.state.categories.map((category, index) => (
            <li key={category.id}>
              <a href={category.href}> {category.name}</a>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Categories;
