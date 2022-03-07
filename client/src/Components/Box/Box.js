import React, { useEffect, useState } from "react";
import "./Box.css";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Online from "./Online";
import ScrollToBottom from "react-scroll-to-bottom";

function Box({ socket }) {
  let [params] = useSearchParams();
  const [message, setmessageList] = useState([]);
  const [personText, setpersonText] = useState("");
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
      setmessageList([...message, data]);
    });
    socket.on("Welcome", (data) => {
      console.log(data);
      setmessageList([...message, data]);
    });
    socket.on("left", (data) => {
      console.log(data);
      setmessageList([...message, data]);
    });
    socket.on("specificRoomData", (data) => {
      console.log(data);
      setonlineUser(data.usersList);
    });

    socket.on("receiveMsg",(data)=>{
      console.log(data);
      setmessageList([...message,data])
    })
    return () => {
      socket.off();
    };
  }, [message]);

  console.log(message)

  const sendMessage=()=>{
    console.log(personText);
    
    socket.emit("sendMessage",{sentMessage:personText})
    setmessageList([...message,{Text:personText,id:"Me"}])

    setpersonText("");

  }
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
            
              {message?.map((msg, index) => {
                if(msg.id){
                  return (
                    <div className="msg_right" key={index}>
                    <p>{msg.Text}</p>
                    {!msg.User?"" :<h5 className="user_name">{msg.id}</h5>}
                    </div>
                  )
                }
                else
                return (
                  <div className="msg_left" key={index}>
                  <p>{msg.Text}</p>
                  {!msg.User?"":<h5 className="user_name">{msg.User.name}</h5>}
                  </div>
                )
              })}
           
           
          </div>
        </ScrollToBottom>
        <div className="box_text_input">
          <input type="text" onChange={e=>setpersonText(e.target.value)} value={personText} onKeyDown={e=>e.key==="Enter" ? sendMessage() :""}/>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
      <Online list={onlineUser}/>
    </div>
  );
}

export default Box;
