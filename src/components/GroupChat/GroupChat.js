import React, { Component } from "react";
import GroupChannelLists from "./GroupChannelLists/GroupChannelLists";

class GroupChat extends Component {
  render() {
    return (
      <div className="GroupChat">
        <GroupChannelLists />
      </div>
    );
  }
}
export default GroupChat;
