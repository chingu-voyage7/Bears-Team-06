import {
    SHOW_CHARTS
  } from "../../types";
  import axios from "axios";
  
  export const getCharts = () => dispatch => {
    //calls the function in socket middleware
    const data=[
        {
          label: "Series 1",
          data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
          label: "Series 2",
          data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
      ];
    dispatch({
      type: SHOW_CHARTS,
      payload: data
    });
  };