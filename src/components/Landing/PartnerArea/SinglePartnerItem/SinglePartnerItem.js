import React from "react";

const SinglePartnerItem = props => {
  return (
    <div className="SinglePartnerItem">
      <img src={props.image} alt="" className="SinglePartnerItem__image" />
    </div>
  );
};

export default SinglePartnerItem;
