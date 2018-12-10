import React, { Component } from "react";
import NewsSideNav from "./NewsSideNav/NewsSideNav";
import NewsContext from "./news-context";
import NewsPost from "./NewsPost/NewsPost";

class News extends Component {
  state = {
    selectedSideNavIndex: 0,
  };
  onSideNavChange = index => {
    this.setState({ selectedSideNavIndex: index });
  };
  render() {
    const contextValue = {
      selectedSideNavIndex: this.state.selectedSideNavIndex,
      onSideNavChange: this.onSideNavChange,
    };
    return (
      <NewsContext.Provider value={contextValue}>
        <div className="News">
          <NewsSideNav />
          <NewsPost />
        </div>
      </NewsContext.Provider>
    );
  }
}
export default News;
