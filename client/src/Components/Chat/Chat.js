import React from 'react'
import "./Chat.css"
import io  from "socket.io-client";
import Box from '../Box/Box';

const socket=io("https://socket-app-io.herokuapp.com")

function Chat() {
   // let [params]=useSearchParams();
    // useEffect(() => {
    //   socket.emit("join-room",params.get("name"),params.get("room"))
    //   return () => {
    //     socket.off();
    //   }
    // }, [])
  return (
    <div className='chat_comp'>
      <Box socket={socket}/>
    </div>
  )
}

export default Chat