import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateProfile } from "../../../../../../store/actions/profile/profile";
import { fetchAdditionalTableAndChart } from "../../../../../../store/actions/dashboard/dashboard";

class SingleCompanyList extends Component {
  followCompany = async company => {
    try {
      console.log("Follow companies have been called", company);
      const res = await axios.post(`/api/user/company-follow`, { company });
      this.props.updateProfile(res.data);
      this.props.fetchAdditionalTableAndChart(
        company,
        this.props.dashboard.table,
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  unfollowCompany = async company => {
    try {
      console.log("Unfollow company have been called", company);
      const res = await axios.post("/api/user/company-unfollow", { company });
      this.props.updateProfile(res.data);
      this.props.fetchAdditionalTableAndChart(
        company,
        this.props.dashboard.table,
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    let button = null;
    if (!this.props.isFollowed) {
      button = (
        <div
          className="SingleCompanyList__action-btn"
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
          className="SingleCompanyList__action-btn SingleCompanyList__action-btn--dark"
        >
          UnFollow
        </div>
      );
    }
    return (
      <div className="SingleCompanyList">
        <div className="SingleCompanyList__name">{this.props.company.name}</div>
        {button}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  dashboard: state.dashboard,
});
export default connect(
  mapStateToProps,
  { updateProfile, fetchAdditionalTableAndChart },
)(SingleCompanyList);
