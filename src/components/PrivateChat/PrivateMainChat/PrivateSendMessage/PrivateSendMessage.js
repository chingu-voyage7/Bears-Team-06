import React, { Component } from "react";

import { connect } from "react-redux";
import { sendPrivateMessage } from "../../../../store/actions/privatechat/privatechat";

class PrivateSendMessage extends Component {
  state = {
    message: "",
  };
  onSendMessage = () => {
    if (this.state.message.trim().length > 0) {
      this.props.sendPrivateMessage(
        this.state.message,
        this.props.profile,
        this.props.room,
      );
      this.setState({ message: "" });
    }
  };

  _handleKeyPress = e => {
    console.log("key press os called");
    if (e.key === "Enter") {
      this.onSendMessage();
    }
  };
  onTextChange = e => {
    console.log("From send message", e.target.value);
    this.setState({ message: e.target.value });
  };
  render() {
    return (
      <div className="PrivateSendMessage">
        <div className="PrivateSendMessage__form">
          <textarea
            name="message"
            className="PrivateSendMessage__message"
            placeholder="Type your message"
            rows="1"
            onChange={this.onTextChange}
            onKeyPress={this._handleKeyPress}
            value={this.state.message}
          />
          <button
            className="PrivateSendMessage__send-btn"
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
});

export default connect(
  mapStateToProps,
  { sendPrivateMessage },
)(PrivateSendMessage);
