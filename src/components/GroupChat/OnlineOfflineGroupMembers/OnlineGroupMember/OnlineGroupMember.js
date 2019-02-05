import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class OnlineGroupMember extends Component {
  //.ChatUser__author-thumb is defined on parent
  render() {
    const { props } = this;

    return (
      <div className="OnlineGroupMember">
        <div className="OnlineGroupMember__body">
          <div className="OnlineGroupMember__author-thumb-wrapper">
            <div className="OnlineGroupMember__author-thumb">
              <img
                className="OnlineGroupMember__author-image"
                src={props.image}
                alt=""
              />
              <div className="OnlineGroupMember__online-icon" />
            </div>
          </div>
          <div className="OnlineGroupMember__user-name">{props.name}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(OnlineGroupMember);
