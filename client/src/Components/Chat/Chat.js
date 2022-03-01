import React,{useEffect,useState} from 'react'
import "./Chat.css"
import { useSearchParams } from "react-router-dom";
import io  from "socket.io-client";
const ENDPOINT="http://localhost:8001"
function Chat() {
    let socket;
    let [params]=useSearchParams();
    // console.log(params.get("name"));
    // console.log(params.get("room"));
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    useEffect(() => {
      setName(params.get("name"));
      setRoom(params.get("room"));
      
       socket = io(ENDPOINT);
      socket.emit("join-room",{name,room})
      return () => {
        socket.off();
      }
    }, [ENDPOINT])
    useEffect(() => {
     socket.on("user-joined",({name})=>{
       console.log("User joined "+name)
     })
    }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default Chat