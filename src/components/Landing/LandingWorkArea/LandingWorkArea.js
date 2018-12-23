import React from "react";
import SingleWork from "./SingleWork/SingleWork";
import workIcon1 from "../../../assets/images/icons/work-icons-1.png";
import workIcon2 from "../../../assets/images/icons/work-icons-2.png";
import workIcon3 from "../../../assets/images/icons/work-icons-3.png";
import LandingChooseArea from "./LandingChooseArea/LandingChooseArea";

const LandingWorkArea = props => {
  return (
    <div className="LandingWorkArea">
      <div className="container">
        <div className="LandingWorkArea__choose-pattern-bg">
          <div className="row">
            <div className="col-md-12">
              <div className="LandingWorkArea__section-wrapper">
                <h2 className="LandingWorkArea__section-wrapper__title">
                  How it Works
                </h2>
                <p className="LandingWorkArea__section-wrapper__subtitle">
                  We are proud to be a awesome team.They are really awesome
                  people with their good knowledge
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <SingleWork
                image={workIcon1}
                title="Create Account"
                subtitle="Register your StockMa Account"
              />
            </div>
            <div className="col-md-4">
              <SingleWork
                image={workIcon2}
                title="Follow Companies"
                subtitle="Follow your favourite companies"
              />
            </div>
            <div className="col-md-4">
              <SingleWork
                image={workIcon3}
                title="Get Updated"
                subtitle="Get Updated with ongoing changes"
              />
            </div>
          </div>
          <LandingChooseArea />
        </div>
      </div>
    </div>
  );
};

export default LandingWorkArea;
