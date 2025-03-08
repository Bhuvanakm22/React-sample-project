
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
// import ToDoList from './../components/ToDoList/ToDoList'
// import NoPageFound from './../components/NoPageFound'
// import Home from './../components/Home'
import NavBar from './../components/NavBar/NavBar'
import MainHeader from '../components/MainHeader/MainHeader';
import Home from '../components/Home';
// import TaskList from './../components/ToDoList/TaskList/TaskList'
// import Posts from '../components/Posts/PostsList'
// import Login from './../components/Login/Login'
// import Register from './../components/Register/Register'

function RoutesLayout() {

    return( 
      <>
      {/* <Router>
        <NavBar />
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/todolist" element={<ToDoList/>} />
              <Route path="/taskList" element={<TaskList/>} />
              <Route path="/postList" element={<Posts/>} />
              <Route path="*" element={<NoPageFound />} />
          </Routes>
        </Router> */}
        <NavBar />
        <Outlet /> 
        {/* {/*To show child component in the same DOM or a placeholder to show root folder */}
    </>
    )
    }
    export default RoutesLayout