import { SHOW_CHARTS } from "../../types";
import axios from "axios";

export const getCharts = () => dispatch => {
  //calls the function in socket middleware
  const data = [
    ["x", "dogs", "cats"],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 19],
  ];

  dispatch({
    type: SHOW_CHARTS,
    payload: data,
  });
};
