import {
  SEND_GROUP_MESSAGE,
  JOIN_ROOM,
  FETCH_GROUP_CHAT_MESSAGES,
  LEAVE_ROOM,
} from "../../types";
import axios from "axios";

export const sendGroupMessage = (message, groupname, sender) => dispatch => {
  const data = {
    text: message,
    room: groupname,
    sender,
  };

  //calls the function in socket middleware
  dispatch({
    type: SEND_GROUP_MESSAGE,
    payload: data,
  });
};

export const joinRoom = params => dispatch => {
  dispatch({
    type: JOIN_ROOM,
    payload: params,
  });
};

export const leaveRoom = params => dispatch => {
  dispatch({
    type: LEAVE_ROOM,
    payload: params,
  });
};

export const fetchGroupChatMessage = groupname => async dispatch => {
  try {
    console.log("Fetch group chat message is called", groupname);
    const res = await axios.get(`/api/groupchat/messages/${groupname}`);
    console.log("fetch group chat message is completed", res.data);
    const groupmessages = res.data.map(message => ({
      from: message.sender.local.username,
      text: message.body,
      image: message.sender.userImage,
      id: message.sender._id,
    }));
    dispatch({
      type: FETCH_GROUP_CHAT_MESSAGES,
      payload: groupmessages,
    });
  } catch (error) {}
};
