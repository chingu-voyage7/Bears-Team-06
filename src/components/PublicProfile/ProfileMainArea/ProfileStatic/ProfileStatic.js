import React, { Component } from "react";

class ProfileStatic extends Component {
  render() {
    return (
      <div className="ProfileStatic">
        <div className="ProfileStatic__single-item">
          <p className="ProfileStatic__single-item__title">Profile Views</p>
          <p className="ProfileStatic__single-item__sub-title">799,571</p>
          <p className="ProfileStatic__single-item__compare">
            +201,999 since last month
          </p>
        </div>
        <div className="ProfileStatic__single-item">
          <p className="ProfileStatic__single-item__title">Posts</p>
          <p className="ProfileStatic__single-item__sub-title">121</p>
          <p className="ProfileStatic__single-item__compare">
            +54 since last month
          </p>
        </div>
        <div className="ProfileStatic__single-item">
          <p className="ProfileStatic__single-item__title">Likes</p>
          <p className="ProfileStatic__single-item__sub-title">1001</p>
          <p className="ProfileStatic__single-item__compare">
            +201 since last month
          </p>
        </div>
      </div>
    );
  }
}
export default ProfileStatic;
