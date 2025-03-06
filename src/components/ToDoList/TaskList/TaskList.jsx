import React,{useEffect, useState} from "react"
import NewTask from "../NewTask/NewTask";
import Post from "../Task/Task"
import classes from './TaskList.module.css'
import CardHeader from "../../CardHeader/CardHeader";
import DialogBoxModal from "../DialogBoxModal/DialogBoxModal"
import MainHeader from "../DialogBoxHeader/MainHeader";



function TaskList()
{
    
    // const [authorVal,setCurrentAuthor]=useState('');
    // function AuthorChangeEventHandler(event)
    // {
    //     setCurrentAuthor(event.target.value);     
    // }
    // const [textVal,setCurrentText]=useState('');
    // function TextChangeEventHandler(event)
    // {
    //     setCurrentText(event.target.value);     
    // }
  
    const [postsData,setPostData]=useState([]);
    const [isFetching,setIsFetching]=useState(false);
    const [isHideDialogBox,setIsHideDialogBox]=useState(false);
   
//Below useEffect will execute only once when the page loads
useEffect(()=>{
async function fetchPosts(params) {
    setIsFetching(true);
    //NodeJS url
    const response= await fetch('http://localhost:8080/tasks');
    const resData= await response.json();
    setPostData(resData.tasks);
    setIsFetching(false);
}
fetchPosts();

},[]);

function HideDialogBox(event)
{
    setIsHideDialogBox(!isHideDialogBox);     
}

    function addPostHandler(postdata)
    {
        fetch('http://localhost:8080/tasks',{
            headers: {
                'Content-Type': 'application/json'
            },
            method:'POST',
            body: JSON.stringify(postdata),

        });
        setPostData((existingData)=>[postdata,...existingData]);  
    }
    return(
        <>
        {/* <MainHeader onCreatePost={HideDialogBox} />
        <main>
            <div className={classes.containerList}>
                {isHideDialogBox ? (
                <DialogBoxModal onClose={HideDialogBox}>
                // Like angular it send/recv event from child component 
                    <NewPost 
                        OnAuthorChangeHandler={AuthorChangeEventHandler}  
                        OnTextChangeHandler={TextChangeEventHandler} 
                    />
                </DialogBoxModal>
                ):null}

            <ul className={classes.posts}>
            <Post author={authorVal} body={textVal} />
            <Post author="Peter" body="I like Angular" />
            </ul>
            </div>
            </main> */}
            <MainHeader onCreatePost={HideDialogBox} />
        <main>
            <div className={classes.containerList}>
                {isHideDialogBox ? (
                <DialogBoxModal onClose={HideDialogBox}>
                {/* Like angular it send/recv event from child component */}
                    <NewTask onCancel={HideDialogBox} onSubmitData={addPostHandler} />
                </DialogBoxModal>
                ):null}
            {!isFetching && postsData.length > 0 && (
                        <ul className={classes.posts}>           
                        { postsData.map((post)=> <Post key={post.bodyText} author={post.author} body={post.bodyText}/>) }
                        </ul>
            )}
            {isFetching && (<div style={{color: 'white', textAlign: 'center'}}>
                <p>Loading...</p>
                </div>
            )}
            {!isFetching && postsData.length===0 && (
                <div style={{textAlign: "center", color:"white"}}>
                <h2>There are no post yet.</h2>
                <p>Start add some posts!.</p>
                </div>
            )}
            </div>

            </main>
        </>
    );
}

export default TaskList;