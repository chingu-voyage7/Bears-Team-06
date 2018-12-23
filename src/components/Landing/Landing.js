import React, { Component } from "react";
import LandingHero from "./LandingHero/LandingHero";
import LandingHeader from "../common/LandingHeader/LandingHeader";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <LandingHeader />
        <LandingHero />
      </div>
    );
  }
}
export default Landing;
