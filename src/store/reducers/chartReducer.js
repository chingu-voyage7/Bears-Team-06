import { SHOW_CHARTS } from "../types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SHOW_CHARTS:
      return { ...state, data: payload };
    default:
      return state;
  }
};
