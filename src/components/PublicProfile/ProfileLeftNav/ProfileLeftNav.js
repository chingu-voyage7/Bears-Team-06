import React, { Component } from "react";
import PublicProfileContext from "../_publicProfileContext";

class ProfileLeftNav extends Component {
  static contextType = PublicProfileContext;
  render() {
    return (
      <div className="ProfileLeftNav">
        <div className="ProfileLeftNav__top-area">
          <div className="ProfileLeftNav__author-thumb">
            <img
              src={this.context.userImage}
              alt=""
              className="ProfileLeftNav__author-image"
            />
            <span className="ProfileLeftNav__author-thumb__name">
              {this.context.username}
            </span>
          </div>
        </div>
        <div className="ProfileLeftNav__action-area">
          <h3 className="ProfileLeftNav__action-area__header">Profile Page</h3>
          <div className="ProfileLeftNav__action-area__action">
            {" "}
            <i class="fas fa-envelope" />
            Message
          </div>
          <div className="ProfileLeftNav__action-area__action">
            <i class="fas fa-search" /> Placeholder1
          </div>
          <div className="ProfileLeftNav__action-area__action">
            <i class="fas fa-search" />
            Placeholder2
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileLeftNav;
