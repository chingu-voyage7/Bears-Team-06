import React, { Component } from "react";
import logo from "../../../assets/images/logo/logo.png";

class LandingHeader extends Component {
  render() {
    return (
      <div className="LandingHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3">
              <div className="LandingHeader__brand">
                <img src={logo} className="LandingHeader__logo" alt="" />{" "}
                <span className="LandingHeader__brand__name">Stock</span>Ma
              </div>
            </div>
            <div className="col-md-10 col-sm-9">
              <ul className="LandingHeader__nav">
                <li className="LandingHeader__nav__nav-item LandingHeader__nav__nav-item--selected">
                  Home
                </li>
                <li className="LandingHeader__nav__nav-item">How To</li>
                <li className="LandingHeader__nav__nav-item">About</li>
                <li className="LandingHeader__nav__nav-item">Token</li>
                <li className="LandingHeader__nav__nav-item">Road Map</li>
                <li className="LandingHeader__nav__nav-item">faq</li>
                <li className="LandingHeader__nav__join-btn">JOIN NOW</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingHeader;
