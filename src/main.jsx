import { React,StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import Posts,{loader as postsLoader} from './routes/Posts.jsx'
import NewPost,{action as newPostAction} from './routes/NewPost/NewPost.jsx'
import RootLayoutRoutes from './routes/RootLayoutRoutes.jsx'
import PostDetails,{loader as postDetailsLoader} from './routes/PostDetails/PostDetails.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import ToDoList from './components/ToDoList/ToDoList.jsx'
import TaskList from './components/ToDoList/TaskList/TaskList.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import NoPageFound from './components/NoPageFound.jsx'
const router=createBrowserRouter([
  {
    path : '/', 
    element : <RootLayoutRoutes />,
    children:[
      {
        path : '/login', 
        element : <Login />,
      },
      {
        path : '/register', 
        element : <Register />,
      },
      {
        path : '/home', 
        element : <Home />,
      },
      {
        path : '/todolist', 
        element : <ToDoList />,
      },  
      {
        path: '/tasklist' , element: <TaskList />
      },
      { 
        path : '/posts', 
        element : <Posts />,
        loader: postsLoader,//()=> {   postsLoader        },
        children : [
          { path : '/posts/create-post', element: <NewPost />,action:newPostAction},
          { path : '/posts/:id', element: <PostDetails />,loader : postDetailsLoader}
        ]
      },
      {
        path: '/logout' , element: <Home />
      },
      {
        path: '*' , element: <NoPageFound />
      },

    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
