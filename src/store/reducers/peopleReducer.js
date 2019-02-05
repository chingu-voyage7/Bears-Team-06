import { ADD_PEOPLE_TO_LIST, SET_PEOPLE_SCROLLABLE_FALSE } from "../types";

const initialState = {
  fetched: false,
  scrollable: true,
  lists: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PEOPLE_TO_LIST:
      return { ...state, fetched: true, lists: [...state.lists, ...payload] };

    case SET_PEOPLE_SCROLLABLE_FALSE:
      return { ...state, scrollable: false };
    default:
      return state;
  }
};
