import axios from "axios";
import { ADD_PEOPLE_TO_LIST, SET_PEOPLE_SCROLLABLE_FALSE } from "../../types";

export const fetchPeople = (skip, limit) => async dispatch => {
  try {
    const res = await axios.get(`/api/people/find-all/${skip}/${limit}`);
    console.log("Fetch people have been called", res.data);
    if (!res.data || res.data.length === 0) {
      dispatch({
        type: SET_PEOPLE_SCROLLABLE_FALSE,
      });
    }
    dispatch({
      type: ADD_PEOPLE_TO_LIST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
