import React, { Component } from "react";

class NewsCard extends Component {
  render() {
    return (
      <div className="NewsCard">
        <div className="NewsCard__image-wrapper">
          <img
            className="NewsCard__image"
            src="https://xstore-5-qieiudwfys4jovetzvnw.stackpathdns.com/demos/dark/wp-content/uploads/sites/5/2016/02/3-2-1024x666.jpg"
            alt=""
          />
        </div>

        <div className="NewsCard__heading-wrapper">
          <h2 className="NewsCard__header">
            Samrat Pencil stock rise by 12.5%
          </h2>
          <h3 className="NewsCard__sub-header">Febraury 17, 2016</h3>
        </div>

        <p className="NewsCard__content-article">
          Gravida feugiat nascetur adipiscing metus dolor a cum class curae cum
          consectetur vel in ut phasellus commodo vestibulum adipiscing nam
          fringilla scelerisque. Adipiscing odio ullamcorper.
        </p>

        <p className="NewsCard__continue-button">
          Continue Reading <i class="fas fa-chevron-right" />
        </p>
      </div>
    );
  }
}
export default NewsCard;
