import React, { Component } from "react";
import GroupChannelLists from "./GroupChannelLists/GroupChannelLists";
import GroupChannelInfo from "./GroupChannelInfo/GroupChannelInfo";
import GroupMainChat from "./GroupMainChat/GroupMainChat";
import OnlineOfflineGroupMembers from "./OnlineOfflineGroupMembers/OnlineOfflineGroupMembers";

class GroupChat extends Component {
  render() {
    return (
      <div className="GroupChat">
        <GroupChannelLists />
        <GroupChannelInfo />
        <GroupMainChat />
        <OnlineOfflineGroupMembers />
      </div>
    );
  }
}
export default GroupChat;
