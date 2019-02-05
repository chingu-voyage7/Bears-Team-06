import React, { Fragment } from "react";

const SingleGroupMessage = props => {
  return (
    <Fragment>
      <div className="SingleGroupMessage">
        <div className="SingleGroupMessage__image-container">
          <img className="SingleGroupMessage__image" src={props.image} alt="" />
        </div>
        <div className="SingleGroupMessage__body">
          <h2 className="SingleGroupMessage__body__sender-name">
            {props.name}{" "}
            <span className="SingleGroupMessage__body__sent-date">
              Yesterday At 12:00pm
            </span>
          </h2>
          <p className="SingleGroupMessage__body__messages">{props.message}</p>
        </div>
      </div>
      <div className="Message__line-wrapper">
        <hr className="Message__line" />
      </div>
    </Fragment>
  );
};
export default SingleGroupMessage;
