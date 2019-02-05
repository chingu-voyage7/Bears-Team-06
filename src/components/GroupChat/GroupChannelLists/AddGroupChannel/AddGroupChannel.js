import React, { Component } from "react";

class AddGroupChannel extends Component {
  render() {
    return (
      <div className="AddGroupChannel" onClick={this.props.openModal}>
        <i class="fas fa-plus AddGroupChannel__body" />
      </div>
    );
  }
}
export default AddGroupChannel;
