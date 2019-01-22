import React, { Component } from "react";
import SingleCompanyList from "./SingleCompanyList/SingleCompanyList";
import HeaderContext from "../../_headerContext";
import { Scrollbars } from "react-custom-scrollbars";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import _ from "lodash";
import { connect } from "react-redux";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class CompaniesLists extends Component {
  static contextType = HeaderContext;
  render() {
    if (
      this.context.companySearchFetched &&
      this.context.companies.length === 0
    ) {
      return <p>Your search didnot match any result</p>;
    }
    return (
      <div className="CompaniesLists">
        <div className="CompaniesLists__loading">
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={25}
            color={"#fff"}
            loading={this.context.companySearching}
          />
        </div>
        <Scrollbars style={{ height: "100%" }}>
          {this.context.companies.map(company => {
            const companies = this.props.profile.companies;
            let isFollowed = false;
            //If the company exist in user companies array
            //the user is followed that company
            if (
              _.findIndex(companies, o => {
                return _.isMatch(o, company);
              }) > -1
            )
              isFollowed = true;
            return (
              <SingleCompanyList isFollowed={isFollowed} company={company} />
            );
          })}
        </Scrollbars>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(CompaniesLists);
