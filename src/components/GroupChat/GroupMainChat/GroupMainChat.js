import React, { Component } from "react";
import GroupChatMessages from "./GroupChatMessages/GroupChatMessages";
import GroupSendMessage from "./GroupSendMessage/GroupSendMessage";
import { withRouter } from "react-router-dom";

class GroupMainChat extends Component {
  redirectToHome = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="GroupMainChat">
        <div className="GroupMainChat__header">
          <h1 className="GroupMainChat__header__text">
            <span className="GroupMainChat__header__hashtag">#</span> Welcome
            <span
              className="GroupMainChat__header__go-home"
              onClick={this.redirectToHome}
            >
              Go Home
            </span>
          </h1>
          {!this.props.rightNav && (
            <div
              className="GroupMainChat__expand-right-nav-btn"
              onClick={() => this.props.setRightNav(true)}
            >
              <i class="fas fa-users" />
            </div>
          )}
        </div>
        <GroupChatMessages />
        <GroupSendMessage />
      </div>
    );
  }
}
export default withRouter(GroupMainChat);
