import React,{useState} from "react"
import classes from './NewPost.module.css'

function NewPost_old(props)
{
    const [authorVal,setCurrentAuthor]=useState('');
    function AuthorChangeEventHandler(event)
    {
        setCurrentAuthor(event.target.value);     
    }
    const [textVal,setCurrentText]=useState('');
    function TextChangeEventHandler(event)
    {
        setCurrentText(event.target.value);     
    }
    function onSubmitHandler(event)
    {
        const postData={
            author:authorVal,
            body:textVal
        };

        console.log(postData);
    }
    
    return(
        <>
         {/* <div className='container'>  */}
            <form className={classes.form} >
                <p>
                    <label htmlFor="name">Your name</label>
                    {/**** Like angular it send an event to parent component ******/}
                    <input type="text" id="name" required onChange={AuthorChangeEventHandler} />
                </p>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={TextChangeEventHandler} />
                </p>
                <p className={classes.actions}>
                    <button type="button" >Cancel</button>
                    <button type="submit" >Submit</button>
                    </p>

            </form>
        {/* </div> */}
        </>
    );
}

export default NewPost_old;