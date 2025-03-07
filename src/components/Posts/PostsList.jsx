import React,{useEffect, useState} from "react"
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post"
import classes from './PostsList.module.css'


function PostsList()
{

    const posts=useLoaderData();


    // function addPostHandler(postdata)
    // {
    //     fetch('http://localhost:8080/posts',{
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         method:'POST',
    //         body: JSON.stringify(postdata),

    //     });
    //     setPostData((existingData)=>[postdata,...existingData]);  
    // }
    return(
        <>
            {posts.length > 0 && (
                        <ul className={classes.posts}>           
                        { posts.map((post)=> <Post key={post.id} id={post.id} author={post.author} body={post.body}/>) }
                        </ul>
            )}
            {posts.length===0 && (
                <div style={{textAlign: "center", color:"white"}}>
                <h2>There are no post yet.</h2>
                <p>Start add some posts!.</p>
                </div>
            )}

        </>
    );
}

export default PostsList;