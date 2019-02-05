import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class SingleCompanyList extends Component {
  followCompany = async company => {
    try {
      console.log("Follow companies have been called", company);
      const res = await axios.post(`/api/user/company-follow`, { company });
    } catch (error) {
      console.log(error.response);
    }
  };

  unfollowCompany = async company => {
    try {
      console.log("Unfollow company have been called", company);
      const res = await axios.post("/api/user/company-unfollow", { company });
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    let button = null;
    if (!this.props.isFollowed) {
      button = (
        <div
          className="ProfileSingleCompanyList__action-btn"
          onClick={() => this.followCompany(this.props.company)}
        >
          Follow
        </div>
      );
    }
    if (this.props.isFollowed) {
      button = (
        <div
          onClick={() => this.unfollowCompany(this.props.company)}
          className="ProfileSingleCompanyList__action-btn ProfileSingleCompanyList__action-btn--dark"
        >
          UnFollow
        </div>
      );
    }
    return (
      <div className="ProfileSingleCompanyList">
        <div className="ProfileSingleCompanyList__name">
          {this.props.company.name}
        </div>
        {button}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  dashboard: state.dashboard,
});
export default connect(mapStateToProps)(SingleCompanyList);
