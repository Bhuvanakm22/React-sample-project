import React,{ useState } from 'react'
import CardHeader from "../CardHeader/CardHeader";
import { useNavigate } from 'react-router-dom';

function Login()
{

const [isBtnHover, setBtnBackColor] = useState(false);
const navigate=useNavigate();
function onSubmit(event)
{
  event.preventDefault();
  if((event.target.sName.value==="TestUser") && (event.target.sPassword.value==="TestUser"))
  navigate('/todolist')
  else
  console.log("Incorrect user information!")
}

function handleMouseOver()
{
setBtnBackColor(true);
}
function handleMouseOut()
{
setBtnBackColor(false);
}

return (
  <>  
  <div className='container'>
  <CardHeader headerText="Portal Login" />
    <form onSubmit={onSubmit}>
      <input className='textStyle' required type='text' placeholder='User name' id="sName" name="sName"  />
      <input className='textStyle' required type="password" placeholder='Password' id="sPassword" name="sPassword"  />
      <a href='/register' >Register?</a>
      <br/>
      {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
      <br/><button className='btn-Submit' type='submit' style={{backgroundColor:isBtnHover? "blue":"aqua"}}
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}
       >Login</button>
       <p>TestUser/TestUser</p>
    </form>
  </div>
  </>
)


}

export default Login;