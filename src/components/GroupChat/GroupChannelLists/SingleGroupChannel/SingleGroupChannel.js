import React, { Component } from "react";
import classnames from "classnames";
import { updateSelectedGroup } from "../../../../store/actions/group/group";
import { connect } from "react-redux";

class SingleGroupChannel extends Component {
  onGroupClick = () => {
    this.props.updateSelectedGroup(this.props.index);
  };

  render() {
    const { props } = this;
    const groupChannelClasses = classnames({
      SingleGroupChannel: true,
      "SingleGroupChannel--circle SingleGroupChannel--unselected": !props.selected,
      "SingleGroupChannel--box SingleGroupChannel--selected SingleGroupChannel__before-arrow":
        props.selected
    });
    return (
      <div className={groupChannelClasses} onClick={this.onGroupClick}>
        <div className="SingleGroupChannel__body">{props.name}</div>
      </div>
    );
  }
}
export default connect(
  null,
  { updateSelectedGroup }
)(SingleGroupChannel);
