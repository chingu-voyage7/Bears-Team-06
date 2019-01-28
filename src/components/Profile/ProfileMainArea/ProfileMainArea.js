import React, { Component } from "react";
import ProfileMainAuthorArea from "./ProfileMainAuthorArea/ProfileMainAuthorArea";
import ProfileMainCompanyList from "./ProfileMainCompanyList/ProfileMainCompanyList";

class ProfileMainArea extends Component {
  render() {
    return (
      <div className="ProfileMainArea">
        <div className="ProfileMainArea__header" />
        <ProfileMainAuthorArea />
        <ProfileMainCompanyList />
      </div>
    );
  }
}
export default ProfileMainArea;
