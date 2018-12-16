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
  fetchGroupChatMessage,
} from "../../store/actions/groupchat/groupchat";
import classnames from "classnames";

class GroupChat extends Component {
  state = {
    modalIsOpen: false,
    //whether to show left nav or not
    leftNav: true,
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
    if (window.innerWidth < 900) {
      this.setLeftNav(false);
    }
    await this.props.fetchGroups();
    if (this.props.groups.length === 0) return;
    this.updateGroupChat();
  };

  leaveGroup = () => {
    if (this.props.groups.length === 0 || !this.props.profile.fetched) return;

    const groupIndex = this.props.selectedIndex;
    const groupname = this.props.groups[groupIndex].name;
    const params = {
      room: groupname,
      name: this.props.profile.username,
    };
    this.props.leaveRoom(params);
  };

  updateGroupChat = () => {
    if (this.props.groups.length === 0 || !this.props.profile.fetched) return;

    const groupIndex = this.props.selectedIndex;
    const groupname = this.props.groups[groupIndex].name;

    console.log("Currently selected group name is", groupname);
    const params = {
      room: groupname,
      name: this.props.profile.username,
      userId: this.props.profile.id,
      image: this.props.profile.userImage,
    };
    // Joins the room and stores the user information in server
    // to keep track of online users in particular group
    this.props.joinRoom(params);

    this.props.fetchGroupChatMessage(groupname);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevProps.selectedIndex !== this.props.selectedIndex ||
      prevProps.groups.length !== this.props.groups.length ||
      prevProps.profile.fetched !== this.props.profile.fetched
    ) {
      this.leaveGroup();
      this.updateGroupChat();
    }
  };

  componentWillUnMount = () => {
    this.leaveGroup();
  };

  setLeftNav = value => {
    this.setState({ leftNav: value });
  };
  render() {
    const leftNavClasses = classnames({
      "GroupChat__left-nav-wrapper": true,
      "GroupChat__left-nav-wrapper--shrink": !this.state.leftNav,
    });
    const leftNavPlaceholderClasses = classnames({
      "GroupChat__left-nav-placeholder": true,
      "GroupChat__left-nav-placeholder--shrink": !this.state.leftNav,
    });

    return (
      <div className="GroupChat">
        <div className={leftNavClasses}>
          <GroupChannelLists openModal={this.openModal} />
          <GroupChannelInfo setLeftNav={this.setLeftNav} />
        </div>
        {/*Above element is position fixed. So to act in place of that element below empty placeholder div is used*/}
        <div className={leftNavPlaceholderClasses} />
        {!this.state.leftNav && (
          <div
            className="GroupChat__expand-left-nav-btn"
            onClick={() => this.setLeftNav(true)}
          >
            <i class="fas fa-chevron-right" />
          </div>
        )}

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
  selectedIndex: state.group.selectedIndex,
});

export default connect(
  mapStateToProps,
  { fetchGroups, joinRoom, leaveRoom, fetchGroupChatMessage },
)(GroupChat);
