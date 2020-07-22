import React from "react";
import style from "./Header.module.css";
import logotype from "../../accept/image/xampp_94513.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <div className={style.header}>
            <div className={style.logo}>
                <img src={logotype} />
            </div>
            <div className={style.login}>
                {props.isAuth
                    ? props.login && <button onClick={props.logOut} className={style.logOut}>Log out</button>
                    : <NavLink to={'/login'}>LOGIN</NavLink>
                }
            </div>
        </div>
    )
}

export default Header;