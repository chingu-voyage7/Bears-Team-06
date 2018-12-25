import React, { Component, Fragment } from "react";
import classnames from "classnames";

class LandingSideNav extends Component {
  state = {
    open: false,
  };

  onSideNavOpen = () => this.setState({ open: true });
  onSideNavClose = () => this.setState({ open: false });

  componentDidMount() {
    document.addEventListener("mousedown", this.onSideNavClose);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.onSideNavClose);
  }
  render() {
    return (
      <div className={"LandingSideNav"}>
        {this.state.open && (
          <div className="LandingSideNav__btn" onClick={this.onSideNavClose}>
            <i class="fas fa-times" />
          </div>
        )}
        {!this.state.open && (
          <div className="LandingSideNav__btn" onClick={this.onSideNavOpen}>
            <i class="fas fa-bars" />
          </div>
        )}
        <div
          className={classnames({
            "LandingSideNav__nav-lists": true,
            "LandingSideNav__nav-lists--close": !this.state.open,
          })}
        >
          <div className="LandingSideNav__single-nav">Home</div>
          <div className="LandingSideNav__single-nav">How To</div>
          <div className="LandingSideNav__single-nav">Partners</div>
          <div className="LandingSideNav__single-nav">Contact Us</div>
        </div>
      </div>
    );
  }
}
export default LandingSideNav;
