import { UPDATE_DASHBOARD_TABLE, UPDATE_DASHBOARD_CHART } from "../types";
import moment from "moment";

//Chart sample data

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
