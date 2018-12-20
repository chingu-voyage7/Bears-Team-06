import React, { Component } from "react";
import OnlineGroupMember from "./OnlineGroupMember/OnlineGroupMember";
import OfflineGroupMember from "./OfflineGroupMember/OfflineGroupMember";
import { connect } from "react-redux";

class OnlineOfflineGroupMembers extends Component {
  renderOnlineMembers = () => {
    return this.props.onlineMembers.map(onlineMember => (
      <OnlineGroupMember
        name={onlineMember.name}
        image={onlineMember.image}
        id={onlineMember.id}
      />
    ));
  };

  render() {
    return (
      <div className="OnlineOfflineGroupMembers">
        {/*Just adds a bottom border */}
        <div
          className="OnlineOfflineGroupMembers__header"
          onClick={() => this.props.setRightNav(false)}
        >
          <i class="fas fa-times" />
        </div>
        <div className="OnlineOfflineGroupMembers__scroll-wrapper">
          <div className="OnlineOfflineGroupMembers__sub-header">
            Online Members
          </div>
          <div className="OnlineOfflineGroupMembers__online-members">
            {this.renderOnlineMembers()}
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

const mapStateToProps = state => ({
  onlineMembers: state.groupchat.onlineMembers,
});

export default connect(mapStateToProps)(OnlineOfflineGroupMembers);
