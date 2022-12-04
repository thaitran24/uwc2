import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { FcVideoCall } from "react-icons/fc";
import { BsThreeDotsVertical } from "react-icons/bs";

import "./chatHeader.css";

const ChatHeader = () => {
  return (
    <div className="chatHeader_container">
      <img src="https://picsum.photos/200" alt="" />
      <div>
        <h2>Group Chat</h2>
        <p>last message</p>
      </div>
      <div className="icons">
        <IoCallOutline />
        <FcVideoCall />
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default ChatHeader;
