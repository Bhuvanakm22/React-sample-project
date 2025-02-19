import React,{useState} from "react"

function ToDoList()
{
    const [inputText,setInputText]=useState("");
    const [arrList,setArrVal]=useState([]);

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
        <p className="toDoHeader">To-Do List</p>
            <form>
                <br/>
            </form>
            <input  type="text" name="Item" onChange={handleChange} value={inputText} id="Item" placeholder="Item" />
            <button className='btn-Submit' onClick={onAdd} type="button" >Add</button>

            <ul className="todoList">
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