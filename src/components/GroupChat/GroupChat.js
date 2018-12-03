import React, { Component } from "react";
import GroupChannelLists from "./GroupChannelLists/GroupChannelLists";
import GroupChannelInfo from "./GroupChannelInfo/GroupChannelInfo";
import GroupMainChat from "./GroupMainChat/GroupMainChat";
import OnlineOfflineGroupMembers from "./OnlineOfflineGroupMembers/OnlineOfflineGroupMembers";
import CreateGroupChannel from "./CreateGroupChannel/CreateGroupChannel";

class GroupChat extends Component {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  render() {
    return (
      <div className="GroupChat">
        <GroupChannelLists openModal={this.openModal} />
        <GroupChannelInfo />
        <GroupMainChat />
        <OnlineOfflineGroupMembers />
        <CreateGroupChannel
          isOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          afterOpenModal={this.afterOpenModal}
        />
      </div>
    );
  }
}
export default GroupChat;
