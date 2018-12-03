import React, { Component } from "react";
import SingleGroupChannel from "./SingleGroupChannel/SingleGroupChannel";
import AddGroupChannel from "./AddGroupChannel/AddGroupChannel";

class GroupChannelLists extends Component {
  render() {
    return (
      <div className="GroupChannelLists">
        <div className="GroupChannelLists__scrollwrap">
          <SingleGroupChannel selected name="JT" />
          <SingleGroupChannel selected={false} name="ST" />
          <AddGroupChannel openModal={this.props.openModal} />
        </div>
      </div>
    );
  }
}
export default GroupChannelLists;
