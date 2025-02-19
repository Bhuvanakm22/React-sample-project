import React,{useState} from "react"

function Register()
{
    ///*** Hooks States to keep up data with current values***/
    const [fullUserInfo,setFullUserInfo]= useState({
        fName:"",
        lName:"",
        email:""
    })
    function OnRegister(event)
    {
        ///***1. method of Values destruction***/
        const {value,name}=event.target;
        // /*** Hooks States method setFullUserInfo to update the value***/
        setFullUserInfo((prevValue)=>
        {
            return{
                // /*** Spread operator in ES6 javascript***/
                ...prevValue,
                // /***ES6 javascript method change the value of corresponding key***/
                [name]:value
              };
            // if(name==="fName")
            // {
            //     return{
            //     fName:value,
            //     lName:prevValue.lName,
            //     email:prevValue.email
            //   };
            // }
            // // biome-ignore lint/style/noUselessElse: <explanation>
            // else if(name==="lName")
            // {
            //     return{
            //         fName:prevValue.fName,
            //         lName:value,
            //         email:prevValue.email
            //       };
            // }
            // // biome-ignore lint/style/noUselessElse: <explanation>
            // else if(name==="email")
            // {
            //     return{
            //         fName:prevValue.fName,
            //         lName:prevValue.lName,
            //         email:value
            //       };
            // }
        }
        )
    }

    return(
    <>
        <div className='container'> 
        <h1>Register</h1>
        {/* <!-- Get the current values from Hooks state fullUserInfo variable--> */}
        <h6>{fullUserInfo.fName} {fullUserInfo.lName}</h6>
        <h6>{fullUserInfo.email}</h6>
            <form>
                <br/>
                <input className='login-input' onChange={OnRegister} type="text" name="fName" 
                value={fullUserInfo.fName} 
                id="fName" placeholder="First Name" />
                <input className='login-input' onChange={OnRegister} type="text" name="lName" 
                value={fullUserInfo.lName} 
                id="lName" placeholder="Last Name" />
                <input className='login-input' onChange={OnRegister} type="text" name="email" 
                value={fullUserInfo.email} 
                id="email" placeholder="Email Address" />
                <br/>
                <button className='btn-Submit' type="button" >Register</button>

            </form> 
        </div>
    </>
)
}
export default Register