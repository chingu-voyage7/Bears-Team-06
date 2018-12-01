import React, { Component } from "react";
import OnlineGroupMember from "./OnlineGroupMember/OnlineGroupMember";
import OfflineGroupMember from "./OfflineGroupMember/OfflineGroupMember";

class OnlineOfflineGroupMembers extends Component {
  render() {
    return (
      <div className="OnlineOfflineGroupMembers">
        {/*Just adds a bottom border */}
        <div className="OnlineOfflineGroupMembers__header" />
        <div className="OnlineOfflineGroupMembers__scroll-wrapper">
          <div className="OnlineOfflineGroupMembers__sub-header">
            Online Members
          </div>
          <div className="OnlineOfflineGroupMembers__online-members">
            <OnlineGroupMember image="https://res.cloudinary.com/samrat/image/upload/c_fill,g_face,h_100,w_106/v1540572400/chat-app/jxsqyiy4ihg1ibox6g7f" />
          </div>
          <div className="OnlineOfflineGroupMembers__sub-header">
            Offline Members
          </div>
          <div className="OnlineOfflineGroupMembers__offline-members">
            <OfflineGroupMember image="https://res.cloudinary.com/samrat/image/upload/c_fill,g_face,h_100,w_106/v1540572400/chat-app/jxsqyiy4ihg1ibox6g7f" />
          </div>
        </div>
      </div>
    );
  }
}

export default OnlineOfflineGroupMembers;
