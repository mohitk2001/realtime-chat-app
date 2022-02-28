import React,{useEffect} from 'react'
import "./Chat.css"
import { useSearchParams } from "react-router-dom";
import io  from "socket.io-client";
function Chat() {

    let [params]=useSearchParams();
    console.log(params.get("name"));
    console.log(params.get("room"));

    useEffect(() => {
        const socket = io("http://localhost:8001/");
    
      return () => {
        socket.off();
      }
    }, [])
    
  return (
    <div>Chat</div>
  )
}

export default Chat