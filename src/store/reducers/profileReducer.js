import { UPDATE_PROFILE_LOGGEDIN, UPDATE_PROFILE_LOGGEDOUT } from "../types";

//contains all the friend request
const returnFriendRequests = requests => {
  const friends = requests.map(request => ({
    fullname: request.userId.fullname,
    userImage: request.userId.userImage,
    id: request.userId._id,
  }));
  return friends;
};

//returns all the online friends
const returnOnlineFriends = (users, friends) => {
  let arr = [];
  console.log("Return all online friends is called", users);
  for (let i = 0; i < friends.length; i++) {
    for (let k = 0; k < users.length; k++) {
      if (friends[i].friendId.fullname === users[k].name) {
        arr.push(friends[i].friendId);
      }
    }
  }
  return arr;
};

const initialState = {
  fetched: false,
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case UPDATE_PROFILE_LOGGEDIN:
      return {
        authenticated: true,
        username: payload.local.username,
        userImage: payload.userImage,
        email: payload.local.email,
        id: payload._id,
        companies: payload.companies,
        fetched: true,
      };

    case UPDATE_PROFILE_LOGGEDOUT:
      return {
        fetched: true,
        authenticated: false,
      };
    default:
      return state;
  }
};
