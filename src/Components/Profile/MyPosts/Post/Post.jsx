import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://neva-room.ru/uploads/neva/2014/07/silicon-8.jpg' />
            { props.messages }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;