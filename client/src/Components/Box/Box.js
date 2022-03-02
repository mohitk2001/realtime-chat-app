import React,{useEffect,useState} from "react";
import "./Box.css";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ScrollToBottom from 'react-scroll-to-bottom';

function Box({socket}) {
    let [params]=useSearchParams();
    const [message, setmessageList] = useState([])
    let navigate = useNavigate();

    useEffect(() => {
    
     console.log(socket);
     socket.emit("join-room",params.get("name"),params.get("room"),(error)=>{
         if(error){
             alert(error);
             navigate("/")
         }
     })
     socket.on("used-joined",(data)=>{
         console.log(data);
        setmessageList([...message,data.joinedText]);
     })
    }, [message])
    
    
  return (
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
              {
                  message?.map((msg,index)=>{
                      return <p key={index}>{msg}</p>
                  })
              }
          </div>
          <div className="msg_right">right</div>
          
      </div>
     </ScrollToBottom>
      <div className="box_text_input">
          <input type="text" />
          <button>Send</button>
      </div>
    </div>
  );
}

export default Box;
