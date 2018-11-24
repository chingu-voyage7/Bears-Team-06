import React, { Component } from "react";
import GroupChannelLists from "./GroupChannelLists/GroupChannelLists";
import GroupChannelInfo from "./GroupChannelInfo/GroupChannelInfo";
import GroupMainChat from "./GroupMainChat/GroupMainChat";

class GroupChat extends Component {
  render() {
    return (
      <div className="GroupChat">
        <GroupChannelLists />
        <GroupChannelInfo />
        <GroupMainChat />
      </div>
    );
  }
}
export default GroupChat;
