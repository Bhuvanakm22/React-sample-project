import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from "./NavBar.module.css"
import LocaleTimer from '../LocaleTimer'
const NavBar = () => {
    const location = useLocation();

  return (
<div className='container-box' >
  <nav className={classes.navbar}>

    <div className={classes.navbarLeft}>
    <a href="/home" >
    {location.pathname!=="/" && location.pathname!=="/login" && location.pathname!=="/register" && location.pathname!=="/logout" &&
      <img src="../assets/icons-home.png" alt="img" />
    }
    </a>
    </div>
    <div className={classes.navbarCenter}>
      <ul className={classes.navLinks}>
      {location.pathname!=="/" && location.pathname!=="/login" && location.pathname!=="/register" && location.pathname!=="/logout" &&
      <>
        <li>
          <a className='a-box' href="/todolist">ToDoList</a>
        </li> 
        <li>
          <a className='a-box' href="/taskList">TaskList</a>
        </li>
        <li>
          <a className='a-box' href="/posts">PostList</a>
        </li>
        <li>
          <a className='a-box' href="/logout">Logout</a>
        </li>
        </>
        }
      </ul>

    </div>


    <div className={classes.navbarRight}>
      <div><LocaleTimer /></div>
      {/* <a href="/cart" className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">0</span>
      </a>
      <a href="/account" className="user-icon">
        <i className="fas fa-user"></i>
      </a> */}
    </div>
  </nav>
</div>
);
};

export default NavBar;