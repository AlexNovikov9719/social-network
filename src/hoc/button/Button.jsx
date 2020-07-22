import React from "react";
import style from "./Button.module.css";

export const allButton = (text) => {
    return <div>
        <button className={style.button}>{text}</button>
    </div>
}
