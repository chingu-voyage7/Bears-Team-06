import * as ACTIONS from "../types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case ACTIONS.GET_NEWS:
      return { ...state, news: payload };
    default:
      return state;
  }
};
