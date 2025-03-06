import React from 'react';
import classes from "./NavBar.module.css"
import LocaleTimer from '../LocaleTimer'
const NavBar = () => {
  return (
<div className='container-box' >
  <nav className={classes.navbar}>
            {/* 
          <nav>
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/todolist">ToDoList</Link></li>
            </ul>
          </nav>
          <div><LocaleTimer /></div>
           */}
    <div className={classes.navbarLeft}>
      <a href="/" ><img src="../assets/icons-home.png" alt="img" /></a>
    </div>
    <div className={classes.navbarCenter}>
      <ul className={classes.navLinks}>
        <li>
          <a className='a-box' href="/login">Login</a>
        </li>
        <li>
          <a className='a-box' href="/register">Register</a>
        </li>
        <li>
          <a className='a-box' href="/todolist">ToDoList</a>
        </li> 
        <li>
          <a className='a-box' href="/taskList">TaskList</a>
        </li>
        <li>
          <a className='a-box' href="/postList">PostList</a>
        </li>
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