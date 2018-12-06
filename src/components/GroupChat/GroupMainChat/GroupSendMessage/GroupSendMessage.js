import React, { Component } from "react";

class GroupSendMessage extends Component {
  state = {
    message: "",
  };
  onTextChange = e => {
    this.setState({ message: e.target.value });
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
            value={this.state.message}
          />
          <button className="GroupSendMessage__send-btn">
            <i class="fas fa-paper-plane" />
          </button>
        </div>
      </div>
    );
  }
}

export default GroupSendMessage;
