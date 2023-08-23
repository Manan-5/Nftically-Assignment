import React, { useState } from "react";
import "./App.css";
import "./Style.css";
import icon from "./profile1.png";
import "./button.css";
import chat from "./chat.png";
import sendIcon from "./sendIcon.svg";
import "./chatbot.css";
import Message from "./message";
import icon1 from "./images/chat-avatar-user.png";
import icon2 from "./images/chat2.png";
import background from "./images/backgroundImg.png";
import audio from "./images/ic_audio.png";
import mic from "./images/ic_mic.png";
import reload from "./images/ic_reload.png";
import copy from "./images/ic_copy.png";

function Chat() {
  // let chatArraySelf = [];
  const [chatArraySelf, setChatArraySelf] = useState([]);
  const [chatOpacity, setChatOpacity] = useState({});
  const [flag, setFlag] = useState(false);
  // let chatArrayOther = [];

  const handleChecked = (e) => {
    debugger;
    let arr = [...chatArraySelf];
    if (e.target.checked) {
      setFlag(true);
      if (chatArraySelf.length > 1) {
        let obj = [];
        // arr.map((data, index) => {
        for (let index = chatArraySelf.length - 1; index >= 0; index--) {
          if (index == 0) {
            obj.push(1);
          } else if (index >= 1 && index < 3) {
            // obj[index] = 0.4
            obj.push(0.4);
          } else {
            obj.push(0);
            // obj[index] = 0;
          }
        }
        // setChatArraySelf(arr);
        setChatOpacity(obj);
        console.log(obj);
      }
    } else {
      // setChatArraySelf(arr);
      setFlag(false);
      setChatOpacity([]);
    }
    // let data =  document.getElementById("convCont").style;
    // document.getElementById("convCont").style.backgroundImage = ('https://images.unsplash.com/photo-1582747652673-603191169c49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    // console.log(document.getElementById("convCont").style.backgroundImage);
  };

  const handleSumbit = (e) => {
    debugger;
    // e.preventDefault();
    // if(e.key == "Enter"){
    //     e.preventDefault()
    // }
    let arr = [...chatArraySelf];
    if (e.target.previousSibling.value != "") {
      arr.push(e.target.previousSibling.value);
      e.target.previousSibling.value = "";
      if (flag) {
        if (arr.length > 1) {
          let obj = [];

          // arr.map((data, index) => {
          for (let index = arr.length - 1; index >= 0; index--) {
            if (index == 0) {
              obj.push(1);
            } else if (index >= 1 && index < 3) {
              // obj[index] = 0.4
              obj.push(0.4);
            } else {
              obj.push(0);

              // obj[index] = 0;
            }
          }
          setChatOpacity(obj);
          console.log(obj);
        }
      } else {
        setChatOpacity({});
      }
    }
    setChatArraySelf(arr);
  };

  return (
    <div className="chatbot">
      <div className="header " style={{ paddingRight: "30px" }}>
        <div
          className="heading"
          style={{
            color: "#ffffff 80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0",
            height: "128px",
          }}
        >
          {/* <img className="" src={icon} style={{ width: "54px", height: '54px', paddingLeft:"32px" }}></img> */}
          <div style={{ paddingLeft: "32px" }}>
            <img
              className=""
              src={icon2}
              style={{
                width: "54px",
                height: "54px",
                borderRadius: 25,
                marginRight: "-24px",
              }}
            ></img>
            <img
              src={chat}
              style={{
                height: "24px",
                width: "24px",
                alignSelf: "bottom",
                zIndex: 2,
              }}
            ></img>
            <img
              className=""
              src={icon1}
              style={{
                width: "54px",
                height: "54px",
                zIndex: 1,
                borderRadius: 25,
              }}
            ></img>
          </div>
          <div
            className=""
            style={{
              fontSize: "32px",
              fontWeight: "Bold",
              paddingRight: "44px",
              color: "#ffffff",
            }}
          >
            Interacting with Shahrukh’s Licensed AI Persona
          </div>
          <div class="toggle">
            <label class="switch ">
              <input type="checkbox" onClick={handleChecked} />
              <span class="slider round"></span>
            </label>
            <span className="sub-heading">Avatar</span>
          </div>

          <button
            className="d-flex end-chat-btn"
            style={{ height: "64px", width: "272px" }}
          >
            <img className="mr-1" src={chat}></img>
            <span style={{ color: "#C2D24B", fontSize: "20px" }}>
              End Chat Session
            </span>
          </button>
        </div>
      </div>
      <div className="conversation mb-2 mr-2 ml-2">
        <div className="conv-container" id="convCont" style={{ height: "90%" }}>
          {flag && (
            <img
              src={background}
              style={{
                zIndex: 0,
                position: "absolute",
                backgroundSize: "contain",
                height: "100%",
                width: "inherit",
              }}
            ></img>
          )}
          <div className="all-messages" style={{ zIndex: 2 }}>
            {chatArraySelf &&
              chatArraySelf.length > 0 &&
              chatArraySelf.map((item, index) => {
                return (
                  <Message
                    key={index}
                    message={item}
                    index={index}
                    icon={index % 2 == 0 ? icon1 : icon2}
                    flag={flag}
                    chatOpacity={chatOpacity[index]}
                  ></Message>
                  // <div>
                  //   <span className='sub-heading'>{item}</span>
                  // </div>
                );
              })}
          </div>
        </div>

        <div id="form" class="conversation-compose ml-2">
          <div
            className="d-flex"
            style={{
              width: "80%",
              justifyContent: "space-between",
              paddingLeft: 24,
              paddingRight: 10,
            }}
          >
            <input
              id="val"
              class="input-msg ml-2"
              name="input"
              style={{ fontSize: 20, height: 88, alignSelf: "center" }}
              // onKeyDown={(e) =>  == "Enter" ? e.preventDefault() : ''}
              placeholder="Start typing your message here...."
              autocomplete="off"
              autofocus
            ></input>
            <img
              className="mr-1"
              type="sumbit"
              src={sendIcon}
              style={{ height: "50%", alignSelf: "center" }}
              onClick={handleSumbit}
            ></img>
          </div>
          <div></div>
          <img
            className=""
            src={audio}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: 25,
              alignSelf: "center",
              paddingLeft: 10,
            }}
          ></img>
          <img
            className=""
            src={mic}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: 25,
              alignSelf: "center",
              paddingLeft: 10,
            }}
          ></img>
          <img
            className=""
            src={reload}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: 25,
              alignSelf: "center",
              paddingLeft: 10,
            }}
          ></img>
          <img
            className=""
            src={copy}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: 25,
              alignSelf: "center",
              paddingLeft: 10,
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Chat;
