import React from "react";
import Partner1 from "../../../assets/images/partners/partner-img-1.png";
import Partner2 from "../../../assets/images/partners/partner-img-2.png";
import Partner3 from "../../../assets/images/partners/partner-img-3.png";
import Partner4 from "../../../assets/images/partners/partner-img-4.png";
import Partner5 from "../../../assets/images/partners/partner-img-5.png";
import Partner6 from "../../../assets/images/partners/partner-img-6.png";
import Partner7 from "../../../assets/images/partners/partner-img-7.png";
import SinglePartnerItem from "./SinglePartnerItem/SinglePartnerItem";

const PartnerArea = props => {
  return (
    <div className="PartnerArea">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="PartnerArea__main-content">
              <h2 className="PartnerArea__main-content__title">
                <span>StockMa</span> Partners
              </h2>
              <p className="PartnerArea__main-content__subtitle">
                Our company products have been adopted by millions of company
                worldwide. Next turn is yours.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 col-3">
            <SinglePartnerItem image={Partner1} />
          </div>
          <div className="col-sm-3 col-3">
            <SinglePartnerItem image={Partner2} />
          </div>
          <div className="col-sm-3 col-3">
            <SinglePartnerItem image={Partner3} />
          </div>
          <div className="col-sm-3 col-3">
            <SinglePartnerItem image={Partner4} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2">
            <div className="row">
              <div className="col-md-4 col-4">
                <SinglePartnerItem image={Partner5} />
              </div>
              <div className="col-md-4 col-4">
                <SinglePartnerItem image={Partner6} />
              </div>
              <div className="col-md-4 col-4">
                <SinglePartnerItem image={Partner7} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerArea;
