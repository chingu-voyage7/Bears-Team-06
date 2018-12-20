import React, { Component } from "react";
import classnames from "classnames";

class SideNavItem extends Component {
  render() {
    const navClasses = classnames({
      SideNavItem: true,
      "SideNavItem--selected": this.props.selected,
    });
    return (
      <div onClick={this.props.sideNavChange} className={navClasses}>
        {this.props.name}
      </div>
    );
  }
}
export default SideNavItem;
