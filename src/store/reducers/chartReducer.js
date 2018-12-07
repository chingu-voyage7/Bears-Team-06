import { SHOW_CHARTS } from "../types";

const initialState = {
  data: [
    {
      label: "Series 1",
      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    },
    {
      label: "Series 2",
      data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_CHARTS:
      return { ...state, lists: payload };
    default:
      return state;
  }
};
