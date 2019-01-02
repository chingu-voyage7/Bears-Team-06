import React from "react";

const SubscribeBox = props => {
  return (
    <div className="SubscribeBox">
      <h2 className="SubscribeBox__title">
        Don't miss anything. Stay connected
      </h2>
      <div className="SubscribeBox__input-area">
        <input
          type="text"
          placeholder="Enter your email address"
          className="SubscribeBox__input"
        />
        <button className="SubscribeBox__submit-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default SubscribeBox;
