import React, { Component } from "react";
import heroStockImg from "../../../assets/images/bg/hero-stock-bg.png";
import LandingParallaxSlider from "./LandingParallaxSlider/LandingParallaxSlider";
import { withRouter } from "react-router-dom";

class LandingHero extends Component {
  redirectToLogin = () => {
    this.props.history.push("/login");
  };

  redirectToRegister = () => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <div className="LandingHero">
        <LandingParallaxSlider />
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="LandingHero__main-content">
                <h2 className="LandingHero__main-content__header">
                  <span>StockMa</span> The Global Network to Get Info About
                  Stocks
                </h2>
                <p className="LandingHero__main-content__sub-header">
                  The future of stock is here.A platform for managing your{" "}
                  <span>favourite companies</span> stocks
                </p>

                <div className="LandingHero__control-area">
                  <button
                    onClick={this.redirectToRegister}
                    className="LandingHero__control-area__button"
                  >
                    SIGN UP
                  </button>
                  <button
                    onClick={this.redirectToLogin}
                    className="LandingHero__control-area__button"
                  >
                    LOG IN
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5 LandingHero__change-order-below-1000 ">
              <div className="LandingHero__img-wrapper">
                <img
                  src={heroStockImg}
                  alt=""
                  className="LandingHero__img-wrapper__img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LandingHero);
