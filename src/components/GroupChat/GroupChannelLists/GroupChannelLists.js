import React, { Component } from "react";
import SingleGroupChannel from "./SingleGroupChannel/SingleGroupChannel";
import AddGroupChannel from "./AddGroupChannel/AddGroupChannel";
import { connect } from "react-redux";

class GroupChannelLists extends Component {
  renderGroups = () => {
    return this.props.groups.map((group, index) => {
      const groupName = group.name.substring(0, 2).toUpperCase();
      return (
        <SingleGroupChannel
          selected={this.props.selectedIndex === index}
          index={index}
          name={groupName}
        />
      );
    });
  };

  render() {
    return (
      <div className="GroupChannelLists">
        <div className="GroupChannelLists__scrollwrap">
          {this.renderGroups()}
          <AddGroupChannel openModal={this.props.openModal} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.group.lists,
  selectedIndex: state.group.selectedIndex
});

export default connect(mapStateToProps)(GroupChannelLists);
