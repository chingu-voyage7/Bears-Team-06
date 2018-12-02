import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
import groupchatReducer from "./groupchatReducer";

export default combineReducers({
  settings: settingsReducer,
  groupchat: groupchatReducer
});
