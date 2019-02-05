import { UPDATE_GROUP_LISTS, UPDATE_GROUP_SELECTED_INDEX } from "../types";

const initialState = {
  lists: [],
  //keeps the track on which group the user is currently in
  selectedIndex: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_GROUP_LISTS:
      return { ...state, lists: payload };
    case UPDATE_GROUP_SELECTED_INDEX:
      return { ...state, selectedIndex: payload };
    default:
      return state;
  }
};
