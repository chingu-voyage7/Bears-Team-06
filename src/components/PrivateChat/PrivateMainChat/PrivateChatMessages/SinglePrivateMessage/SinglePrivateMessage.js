import React, { Fragment } from "react";

const SinglePrivateMessage = props => {
  return (
    <Fragment>
      <div className="SinglePrivateMessage">
        <div className="SinglePrivateMessage__image-container">
          <img
            className="SinglePrivateMessage__image"
            src={props.image}
            alt=""
          />
        </div>
        <div className="SinglePrivateMessage__body">
          <h2 className="SinglePrivateMessage__body__sender-name">
            {props.name}{" "}
            <span className="SinglePrivateMessage__body__sent-date">
              Yesterday At 12:00pm
            </span>
          </h2>
          <p className="SinglePrivateMessage__body__messages">
            {props.message}
          </p>
        </div>
      </div>
      <div className="Message__line-wrapper">
        <hr className="Message__line" />
      </div>
    </Fragment>
  );
};
export default SinglePrivateMessage;
