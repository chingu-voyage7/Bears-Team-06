import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
import chartReducer from "./chartReducer";

export default combineReducers({
  settings: settingsReducer,
  charts: chartReducer,
});
