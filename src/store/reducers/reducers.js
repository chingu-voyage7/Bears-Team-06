import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
import chartReducer from "./chartReducer";
import groupchatReducer from "./groupchatReducer";
import profileReducer from "./profileReducer";
import groupReducer from "./groupReducer";

export default combineReducers({
  settings: settingsReducer,
  charts: chartReducer,
  groupchat: groupchatReducer,
  group: groupReducer,
  profile: profileReducer,
});
