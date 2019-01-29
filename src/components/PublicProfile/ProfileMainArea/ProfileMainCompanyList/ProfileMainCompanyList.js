import React, { Component } from "react";
import PublicProfileContext from "../../_publicProfileContext";
import { connect } from "react-redux";
import _ from "lodash";
import ProfileSingleCompanyList from "./ProfileSingleCompanyList/ProfileSingleCompanyList";

class ProfileMainCompanyList extends Component {
  static contextType = PublicProfileContext;

  renderCompanyLists = () => {
    if (this.context.companies.length === 0) {
      return (
        <p className="ProfileMainCompanyList__message">
          The user is not following any company at the moment
        </p>
      );
    }
    return this.context.companies.map(company => {
      const companies = this.props.profile.companies;
      let isFollowed = false;
      //If the company exist in user companies array
      //the user is followed that company
      if (
        _.findIndex(companies, o => {
          return _.isMatch(o, company);
        }) > -1
      )
        isFollowed = true;
      return (
        <ProfileSingleCompanyList isFollowed={isFollowed} company={company} />
      );
    });
  };
  render() {
    console.log("Render Company List", this.context.companies);
    return (
      <div className="ProfileMainCompanyList">
        <div className="ProfileMainCompanyList__header">
          Companies followed by user
        </div>
        <div className="ProfileMainCompanyList__wrapper">
          {this.renderCompanyLists()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  settings: state.settings,
});

export default connect(mapStateToProps)(ProfileMainCompanyList);
