import React, { Component } from "react";
import PrivateMainChat from "./PrivateMainChat/PrivateMainChat";
import { connect } from "react-redux";
import axios from "axios";
import {
  fetchPrivateMessages,
  joinPrivateChatRoom,
} from "../../store/actions/privatechat/privatechat";

function swap(input, value_1, value_2) {
  const temp = input[value_1];
  input[value_1] = input[value_2];
  input[value_2] = temp;
}

class PrivateChat extends Component {
  state = {
    exist: true,
    //both users in private chat are connected to two rooms

    //room1 is the room the next user is listening. ObjectId of another user
    room1: "",
    //room2 is the room we are listening.ObjectId of current user
    room2: "",
    receiverName: "",
  };

  componentDidMount = () => {
    //============================================
    // Link will be in the format /chat/ReceiverName.SenderName
    //============================================

    //paramOne will act as a room one for private chat
    const paramOne = this.props.match.params.name;

    const link = paramOne.split(".");
    const receiverName = link[0];
    this.setState({ receiverName });
    //mutates the position of data in link
    swap(link, 0, 1);

    //paramTwo will act as a room two for private chat
    const paramTwo = link[0] + "." + link[1];

    const params = {
      room1: paramOne,
      room2: paramTwo,
    };

    this.setState({
      room1: paramOne,
      room2: paramTwo,
    });

    //params.room1 refers to the receiver name
    this.props.fetchPrivateMessages(receiverName);
    this.props.joinPrivateChatRoom(params);
  };

  render() {
    return (
      <div className="PrivateChat">
        <PrivateMainChat
          room={this.state.room1}
          receiverName={this.state.receiverName}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { fetchPrivateMessages, joinPrivateChatRoom },
)(PrivateChat);
