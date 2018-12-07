import React, { Component } from "react";
import classnames from "classnames";

class SingleGroupChannel extends Component {
  render() {
    const { props } = this;
    const groupChannelClasses = classnames({
      SingleGroupChannel: true,
      "SingleGroupChannel--circle SingleGroupChannel--unselected": !props.selected,
      "SingleGroupChannel--box SingleGroupChannel--selected SingleGroupChannel__before-arrow":
        props.selected,
    });
    return (
      <div className={groupChannelClasses}>
        <div className="SingleGroupChannel__body">{props.name}</div>
      </div>
    );
  }
}
export default SingleGroupChannel;
