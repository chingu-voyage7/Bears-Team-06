import React, { Component } from "react";
import PublicProfileContext from "../../_publicProfileContext";

class ProfileMainAuthorArea extends Component {
  static contextType = PublicProfileContext;

  render() {
    return (
      <div className="ProfileMainAuthorArea">
        <div className="ProfileMainAuthorArea__first-row-wrapper">
          <div className="ProfileMainAuthorArea__author-thumb">
            <img
              src={this.context.userImage}
              alt=""
              className="ProfileMainAuthorArea__author-thumb__image"
            />
          </div>
          <div className="ProfileMainAuthorArea__author-info">
            <p className="ProfileMainAuthorArea__author-info__name">
              {this.context.username}
            </p>
            <p className="ProfileMainAuthorArea__author-info__description">
              Most of the user description goes here
            </p>
          </div>
        </div>

        <div className="ProfileMainAuthorArea__additional-info">
          <div className="ProfileMainAuthorArea__additional-info__single-item">
            <p className="ProfileMainAuthorArea__additional-info__single-item__number">
              {this.context.companies.length}
            </p>
            <p className="ProfileMainAuthorArea__additional-info__single-item__title">
              Company Following
            </p>
          </div>
          <div className="ProfileMainAuthorArea__additional-info__single-item">
            <p className="ProfileMainAuthorArea__additional-info__single-item__number">
              201
            </p>
            <p className="ProfileMainAuthorArea__additional-info__single-item__title">
              Total Likes
            </p>
          </div>
        </div>

        <div className="ProfileMainAuthorArea__message-btn-container">
          {" "}
          <div className="ProfileMainAuthorArea__message-btn">
            <i class="fas fa-envelope" /> Message
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileMainAuthorArea;
