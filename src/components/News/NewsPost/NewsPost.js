import React, { Component } from "react";
import NewsCard from "./NewsCard/NewsCard";
import NewsContext from "../news-context";
import { bindActionCreators } from "redux";
import * as newsActions from "../../../store/actions/news/newsActions";
import { connect } from "react-redux";

class NewsPost extends Component {
  static contextType = NewsContext;
  componentDidMount() {
    this.props.newsActions.get_news();
  }
  render() {
    let newsArticles = this.props.news || [];
    const newsComponent = newsArticles.map(article => (
      <div className="col-md-4 col-sm-6">
        <NewsCard
          title={article.title}
          date={article.date}
          data={article.data}
          url={article.url}
          publishedAt={article.publishedAt}
          urlImage={article.urlToImage}
        />
      </div>
    ));
    return (
      <div className="NewsPost">
        <div className="container">
          <div className="row">{newsComponent}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.news,
  };
};

const mapActionsToProps = dispatch => {
  return {
    newsActions: bindActionCreators(newsActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(NewsPost);
