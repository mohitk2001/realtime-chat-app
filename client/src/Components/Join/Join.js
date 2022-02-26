import React,{useState} from 'react'
import "./Join.css"
function Join() {
    const [name, setName] = useState("");
    const [room,setRoom]=useState("");
  return (
    <div className='join_chat'>
        <div className="join_chat_container">
            <h1>Join Now</h1>
            <input type="text" placeholder='name' />
            <input type="text" placeholder='room' />
            <button >JOIN</button>
        </div>
    </div>
  )
}

export default Join