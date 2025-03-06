import React,{useState} from "react"
import classes from './DialogBoxModal.module.css'

//It gets child component as an object
function DialogBoxModal({ children,onClose})
{

    return(
        <>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<div className={classes.backdrop} onClick={onClose} />
        <dialog open className={classes.modal} >
            {children}</dialog>
        </>
    );
}
export default DialogBoxModal;