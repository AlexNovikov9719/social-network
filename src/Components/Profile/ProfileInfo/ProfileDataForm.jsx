import React from "react";
import {createField, InputType} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../Login/Login.module.css";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return(
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>fullName</b>: {createField('fullName', 'Input', 'Your fullName', [],'input', 'input', '' )}
            </div>
            <div>
                <b>Looking For a Job</b>: {createField('lookingForAJob', 'Input', '', '','checkbox' )}
            </div>
            <div>
                <b>My professional skills</b>: {createField('lookingForAJobDescription', 'Input', 'Your professional skills', [], 'input', 'input', '' )}
            </div>
            <div>
                <b>About me</b>: {createField('aboutMe', 'Input', 'About Me', [], 'input', 'input', '' )}
            </div>
            {<div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div className={style.contact}>
                    <b>{key}: {createField("contacts." + key, 'Input', key)}</b>
                </div>
            })}
            </div>}
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
