import React,{useState} from "react"
import classes from './Modal.module.css'
import { useNavigate } from "react-router-dom";

//It gets child component as an object
function Modal({ children})
{

    const navigate=useNavigate();
    function closeHandler()
    {
        navigate('..');
    }
    return(
        <>
       
<div className={classes.backdrop} onKeyDown={closeHandler} onClick={closeHandler} />
        <dialog open className={classes.modal} >
            {children}</dialog>
        </>
    );
}
export default Modal;