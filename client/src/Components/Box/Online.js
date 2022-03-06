import React from 'react'
import "./Online.css"
import ScrollToBottom from 'react-scroll-to-bottom';
function Online({list}) {

  return (
    <div className='online_comp'>
        <div className="online_top">
            <div className="online_icon"></div>
            <h2>Online</h2>
        </div>
       <ScrollToBottom className="scroller">
       <div className="online_list">
            {
                list.map((user,index)=>{
                    return (<p key={index}>{user.name}</p>)
                })
            }
        </div>
       </ScrollToBottom>
    </div>
  )
}

export default Online