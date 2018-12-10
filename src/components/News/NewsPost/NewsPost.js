import React, { Component } from "react";
import NewsCard from "./NewsCard/NewsCard";

class NewsPost extends Component {
  render() {
    return (
      <div className="NewsPost">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <NewsCard />
            </div>
            <div className="col-md-4">
              <NewsCard />
            </div>
            <div className="col-md-4">
              <NewsCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsPost;
