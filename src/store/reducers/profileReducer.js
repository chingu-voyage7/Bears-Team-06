import {
  UPDATE_PROFILE_LOGGEDIN,
  UPDATE_PROFILE_LOGGEDOUT,
  UPDATE_LAST_PRIVATE_MESSAGES,
} from "../types";

const initialState = {
  fetched: false,
  lastMessages: [],
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case UPDATE_PROFILE_LOGGEDIN:
      return {
        ...state,
        authenticated: true,
        username: payload.local.username,
        userImage: payload.userImage,
        email: payload.local.email,
        id: payload._id,
        companies: payload.companies,
        fetched: true,
      };

    case UPDATE_LAST_PRIVATE_MESSAGES:
      return {
        ...state,
        lastMessages: payload,
      };
    case UPDATE_PROFILE_LOGGEDOUT:
      return {
        fetched: true,
        authenticated: false,
        lastMessages: [],
      };
    default:
      return state;
  }
};
