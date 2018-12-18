import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import PeopleItem from "./PeopleItem/PeopleItem";

class FindPeople extends Component {
  render() {
    return (
      <div className="FindPeople">
        <div className="container">
          <SearchBar />
          <div className="FindPeople__people-lists">
            <div className="row">
              <PeopleItem name="Samrat Luintel" following={2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FindPeople;
