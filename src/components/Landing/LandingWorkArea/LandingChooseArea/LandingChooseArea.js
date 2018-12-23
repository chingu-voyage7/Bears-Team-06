import React from "react";
import logo from "../../../../assets/images/logo/logo.png";
import chooseRight from "../../../../assets/images/bg-shape/choose-right.png";

const LandingChooseArea = props => {
  return (
    <div className="LandingChooseArea">
      <div className="row">
        <div className="col-md-6">
          <div className="LandingChooseArea__image-wrapper">
            <img
              src={logo}
              alt=""
              className="LandingChooseArea__image-wrapper__logo"
            />
            <img
              src={chooseRight}
              alt=""
              className="LandingChooseArea__image-wrapper__image"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="LandingChooseArea__main-content">
            <h2 className="LandingChooseArea__main-content__header">
              We Provide Private Chat <br /> and <span>Group Chat</span> Feature
            </h2>
            <div className="LandingChooseArea__main-content__description">
              There are many channels you can join and get updated with on going
              trends on <span>stock market</span>. All messages are end to end
              encrypted.
            </div>
            <div className="LandingChooseArea__main-content__description">
              We also provide a private chat feature. Talk directly with the
              <span>company professional</span> and get to know how his/her
              company is doing. We guarantee absolute privacy on all of your
              messages
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingChooseArea;
