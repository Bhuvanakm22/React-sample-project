
import React,{ useState } from 'react'

function CardHeader(props){
    return(
            <>  
            <div className=''>
              <h1 className="header-style">{props.headerText}</h1> 
            </div>
            </>
    );
}

export default CardHeader ;