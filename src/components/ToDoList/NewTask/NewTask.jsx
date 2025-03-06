import React,{useState} from "react"
import classes from './NewTask.module.css'

function NewTask({onCancel,onSubmitData})
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
        event.preventDefault();
        const postData={
            author:authorVal,
            bodyText:textVal
        };

        //console.log(postData);
        onSubmitData(postData);
        onCancel();
    }
    
    return(
        <>
         {/* <div className='container'>  */}
            <form className={classes.form} onSubmit={onSubmitHandler}>
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
                    <button type="button" onClick={onCancel} >Cancel</button>
                    <button type="submit" >Submit</button>
                    </p>

            </form>
        {/* </div> */}
        </>
    );
}

export default NewTask;