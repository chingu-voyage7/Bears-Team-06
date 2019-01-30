import React from "react";
import PrivateChatMessages from "./PrivateChatMessages/PrivateChatMessages";
import PrivateSendMessage from "./PrivateSendMessage/PrivateSendMessage";
import Header from "../../common/Header/Header";

const PrivateMainChat = props => {
  return (
    <div className="PrivateMainChat">
      <Header />
      <div className="PrivateMainChat__header">
        <h1 className="PrivateMainChat__header__text">
          <span className="PrivateMainChat__header__hashtag">#</span>{" "}
          {props.receiverName}
        </h1>
      </div>
      <PrivateChatMessages />
      <PrivateSendMessage room={props.room} />
    </div>
  );
};

export default PrivateMainChat;
