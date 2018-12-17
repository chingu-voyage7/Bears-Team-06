import React, { Component } from "react";
import SideNavItem from "./SideNavItem/SideNavItem";
import NewsContext from "../news-context";
import classnames from "classnames";

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
    const newsSideNavClasses = classnames({
      NewsSideNav: true,
      "NewsSideNav--shrink": !this.context.sideNavOpen,
    });
    return (
      <div className={newsSideNavClasses}>
        <div className="NewsSideNav__header">
          <div className="NewsSideNav__title">SECTIONS</div>
          <div
            className="NewsSideNav__shrink-btn"
            onClick={() => this.context.setSideNavOpen(false)}
          >
            <i class="fas fa-chevron-left" />
          </div>
        </div>

        <div className="NewsSideNav__item-lists">{this.renderSideNav()}</div>
      </div>
    );
  }
}
export default NewsSideNav;
