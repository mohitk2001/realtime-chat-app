import React,{useState} from 'react'
import "./Join.css"
import { Link, useNavigate } from 'react-router-dom';
function Join() {
    const [name, setName] = useState("");
    const [room,setRoom]=useState("");
    const nav=useNavigate();
  return (
    <div className='join_chat'>
        <div className="join_chat_container">
            <h1>Join Now</h1>
            <input type="text" placeholder='name' onChange={e=>setName(e.target.value)} />
            <input type="text" placeholder='room' onChange={e=>setRoom(e.target.value)} onKeyDown={(e)=>e.key==="Enter" ? nav(`/chat?name=${name}&room=${room}`):""}/>
            <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}><button className='btn btn-primary mb-3'>JOIN</button></Link>
        </div>
    </div>
  )
}

export default Join