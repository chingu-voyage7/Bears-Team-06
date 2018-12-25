import React from "react";
import SubscribeBox from "./SubscribeBox/SubscribeBox";
import SocialLinks from "./SocialLinks/SocialLinks";

const ContactUs = props => {
  return (
    <div className="ContactUs">
      <div className="container">
        <div className="ContactUs__wrapper">
          <div className="row">
            <div className="col-md-6 ContactUs__border-right">
              <div className="ContactUs__form-area">
                <h2 className="ContactUs__form-area__header">Contact Us</h2>
                <div className="ContactUs__form-group">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="ContactUs__form-group__input"
                  />
                </div>
                <div className="ContactUs__form-group">
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="ContactUs__form-group__input"
                  />
                </div>
                <div className="ContactUs__form-group">
                  <textarea
                    rows="3"
                    className="ContactUs__form-group__input"
                    placeholder="Your Message*"
                  />
                </div>
                <button className="ContactUs__form-group__submit-btn">
                  <i class="far fa-paper-plane" />
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ContactUs__address-wrapper">
                <div className="ContactUs__single-address">
                  <div className="ContactUs__single-address__icon">
                    <i class="fas fa-headphones" />
                  </div>
                  <p className="ContactUs__single-address__contact-info">
                    +0044 545 989 62698
                  </p>
                </div>
                <div className="ContactUs__single-address">
                  <div className="ContactUs__single-address__icon">
                    <i class="far fa-envelope" />
                  </div>
                  <p className="ContactUs__single-address__contact-info">
                    www.samratluintel.netlify.com
                  </p>
                </div>
                <div className="ContactUs__single-address">
                  <div className="ContactUs__single-address__icon">
                    <i class="fas fa-thumbtack" />
                  </div>
                  <p className="ContactUs__single-address__contact-info">
                    28 Green Tower, Street Name, New York City, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubscribeBox />
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactUs;
