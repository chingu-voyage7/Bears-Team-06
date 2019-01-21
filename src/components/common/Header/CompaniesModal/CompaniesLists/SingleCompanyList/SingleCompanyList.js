import React, { Component } from "react";

class SingleCompanyList extends Component {
  render() {
    let button = null;
    if (!this.props.isFollowed) {
      button = <div className="SingleCompanyList__action-btn">Follow</div>;
    }
    if (this.props.isFollowed) {
      button = (
        <div className="SingleCompanyList__action-btn SingleCompanyList__action-btn--dark">
          UnFollow
        </div>
      );
    }
    return (
      <div className="SingleCompanyList">
        <div className="SingleCompanyList__name">Nakharkoja</div>
        {button}
      </div>
    );
  }
}
export default SingleCompanyList;
