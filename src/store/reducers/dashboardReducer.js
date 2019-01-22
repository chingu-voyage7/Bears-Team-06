import { UPDATE_DASHBOARD_TABLE, UPDATE_DASHBOARD_CHART } from "../types";
import moment from "moment";

//Chart sample data

// const data = [
//     ["x", "dogs", "cats", "parrots"],
//     ["Date(2015-9-2)", 0, 0, 0],
//     ["Date(2015-9-3)", 10, 5, 7],
//     ["Date(2015-9-4)", 23, 15, 19],
//     ["Date(2015-9-5)", 17, 9, 20],
//     ["Date(2015-9-6)", 18, 10, 25],
//   ];
const initialState = {
  fetched: false,
  table: [],
  chart: [["x"], ["Starting"], [moment().format("hh:mm:ss")]],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_DASHBOARD_TABLE:
      return {
        ...state,
        fetched: true,
        table: [...state.table, payload],
      };
    case UPDATE_DASHBOARD_CHART:
      const newChart = [...state.chart];
      newChart[0].push(payload.company);
      newChart[1].push(0);
      newChart[2].push(payload.price);
      return {
        ...state,
        chart: newChart,
      };
    default:
      return state;
  }
};
