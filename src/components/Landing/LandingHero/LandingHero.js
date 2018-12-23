import React, { Component } from "react";
import heroStockImg from "../../../assets/images/bg/hero-stock-bg.png";
import LandingParallaxSlider from "./LandingParallaxSlider/LandingParallaxSlider";

class LandingHero extends Component {
  render() {
    return (
      <div className="LandingHero">
        <LandingParallaxSlider />
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12">
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
                  <button className="LandingHero__control-area__button">
                    SIGN UP
                  </button>
                  <button className="LandingHero__control-area__button">
                    LOG IN
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
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

export default LandingHero;
