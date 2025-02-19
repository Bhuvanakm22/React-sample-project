import React,{ useState } from 'react'
import { BrowserRouter as Router, Routes, Route,NavLink ,Link,useNavigate,  Outlet, } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import ToDoList from './ToDoList'
import NoPage from './NoPage'
import Home from './Home'
import LocaleTimer from './LocaleTimer'
function App() {

return( 
  <>
  <Router>
    <div className='navbar'>
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/todolist">ToDoList</Link></li>
          
        </ul>
      </nav>
      <div><LocaleTimer /></div>
      </div>
      {/* <Outlet /> */}
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todolist" element={<ToDoList/>} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </Router>
</>
)
}
export default App
