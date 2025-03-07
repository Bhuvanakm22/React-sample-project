import { React,StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import Posts,{loader as postsLoader} from './routes/Posts.jsx'
import NewPost,{action as newPostAction} from './routes/NewPost/NewPost.jsx'
import RootLayoutRoutes from './routes/RootLayoutRoutes.jsx'
import PostDetails,{loader as postDetailsLoader} from './routes/PostDetails/PostDetails.jsx'
const router=createBrowserRouter([
  {
    path : '/',
    element: <RootLayoutRoutes />,
    children: [
      { 
        path : '/', 
        element : <Posts />,
        loader: postsLoader,//()=> {   postsLoader        },
        children : [
          { path : '/create-post', element: <NewPost />,action:newPostAction},
          { path : '/:id', element: <PostDetails />,loader : postDetailsLoader}
        ]
      },

    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
