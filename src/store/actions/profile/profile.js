import axios from "axios";
import {
  UPDATE_PROFILE_LOGGEDIN,
  UPDATE_PROFILE_LOGGEDOUT,
  UPDATE_LAST_PRIVATE_MESSAGES,
} from "../../types";

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get("/api/user/get-user");
    console.log("fetch user is successfully called", res);
    dispatch({
      type: UPDATE_PROFILE_LOGGEDIN,
      payload: res.data,
    });
    return;
    //receives all the last messages
  } catch (err) {
    dispatch({
      type: UPDATE_PROFILE_LOGGEDOUT,
    });
  }
};

export const logoutUser = history => async dispatch => {
  try {
    await axios.get("/api/logout");
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
//Returns all the last messages of the chat
export const getLastMessages = () => async dispatch => {
  console.log("Get last messages is called");
  try {
    const res = await axios.get("/api/privatechat/lastmessages");
    dispatch({
      type: UPDATE_LAST_PRIVATE_MESSAGES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
