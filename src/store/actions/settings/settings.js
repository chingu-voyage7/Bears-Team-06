import { UPDATE_SETTINGS_THEME } from "../../types";

export const switchTheme = mode => dispatch => {
  dispatch({
    type: UPDATE_SETTINGS_THEME,
    payload: mode,
  });
};
