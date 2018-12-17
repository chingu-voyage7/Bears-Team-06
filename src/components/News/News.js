import React, { Component } from "react";
import NewsSideNav from "./NewsSideNav/NewsSideNav";
import NewsContext from "./news-context";
import NewsPost from "./NewsPost/NewsPost";

class News extends Component {
  state = {
    selectedSideNavIndex: 0,
    sideNavOpen: true,
  };
  onSideNavChange = index => {
    this.setState({ selectedSideNavIndex: index });
  };

  setSideNavOpen = value => {
    this.setState({ sideNavOpen: value });
  };
  render() {
    const contextValue = {
      selectedSideNavIndex: this.state.selectedSideNavIndex,
      onSideNavChange: this.onSideNavChange,
      sideNavOpen: this.state.sideNavOpen,
      setSideNavOpen: this.setSideNavOpen,
    };
    return (
      <NewsContext.Provider value={contextValue}>
        <div className="News">
          {!this.state.sideNavOpen && (
            <div
              className="NewsPost__header"
              onClick={() => this.setSideNavOpen(true)}
            >
              <i class="fas fa-bars" />
            </div>
          )}

          <NewsSideNav />
          <NewsPost />
        </div>
      </NewsContext.Provider>
    );
  }
}
export default News;
