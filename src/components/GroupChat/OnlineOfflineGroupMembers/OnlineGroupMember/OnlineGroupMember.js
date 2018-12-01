import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class OnlineGroupMember extends Component {
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
      <div className="OnlineGroupMember">
        <div className="OnlineGroupMember__body">
          <div className="OnlineGroupMember__author-thumb-wrapper">
            <div className="OnlineGroupMember__author-thumb">
              <img
                className="OnlineGroupMember__author-image"
                src={props.image}
                alt=""
              />
              <div className="OnlineGroupMember__online-icon" />
            </div>
          </div>
          <div className="OnlineGroupMember__user-name">Samrata</div>
        </div>
      </div>
    );
  }
}

export default withRouter(OnlineGroupMember);
