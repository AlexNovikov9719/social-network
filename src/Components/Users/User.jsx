import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../accept/image/thumb-174631.jpg";
import React from "react";

const User = (props) => {
    let u = props.user;
    return (
        <div>
               <span>
                   <div>
                       <NavLink to={'/profile/' + u.id}>
                       {<img src={u.photos.small ? u.photos.large : userPhoto} className={style.photoUser}/>}
                       </NavLink>
                   </div>
                   <div>
                       {u.followed
                           ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                     onClick={() => {
                                         props.unFollow(u.id)
                                     }}>Unfollow</button>

                           : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                     onClick={() => {
                                         props.follow(u.id)
                                     }}>Follow</button>
                       }
                   </div>
               </span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
        </div>
    )
}


export default User;
