import React, { Component } from "react";
import LandingHero from "./LandingHero/LandingHero";
import LandingHeader from "../common/LandingHeader/LandingHeader";
import LandingWorkArea from "./LandingWorkArea/LandingWorkArea";
import PartnerArea from "./PartnerArea/PartnerArea";
import ContactUs from "./ContactUs/ContactUs";
import LandingFooter from "../common/LandingFooter/LandingFooter";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <LandingHeader />
        <LandingHero />
        <LandingWorkArea />
        <PartnerArea />
        <ContactUs />
        <LandingFooter />
      </div>
    );
  }
}
export default Landing;
