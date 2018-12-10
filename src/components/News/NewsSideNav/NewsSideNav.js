import React, { Component } from "react";
import SideNavItem from "./SideNavItem/SideNavItem";
import NewsContext from "../news-context";

class NewsSideNav extends Component {
  state = {
    sideNav: ["Top Stories", "Mutual Fund", "Cryptocurrencies"],
  };

  static contextType = NewsContext;
  renderSideNav = () => {
    return this.state.sideNav.map((item, index) => (
      <SideNavItem
        selected={this.context.selectedSideNavIndex === index}
        sideNavChange={() => this.context.onSideNavChange(index)}
        name={item}
      />
    ));
  };
  render() {
    return (
      <div className="NewsSideNav">
        <div className="NewsSideNav__title">SECTIONS</div>
        <div className="NewsSideNav__item-lists">{this.renderSideNav()}</div>
      </div>
    );
  }
}
export default NewsSideNav;
