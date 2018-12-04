import React, { Component } from "react";
import GroupChannelLists from "./GroupChannelLists/GroupChannelLists";
import GroupChannelInfo from "./GroupChannelInfo/GroupChannelInfo";
import GroupMainChat from "./GroupMainChat/GroupMainChat";
import OnlineOfflineGroupMembers from "./OnlineOfflineGroupMembers/OnlineOfflineGroupMembers";
import CreateGroupChannel from "./CreateGroupChannel/CreateGroupChannel";
import { connect } from "react-redux";
import { fetchGroups } from "../../store/actions/group/group";
import {
  joinRoom,
  leaveRoom,
  fetchGroupChatMessage
} from "../../store/actions/groupchat/groupchat";

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

  componentDidMount = async () => {
    await this.props.fetchGroups();
    if (this.props.groups.length === 0) return;
    this.updateGroupChat();
  };

  leaveGroup = () => {
    const groupIndex = this.props.selectedIndex;
    const groupname = this.props.groups[groupIndex].name;
    const params = {
      room: groupname,
      name: this.props.profile.username
    };
    this.props.leaveRoom(params);
  };

  updateGroupChat = () => {
    const groupIndex = this.props.selectedIndex;
    const groupname = this.props.groups[groupIndex].name;

    console.log("Currently selected group name is", groupname);
    const params = {
      room: groupname,
      name: this.props.profile.username,
      userId: this.props.profile.id,
      image: this.props.profile.userImage
    };
    // Joins the room and stores the user information in server
    // to keep track of online users in particular group
    this.props.joinRoom(params);

    this.props.fetchGroupChatMessage(groupname);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevProps.selectedIndex !== this.props.selectedIndex ||
      prevProps.groups.length !== this.props.groups.length
    ) {
      this.leaveGroup();
      this.updateGroupChat();
    }
  };

  componentWillUnMount = () => {
    this.leaveGroup();
  };

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

const mapStateToProps = state => ({
  profile: state.profile,
  groups: state.group.lists,
  selectedIndex: state.group.selectedIndex
});

export default connect(
  mapStateToProps,
  { fetchGroups, joinRoom, leaveRoom, fetchGroupChatMessage }
)(GroupChat);
