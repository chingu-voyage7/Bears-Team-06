import React, { Component } from "react";

class NewsCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="NewsCard">
        <div className="NewsCard__image-wrapper">
          <img className="NewsCard__image" src={this.props.urlImage} alt="" />
        </div>

        <div className="NewsCard__heading-wrapper">
          <h2
            onClick={() => window.open(this.props.url, "_blank")}
            className="NewsCard__header"
          >
            {this.props.title}
          </h2>
          <h3 className="NewsCard__sub-header">{this.props.publishedAt}</h3>
        </div>

        <p className="NewsCard__content-article">{this.props.description}</p>
      </div>
    );
  }
}
export default NewsCard;
