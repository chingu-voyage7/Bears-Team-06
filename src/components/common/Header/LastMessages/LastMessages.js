import React, { Component } from "react";
import { connect } from "react-redux";
import MessageRequest from "./MessageRequest/MessageRequest";

class LastMessages extends Component {
  renderMessages = () => {
    if (this.props.profile && this.props.profile.lastMessages.length === 0) {
      //returns all the last messages which are not read

      return (
        <p className="LastMessages__no-message">
          {" "}
          There are no messages to show{" "}
        </p>
      );
    }
    if (this.props.profile && this.props.profile.lastMessages) {
      //sender can be either  senderName or receiverName
      //Just data is aggregated that way from mongoDB
      return this.props.profile.lastMessages.map((message, i) => {
        let sender = message.body.senderName;
        let receiver = message.body.receiverName;
        return (
          <MessageRequest
            key={i}
            sender={sender}
            receiver={receiver}
            message={message.body.message}
            image={message.body.sender.userImage}
            id={message.body._id}
          />
        );
      });
    }
  };
  render() {
    return <div className="LastMessages">{this.renderMessages()}</div>;
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});
export default connect(mapStateToProps)(LastMessages);
