import React, { Component } from "react";
import NewsCard from "./NewsCard/NewsCard";
import NewsContext from "../news-context";

class NewsPost extends Component {
  static contextType = NewsContext;
  render() {
    return (
      <div className="NewsPost">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <NewsCard />
            </div>
            <div className="col-md-4 col-sm-6">
              <NewsCard />
            </div>
            <div className="col-md-4 col-sm-6">
              <NewsCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsPost;
