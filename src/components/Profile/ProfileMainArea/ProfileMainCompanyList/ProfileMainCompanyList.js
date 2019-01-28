import React, { Component } from "react";

class ProfileMainCompanyList extends Component {
  render() {
    return (
      <div className="ProfileMainCompanyList">
        <div className="ProfileMainCompanyList__header">
          Companies followed by user
        </div>
        <div className="ProfileMainCompanyList__wrapper">
          <div className="ProfileMainCompanyList__single-item">
            <div className="ProfileMainCompanyList__single-item__company-name">
              1. TATA EXPRESS ALIBABA COORPORATION
            </div>
            <div className="ProfileMainCompanyList__single-item__action-btn">
              Follow
            </div>
          </div>
          <div className="ProfileMainCompanyList__single-item">
            <div className="ProfileMainCompanyList__single-item__company-name">
              1. TATA EXPRESS ALIBABA COORPORATION
            </div>
            <div className="ProfileMainCompanyList__single-item__action-btn">
              Follow
            </div>
          </div>
          <div className="ProfileMainCompanyList__single-item">
            <div className="ProfileMainCompanyList__single-item__company-name">
              1. TATA EXPRESS ALIBABA COORPORATION
            </div>
            <div className="ProfileMainCompanyList__single-item__action-btn">
              Follow
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileMainCompanyList;
