import React,{useState} from "react"
import { useLocation,Outlet } from "react-router-dom";


export default function Home()
{
    const location = useLocation();
return(
    <>
    <div className='container'style={ {marginTop: "100px" } } > 
            <h1 >Management Portal</h1>
                {(location.pathname!=='/home') && 
            <div style={{display: "flex", justifyContent: "space-around"}}>
            <p><a href='/login' >Login?</a></p>
            <p><a href='/register' >Register?</a></p>
            </div>
}
    </div>
    </>
);
}

