import React, { Component } from "react";
import NewsContext from "./news-context";
import NewsPost from "./NewsPost/NewsPost";
import Header from "../common/Header/Header";

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
          <Header />
          <NewsPost />
        </div>
      </NewsContext.Provider>
    );
  }
}
export default News;
