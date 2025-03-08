
import React from 'react'
import { useLocation,Outlet } from "react-router-dom";
import NavBar from './../components/NavBar/NavBar'
import Home from '../components/Home';

function RootLayoutRoutes() {
  const location = useLocation();
    return( 
      <>
        <NavBar />
        {(location.pathname==='/') && <Home />
        // <div className='container'style={ {marginTop: "100px" } } ><h1 >Management Portal</h1></div>
        }
        
        <Outlet /> 
    </>
    )
    }
    export default RootLayoutRoutes