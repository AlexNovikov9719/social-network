import React from "react";
import style from "./Users.module.css";
import Peginator from "../Common/Peginator/Peginator";
import User from "./User";

const Users = (props) => {
    return (
        <div className={style.content}>
            <Peginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

            {props.users.map(u =>
                <div className={style.contentUsers} key={u.id}>
               <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                     unFollow={props.unFollow} follow={props.follow}/>
                </div>)}
        </div>
    )
}

export default Users;
