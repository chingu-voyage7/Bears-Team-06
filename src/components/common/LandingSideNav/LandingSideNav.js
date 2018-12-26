import React, { Component, Fragment } from "react";
import classnames from "classnames";
import logo from "../../../assets/images/logo/logo.png";
import { Link } from "react-scroll";
class LandingSideNav extends Component {
  state = {
    open: false,
    isTop: true,
  };

  onSideNavOpen = () => this.setState({ open: true });
  onSideNavClose = () => this.setState({ open: false });

  componentDidMount() {
    document.addEventListener("mousedown", this.onSideNavClose);
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.onSideNavClose);
  }
  render() {
    return (
      <div
        className={classnames({
          LandingSideNav: true,
          "LandingSideNav--scrolled": !this.state.isTop,
        })}
      >
        <div className="LandingSideNav__brand">
          <img src={logo} className="LandingSideNav__logo" alt="" />{" "}
          <span className="LandingSideNav__brand__name">Stock</span>Ma
        </div>
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
          <Link
            className="LandingSideNav__single-nav"
            activeClass="LandingSideNav__single__nav--selected"
            to="LandingHero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="LandingSideNav__single-nav"
            activeClass="LandingSideNav__single__nav--selected"
            to="LandingWorkArea"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            How To
          </Link>
          <Link
            className="LandingSideNav__single-nav"
            activeClass="LandingSideNav__single__nav--selected"
            to="PartnerArea"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Partners
          </Link>
          <Link
            className="LandingSideNav__single-nav"
            activeClass="LandingSideNav__single__nav--selected"
            to="ContactUs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Us
          </Link>
        </div>
      </div>
    );
  }
}
export default LandingSideNav;
