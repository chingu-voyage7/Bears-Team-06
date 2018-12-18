import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
import groupchatReducer from "./groupchatReducer";
import profileReducer from "./profileReducer";
import groupReducer from "./groupReducer";
import peopleReducer from "./peopleReducer";

export default combineReducers({
  settings: settingsReducer,
  groupchat: groupchatReducer,
  group: groupReducer,
  profile: profileReducer,
  people: peopleReducer,
});
