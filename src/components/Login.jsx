import React,{ useState } from 'react'
import '../App.css'

function Login()
{
const [isBtnHover, setBtnBackColor] = useState(false);
function OnSuccess()
{
console.log("Success Login");
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
    <h1>Management Portal</h1>   
    <form >
      <input type='text' placeholder='User name' id="sName" name="sName"  />
      <input type="password" placeholder='Password' id="sPassword" name="sPassword"  />
      {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
      <br/><button className='btn-Submit' type='button' style={{backgroundColor:isBtnHover? "blue":"aqua"}}
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}
      onClick={OnSuccess} >Login</button>
    </form>
  </div>
  </>
)


}

export default Login;