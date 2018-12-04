import axios from "axios";
import { UPDATE_GROUP_LISTS, UPDATE_GROUP_SELECTED_INDEX } from "../../types";

export const createGroup = name => async dispatch => {
  console.log("Create group is called");
  try {
    const res = await axios.post("/api/group/create", { name });
    console.log("Group is successfully created");
  } catch (error) {
    console.log(error.response);
    if (error.response.data) {
      throw error.response.data.message;
    }
    throw "Oops some error occured.Please try Again Later";
  }
};

export const fetchGroups = () => async dispatch => {
  try {
    const res = await axios.get("/api/group/all-groups");
    dispatch({
      type: UPDATE_GROUP_LISTS,
      payload: res.data
    });
  } catch (error) {
    console.log("Some error occured while fetching the groups");
    console.log(error);
  }
};

export const updateSelectedGroup = index => dispatch => {
  dispatch({
    type: UPDATE_GROUP_SELECTED_INDEX,
    payload: index
  });
};

export const saveGroupChatMessage = (groupname, message) => async dispatch => {
  console.log("Save Group message is caleld");
  try {
    await axios.post("/api/groupchat/save-message", { groupname, message });
  } catch (err) {
    console.log(err);
  }
};
