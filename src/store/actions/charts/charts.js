import { SHOW_CHARTS } from "../../types";
import axios from "axios";

export const getCharts = () => dispatch => {
  //sample data for now
  const data = [
    ["x", "dogs", "cats", "parrots"],
    ["Date(2015-9-2)", 0, 0, 0],
    ["Date(2015-9-3)", 10, 5, 7],
    ["Date(2015-9-4)", 23, 15, 19],
    ["Date(2015-9-5)", 17, 9, 20],
    ["Date(2015-9-6)", 18, 10, 25],
  ];

  //dispatches the action to reducer
  dispatch({
    type: SHOW_CHARTS,
    payload: data,
  });
};
