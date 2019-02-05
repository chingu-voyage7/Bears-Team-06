import React, { Component } from "react";
import PublicProfileContext from "../../_publicProfileContext";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ProfileMainAuthorArea extends Component {
  static contextType = PublicProfileContext;

  redirectToPrivateChat = () => {
    const receiverName = this.context.username;
    const senderName = this.props.profile.username;
    this.props.history.push(`/chat/${receiverName}.${senderName}`);
  };
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
              20
            </p>
            <p className="ProfileMainAuthorArea__additional-info__single-item__title">
              Total Likes
            </p>
          </div>
        </div>

        <div className="ProfileMainAuthorArea__message-btn-container">
          {" "}
          <div
            className="ProfileMainAuthorArea__message-btn"
            onClick={this.redirectToPrivateChat}
          >
            <i class="fas fa-envelope" /> Message
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(withRouter(ProfileMainAuthorArea));
