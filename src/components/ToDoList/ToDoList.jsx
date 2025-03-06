import React,{useState} from "react"
import CardHeader from "../CardHeader/CardHeader";
import { useNavigate } from "react-router-dom";
function ToDoList()
{
    const [inputText,setInputText]=useState("");
    const [arrList,setArrVal]=useState([]);
    const navigate=useNavigate();
    function onSubmit()
    {
      navigate('/login')
    }
    function handleChange(event)
    {
    const vals=event.target.value;
    // console.log(event.target.value)
    setInputText(vals);
    }
    function onAdd()
    {
        setArrVal(prevValue=>
        { return [...prevValue, inputText] }
        );
        setInputText("");
    }
return(
<>
<div className='container'> 
         <CardHeader headerText="To-Do List" />
            <form>

            
            <input className='textStyle' type="text" name="Item" onChange={handleChange} value={inputText} id="Item" placeholder="Add item to be listed" />
            <button className='btn-Submit' onClick={onAdd} type="button" >Add</button>
            </form>
            <br/>
            <ul className="todoList">
            <a href='/taskList' ><li>React Learning</li></a>
                {
                arrList.map((val)=>(<li key={val}>{val}</li>) )
                }
            </ul>
            {/* <div>
        <ul>
          {items.map(todoItem => (
            // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
<li>{todoItem}</li>
          ))}
        </ul>
      </div> */}
</div>
</>
    );
}

export default ToDoList;