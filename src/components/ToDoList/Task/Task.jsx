import React from "react";
import classes from "./Task.module.css"
function Task(props)
{
    return(
<>
 <div className={classes.post}>
   {/* <input type="text" placeholder="Enter the name"  /> */}
   <p className={classes.author} >{props.author}</p>
   <p className={classes.text} >{props.body}</p>
 </div>
</>
    );
}
export default Task;