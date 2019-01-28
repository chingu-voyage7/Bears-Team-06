import axios from "axios";
import * as ACTIONS from "../../types";

export const get_news = () => async dispatch => {
  try {
    const news = await axios.get("/api/news");
    console.log("Here is news");
    console.log(news);
    dispatch({
      type: ACTIONS.GET_NEWS,
      payload: news.data.data.articles,
    });
  } catch (err) {
    console.log(err);
    //Server side validation of redux form
  }
};
