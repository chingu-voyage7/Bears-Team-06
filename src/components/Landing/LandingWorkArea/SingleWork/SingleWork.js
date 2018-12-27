import React from "react";

const SingleWork = props => {
  return (
    <div className="SingleWork">
      <div className="SingleWork__image-wrapper">
        <img
          className="SingleWork__image-wrapper__image"
          src={props.image}
          alt=""
        />
      </div>
      <h4 className="SingleWork__title">{props.title}</h4>
      <p className="SingleWork__sub-title">{props.subtitle}</p>
    </div>
  );
};
export default SingleWork;
