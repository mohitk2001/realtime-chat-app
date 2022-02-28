import React from 'react'
import Join from "./Components/Join/Join"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Chat from './Components/Chat/Chat';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Join/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App