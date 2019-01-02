import React, { Component } from "react";
import Parallax from "parallax-js";

class LandingParallaxSlider extends Component {
  componentDidMount = () => {
    this.parallax = new Parallax(this.scene, {
      selector: ".LandingParallaxSlider__bg",
    });
  };

  componentWillUnmount = () => {
    this.parallax.disable();
  };
  render() {
    return (
      <div
        data-selector=".LandingParallaxSlider__bg"
        className="LandingParallaxSlider"
        ref={el => (this.scene = el)}
      >
        <div className="LandingParallaxSlider__bg-wrapper">
          <div
            className="LandingParallaxSlider__bg LandingParallaxSlider__bg-1"
            data-depth="0.2"
          />
        </div>
        <div className="LandingParallaxSlider__bg-wrapper">
          <div
            className="LandingParallaxSlider__bg LandingParallaxSlider__bg-2"
            data-depth="0.3"
          />
        </div>
        <div className="LandingParallaxSlider__bg-wrapper">
          <div
            className="LandingParallaxSlider__bg LandingParallaxSlider__bg-3"
            data-depth="0.5"
          />
        </div>
        <div className="LandingParallaxSlider__bg-wrapper">
          <div
            className="LandingParallaxSlider__bg LandingParallaxSlider__bg-4"
            data-depth="0.4"
          />
        </div>
        <div className="LandingParallaxSlider__bg-wrapper">
          <div
            className="LandingParallaxSlider__bg LandingParallaxSlider__bg-5"
            data-depth="0.1"
          />
        </div>
        <div className="LandingParallaxSlider__bg-wrapper">
          <div
            className="LandingParallaxSlider__bg LandingParallaxSlider__bg-6"
            data-depth="0.2"
          />
        </div>
        <div className="LandingParallaxSlider__bg-wrapper">
          <div
            className="LandingParallaxSlider__bg LandingParallaxSlider__bg-7"
            data-depth="0.2"
          />
        </div>
        <div className="LandingParallaxSlider__bg-wrapper">
          <div
            className="LandingParallaxSlider__bg LandingParallaxSlider__bg-8"
            data-depth="0.1"
          />
        </div>
      </div>
    );
  }
}

export default LandingParallaxSlider;
