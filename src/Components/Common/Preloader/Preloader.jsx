import React from "react";
import style from "./Preloader.module.css";
import preloader from "../../../accept/image/VAyR.gif";

const Preloader = (props) => {
    return <img src={preloader} className={style.preloader}/>
}

export default Preloader;