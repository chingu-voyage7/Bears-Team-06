import React, { Component } from "react";

class GroupChannelInfo extends Component {
  render() {
    return (
      <div className="GroupChannelInfo">
        <div className="GroupChannelInfo__header">
          <h2 className="GroupChannelInfo__header__text">Group Name</h2>
          <div
            className="GroupChannelInfo__shrink-btn"
            onClick={() => this.props.setLeftNav(false)}
          >
            <i class="fas fa-chevron-left" />
          </div>
        </div>
        <div className="GroupChannelInfo__body">Additional Info Here</div>
      </div>
    );
  }
}
export default GroupChannelInfo;
