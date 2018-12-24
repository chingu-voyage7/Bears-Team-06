import React, { Component } from "react";
import LandingHero from "./LandingHero/LandingHero";
import LandingHeader from "../common/LandingHeader/LandingHeader";
import LandingWorkArea from "./LandingWorkArea/LandingWorkArea";
import PartnerArea from "./PartnerArea/PartnerArea";
import ContactUs from "./ContactUs/ContactUs";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <LandingHeader />
        <LandingHero />
        <LandingWorkArea />
        <PartnerArea />
        <ContactUs />
      </div>
    );
  }
}
export default Landing;
