import React from "react";
import "./chatbot.css";
import "./App.css";
import share from "./images/ic_share.png";
import like from "./images/ic_like.png";
import dislike from "./images/ic_dislike.png";
import emo from "./images/emoji.png";

function Message(props) {
  const { message, icon, emoji, index, flag, chatOpacity } = props;
  console.log(chatOpacity);
  return (
    <div
      className="d-flex"
      style={{
        width: "100%",
        fontSize: 20,
        justifyContent: `${index % 2 == 0 ? "flex-end" : "flex-start"}`,
        opacity: `${flag ? chatOpacity : 1}`,
      }}
    >
      <div
        className="message-container mb-2 mr-2 ml-2 d-flex"
        style={{
          textAlign: `${index % 2 == 0 ? "right" : "left"}`,
          position: "relative",
        }}
      >
        <div>
          <img
            src={icon}
            style={{ height: 54, width: 54, borderRadius: 25 }}
          ></img>
        </div>
        <div className="message-text" style={{ fontSize: 20 }}>
          {message}
        </div>
        {index % 2 != 0 && (
          <div>
            <img
              src={emo}
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                right: "-5px",
                bottom: "-5px",
              }}
            ></img>
          </div>
        )}
      </div>
      {index % 2 != 0 && (
        <div style={{ marginLeft: "-10px" }}>
          <img
            className=""
            src={share}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: 25,
              paddingRight: 5,
            }}
          ></img>
          <img
            className=""
            src={like}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: 25,
              alignSelf: "center",
              paddingRight: 5,
            }}
          ></img>
          <img
            className=""
            src={dislike}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: 25,
              alignSelf: "center",
              paddingRight: 5,
            }}
          ></img>
        </div>
      )}
    </div>
  );
}

export default Message;
