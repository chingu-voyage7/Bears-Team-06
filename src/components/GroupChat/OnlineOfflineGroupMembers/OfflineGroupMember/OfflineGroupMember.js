import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class OfflineGroupMember extends Component {
  redirectToPrivateChat = () => {
    //props.name refers to the online friend
    //props.fullname refers to active user name
    const receiverName = this.props.name;
    const senderName = this.props.username;
    this.props.history.push(`/chat/${receiverName}.${senderName}`);
  };

  //.ChatUser__author-thumb is defined on parent
  render() {
    const { props } = this;

    return (
      <div className="OfflineGroupMember">
        <div className="OfflineGroupMember__body">
          <div className="OfflineGroupMember__author-thumb-wrapper">
            <div className="OfflineGroupMember__author-thumb">
              <img
                className="OfflineGroupMember__author-image"
                src={props.image}
                alt=""
              />
            </div>
          </div>
          <div className="OnlineGroupMember__user-name">User</div>
        </div>
      </div>
    );
  }
}

export default withRouter(OfflineGroupMember);
