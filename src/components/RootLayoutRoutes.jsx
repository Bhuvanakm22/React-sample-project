
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDoList from './ToDoList/ToDoList'
import NoPageFound from './NoPageFound'
import Home from './Home'
import NavBar from './NavBar/NavBar'
import TaskList from './ToDoList/TaskList/TaskList'
import Posts from './Posts/Posts'
import Login from './Login/Login'
import Register from './Register/Register'
function RootLayoutRoutes() {

    return( 
      <>
      <Router>
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
        </Router>
    </>
    )
    }
    export default RootLayoutRoutes