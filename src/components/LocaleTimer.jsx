import React,{ useState } from 'react'

export default function LocaleTimer()
{
 ///*** "Hooks States" to keep up data with current values***/   
 //[Current_value, Function_to_update_new]=state hook
const [timer, setCount] = useState(returnTime());

function returnTime() {
    return new Date().toLocaleTimeString();
    }
    
    function getTime() {
        // /*** Hooks States method setCount to update the value***/
    setCount(returnTime());
    }
    setInterval(getTime, 1000);
    
  
    return (
    <>  
      <div>
        {/* <!-- Get the current values from Hooks state timer variable--> */}
        <h6 style={{color:"black"}}>Site Locale Time :- {timer}</h6>
      </div>
    </>
    );
}