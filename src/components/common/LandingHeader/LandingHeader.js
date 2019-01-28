import React, { Component } from "react";
import logo from "../../../assets/images/logo/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import classnames from "classnames";
import { withRouter } from "react-router-dom";

class LandingHeader extends Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  redirectToLogin = () => {
    this.props.history.push("/login");
  };

  redirectToSignUp = () => {
    this.props.history.push("/register");
  };
  render() {
    return (
      <div
        className={classnames({
          LandingHeader: true,
          "LandingHeader--scrolled": !this.state.isTop,
        })}
      >
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
                <Link
                  className="LandingHeader__nav__nav-item"
                  activeClass="LandingHeader__nav__nav-item--selected"
                  to="LandingHero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
                <Link
                  className="LandingHeader__nav__nav-item"
                  activeClass="LandingHeader__nav__nav-item--selected"
                  to="LandingWorkArea"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  How To
                </Link>
                <Link
                  className="LandingHeader__nav__nav-item"
                  activeClass="LandingHeader__nav__nav-item--selected"
                  to="PartnerArea"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Partners
                </Link>
                <Link
                  className="LandingHeader__nav__nav-item"
                  activeClass="LandingHeader__nav__nav-item--selected"
                  to="ContactUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact Us
                </Link>
                <li
                  className="LandingHeader__nav__join-btn"
                  onClick={this.redirectToLogin}
                >
                  JOIN NOW
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LandingHeader);
