import React, { Component } from "react";
import axiosInstance from "./axios";
import debounce from "debounce";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    query: "",
    results: ""
  };

  search = () => {
    axiosInstance("/search", {
      params: {
        q: this.state.query,
        type: "track"
      }
    }).then(res => {
      this.setState({
        results: res.data.tracks.items.map(i => (
          <li key={i.id}>
            <Link to="/dashboard/search">{i.name}</Link>
          </li>
        ))
      });
      console.log(res.data);
    });
  };

  debouncedSearch = debounce(this.search, 500, false);

  handleQueryChange = event => {
    this.setState({ query: event.target.value }, () => {
      this.debouncedSearch();
    });
  };
  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          style={{ width: "45%", backgroundColor: "#eaeaea" }}
          placeholder="Search"
          type="text"
          value={this.state.query}
          onChange={this.handleQueryChange}
        />
        <ul>
          {this.state.results === "" || this.state.query === ""
            ? null
            : this.state.results}
        </ul>
      </div>
    );
  }
}

export default Search;
