import React, { Component } from "react";
import SingleGroupChannel from "./SingleGroupChannel/SingleGroupChannel";

class GroupChannelLists extends Component {
  render() {
    return (
      <div className="GroupChannelLists">
        <div className="GroupChannelLists__scrollwrap">
          <SingleGroupChannel selected name="JT" />
          <SingleGroupChannel selected={false} name="ST" />
        </div>
      </div>
    );
  }
}
export default GroupChannelLists;
