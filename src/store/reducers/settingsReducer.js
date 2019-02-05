import { UPDATE_SETTINGS_THEME } from "../types";

const initialState = {
  theme: "dark",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_SETTINGS_THEME:
      return { ...state, theme: payload };

    default:
      return state;
  }
};
