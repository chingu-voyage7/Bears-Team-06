import React, { Component } from "react";
import GroupChatMessages from "./GroupChatMessages/GroupChatMessages";
import GroupSendMessage from "./GroupSendMessage/GroupSendMessage";

class GroupMainChat extends Component {
  render() {
    return (
      <div className="GroupMainChat">
        <div className="GroupMainChat__header">
          <h1 className="GroupMainChat__header__text">
            <span className="GroupMainChat__header__hashtag">#</span> Welcome
          </h1>
        </div>
        <GroupChatMessages />
        <GroupSendMessage />
      </div>
    );
  }
}
export default GroupMainChat;