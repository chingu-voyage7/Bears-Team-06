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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  onlineMembers: state.groupchat.onlineMembers,
});

export default connect(mapStateToProps)(OnlineOfflineGroupMembers);
