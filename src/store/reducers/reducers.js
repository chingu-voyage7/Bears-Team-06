import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
import groupchatReducer from "./groupchatReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  settings: settingsReducer,
  groupchat: groupchatReducer,
  profile: profileReducer
});
