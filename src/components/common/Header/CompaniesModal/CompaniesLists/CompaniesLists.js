import React, { Component } from "react";
import SingleCompanyList from "./SingleCompanyList/SingleCompanyList";

class CompaniesLists extends Component {
  render() {
    return (
      <div className="CompaniesLists">
        <SingleCompanyList />
        <SingleCompanyList isFollowed={true} />
      </div>
    );
  }
}
export default CompaniesLists;
