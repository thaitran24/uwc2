import React from "react";
import AccountChat from "../components/AccountChat/AccountChat";
import ChatDetail from "../components/ChatDetail/ChatDetail";
import "./Communication.css";
const Communication = () => {
  return (
    <div className="comm">
      <div className="container">
        <div className="left">
          <div className="left__top">
            <h2>GROUP CHAT</h2>
            <AccountChat
              name="nhan"
              img="https://picsum.photos/200"
              lastMess="hello"
              timeLastMess="12:00"
              numNotify="5"
            />
            <AccountChat />
            <AccountChat />
          </div>
          <div className="left__down">
            <h2>People</h2>
            <AccountChat />
            <AccountChat />
            <AccountChat />
          </div>
        </div>
        <div className="right">
          <ChatDetail />
        </div>
      </div>
    </div>
  );
};

export default Communication;
