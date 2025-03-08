import React,{useState} from "react"
import classes from './NewPost.module.css'
import Modal from "../../components/Modal/Modal";
import { Link,Form, useNavigate, redirect } from "react-router-dom";
function NewPost({onAddPost})
{
    return(
        <>
        <Modal>
            {/* //It is not like a normal html "form" instead it is react router "Form" */}
            <Form method='post' className={classes.form}>
                <p>
                    <label htmlFor="name">Your name</label>
                    {/**** Like angular it send an event to parent component ******/}
                    <input type="text" id="name" required name="author"  />
                </p>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} name="body" />
                </p>
                <p className={classes.actions}>
                    <Link to=".." type="button" >Cancel</Link>
                    <button type="submit">Submit</button>
                    </p>

            </Form>
        </Modal>
        </>
    );
}

export default NewPost;

export async function action({request}){
   const formData= await request.formData();
   const postData=Object.fromEntries(formData);
    const response= await fetch('http://localhost:8080/posts',{
        headers: {
            'Content-Type': 'application/json'
        },
        method:'POST',
        body: JSON.stringify(postData),

    });
    if(response.status===201)
    {
    //"redirect" actually redirects to the parent component like "navigate"
      return redirect('..');
    }
}