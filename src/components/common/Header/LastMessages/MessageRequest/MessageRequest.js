import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MessageRequest extends Component {
  redirectToChatPage = () => {
    if (this.props.profile.username !== this.props.sender) {
      const chatlink = `/chat/${this.props.sender}.${this.props.receiver}`;
      this.props.history.push(chatlink);
    }
  };

  onClick = async () => {
    this.redirectToChatPage();
  };
  render() {
    const { props } = this;
    return (
      <li className="MessageRequest" onClick={this.onClick}>
        <div className="MessageRequest__author-thumb">
          <img
            className="MessageRequest__author-image"
            src={props.image}
            alt=""
          />
        </div>
        <div
          className="MessageRequest__notification-event"
          onClick={this.onClick}
        >
          <p className="MessageRequest__sender-name">{props.sender}</p>
          <p className="MessageRequest__message">{props.message}</p>
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});
export default withRouter(connect(mapStateToProps)(MessageRequest));
