import axios from "axios";
import {
  UPDATE_PROFILE_LOGGEDIN,
  UPDATE_PROFILE_LOGGEDOUT,
  UPDATE_LAST_PRIVATE_MESSAGES,
} from "../../types";

export const signUpFormSubmit = async (
  values,
  history,
  dispatch,
  SubmissionError,
) => {
  try {
    console.log("Sign up form submit has been called");
    const response = await axios.post("/api/signup", values);
    console.log("From sign up formt submit", response);
    await dispatch(fetchUser());
    history.push("/dashboard");
  } catch (err) {
    console.log(err);
    //Server side validation of redux form
    throw new SubmissionError(err.response.data);
  }
};
export const loginFormSubmit = async (
  values,
  history,
  dispatch,
  SubmissionError,
) => {
  console.log(values);
  try {
    console.log("login form submit has been called");
    const response = await axios.post("/api/login", values);
    console.log("login has finished", history);
    await dispatch(fetchUser());
    history.push("/dashboard");
  } catch (err) {
    //Server side validation of redux form
    console.log(err);
    throw new SubmissionError(err.response.data);
  }
};

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

export const updateProfile = profile => async dispatch => {
  dispatch({
    type: UPDATE_PROFILE_LOGGEDIN,
    payload: profile,
  });
};
export const logoutUser = history => async dispatch => {
  try {
    await axios.get("/api/user/logout");
    console.log("Log out user called");
    dispatch({
      type: UPDATE_PROFILE_LOGGEDOUT,
    });
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
