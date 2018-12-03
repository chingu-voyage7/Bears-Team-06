import axios from "axios";

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
