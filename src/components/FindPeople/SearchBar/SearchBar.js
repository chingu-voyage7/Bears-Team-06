import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchText: "",
  };
  render() {
    return (
      <div className="SearchBar">
        <input
          type="text"
          className="SearchBar__search-bar"
          placeholder="Find people of friend near you"
        />
        <div className="SearchBar__find-btn">Find People</div>
      </div>
    );
  }
}
export default SearchBar;
