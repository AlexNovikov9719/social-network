import React from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={style.navbar}>
            <div className={style.link}>
                <div><NavLink to='/profile'>Profile</NavLink></div>
                <div><NavLink to='/dialogs'>Messages</NavLink></div>
                <div><NavLink to='/users'>Users</NavLink></div>
               {/* <div><NavLink to='/'>News</NavLink></div>
                <div><NavLink to='/music'>Music</NavLink></div>*/}
            </div>
        </div>
    )
}

export default Navbar;