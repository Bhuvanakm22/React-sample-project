import React from 'react'
import PostsList from '../components/Posts/PostsList';
import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader/MainHeader';
function Posts() {
return( 
  <>
          <MainHeader /> 
          <Outlet /> {/* {/*To show child component(here pop-up dialog) in the same DOM 
                          placeholder to show root folder*/}

    <main>
      <div className='container-List'>
        <Outlet />
        <PostsList />
      </div>
    </main>
  </>
)
}
export default Posts

export async function loader(){
  const response= await fetch('http://localhost:8080/posts');
  const resData= await response.json();
  return resData.posts;
}