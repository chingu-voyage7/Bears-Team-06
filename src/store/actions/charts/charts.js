import { SHOW_CHARTS } from "../../types";
import axios from "axios";

export const getCharts = () => dispatch => {
  //sample data for now
  const data = [
    ["x", "dogs", "cats", "parrots"],
    [0, 0, 0, 0],
    [1, 10, 5, 7],
    [2, 23, 15, 19],
    [3, 17, 9, 20],
    [4, 18, 10, 25],
    [5, 9, 5, 6],
    [6, 11, 3, 18],
    [7, 27, 19, 22],
  ];

  //dispatches the action to reducer
  dispatch({
    type: SHOW_CHARTS,
    payload: data,
  });
};
