import React, { useEffect, useState } from "react";
import "./Box.css";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Online from "./Online";
import ScrollToBottom from "react-scroll-to-bottom";

function Box({ socket }) {
  let [params] = useSearchParams();
  const [message, setmessageList] = useState([]);
  let navigate = useNavigate();
  const [onlineUser, setonlineUser] = useState([]);
  useEffect(() => {
    socket.emit(
      "join-room",
      params.get("name"),
      params.get("room"),
      (error) => {
        if (error) {
          console.log(error);
          //navigate("/")
        }
      }
    );
  }, []);
  useEffect(() => {
    socket.on("user-joined", (data) => {
      console.log(data);
      setmessageList([...message, data.Text]);
    });
    socket.on("Welcome", (data) => {
      console.log(data);
      setmessageList([...message, data.Text]);
    });
    socket.on("left", (data) => {
      console.log(data);
      setmessageList([...message, data.Text]);
    });
    socket.on("specificRoomData", (data) => {
      console.log(data);
      setonlineUser(data.usersList);
    });
    return () => {
      socket.off();
    };
  }, [message]);

  return (
    <div className="reassign">
      <div className="box_comp">
        <div className="box_top">
          <img
            src="https://i.pinimg.com/originals/a6/06/25/a60625748a61e88e4ae17d53bc286910.png"
            alt=""
          />
          <h2>iChat</h2>
        </div>
        <ScrollToBottom className="msg_scroller">
          <div className="box_message_container">
            <div className="msg_left">
              {message?.map((msg, index) => {
                return <p key={index}>{msg}</p>;
              })}
            </div>
            <div className="msg_right">right</div>
          </div>
        </ScrollToBottom>
        <div className="box_text_input">
          <input type="text" />
          <button>Send</button>
        </div>
      </div>
      <Online list={onlineUser}/>
    </div>
  );
}

export default Box;
