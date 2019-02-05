import React, { Component } from "react";
import SingleGroupMessage from "./SingleGroupMessage/SingleGroupMessage";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";

class GroupChatMessages extends Component {
  renderGroupMessages = () => {
    return this.props.groupMessages.map(groupMessage => (
      <SingleGroupMessage
        name={groupMessage.from}
        message={groupMessage.text}
        image={groupMessage.image}
      />
    ));
  };
  render() {
    return (
      <div className="GroupChatMessages">
        <Scrollbars style={{ height: "100%" }}>
          {this.renderGroupMessages()}
        </Scrollbars>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  groupMessages: state.groupchat.messages,
});
export default connect(mapStateToProps)(GroupChatMessages);
