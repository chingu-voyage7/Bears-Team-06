import React, { Component } from "react";
import { sendGroupMessage } from "../../../../store/actions/groupchat/groupchat";

import { connect } from "react-redux";
import { saveGroupChatMessage } from "../../../../store/actions/group/group";

class GroupSendMessage extends Component {
  state = {
    message: "",
  };

  onTextChange = e => {
    this.setState({ message: e.target.value });
  };

  onSendMessage = async () => {
    if (this.props.groups.length === 0) return;
    const groupname = this.props.groups[this.props.selectedIndex].name;
    //saves the group message in the database
    await this.props.saveGroupChatMessage(groupname, this.state.message);

    //send the group message to other online user
    this.props.sendGroupMessage(
      this.state.message,
      groupname,
      this.props.profile
    );
    this.setState({ message: "" });
  };

  _handleKeyPress = e => {
    console.log("key press is called");
    if (e.key === "Enter") {
      e.preventDefault();
      this.onSendMessage();
    }
  };
  render() {
    return (
      <div className="GroupSendMessage">
        <div className="GroupSendMessage__form">
          <textarea
            name="message"
            className="GroupSendMessage__message"
            placeholder="Type your message"
            rows="1"
            onChange={this.onTextChange}
            onKeyPress={this._handleKeyPress}
            value={this.state.message}
          />
          <button
            className="GroupSendMessage__send-btn"
            onClick={this.onSendMessage}
          >
            <i class="fas fa-paper-plane" />
          </button>
        </div>
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
  { sendGroupMessage, saveGroupChatMessage }
)(GroupSendMessage);
