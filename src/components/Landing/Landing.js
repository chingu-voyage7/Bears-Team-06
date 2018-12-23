import React, { Component } from "react";
import LandingHero from "./LandingHero/LandingHero";
import LandingHeader from "../common/LandingHeader/LandingHeader";
import LandingWorkArea from "./LandingWorkArea/LandingWorkArea";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <LandingHeader />
        <LandingHero />
        <LandingWorkArea />
      </div>
    );
  }
}
export default Landing;
