import React, { Component } from "react";

class ProfileLeftNav extends Component {
  render() {
    return (
      <div className="ProfileLeftNav">
        <div className="ProfileLeftNav__top-area">
          <div className="ProfileLeftNav__author-thumb">
            <img
              src="https://randomuser.me/api/portraits/med/men/80.jpg"
              alt=""
              className="ProfileLeftNav__author-image"
            />
            <span className="ProfileLeftNav__author-thumb__name">
              Samrat Luintel
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
