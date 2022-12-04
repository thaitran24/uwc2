import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import { BsFillMicFill } from "react-icons/bs";
import "./chatDetail.css";
const ChatDetail = () => {
  return (
    <div className="chatDetailContainer">
      <ChatHeader />
      <ChatBody />
      {/* send input box */}
      <div className="sendInput">
        <form className="inputForm">
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send</button>
        </form>
        {/* microphone */}
        <div className="microphone">
          <BsFillMicFill />
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
