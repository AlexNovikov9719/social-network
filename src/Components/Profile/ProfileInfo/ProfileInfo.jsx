import React, {useState} from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../accept/image/thumb-174631.jpg";
import ProfileStatus from "./ProfileStatus";
import {ProfileDataReduxForm} from "./ProfileDataForm";


const ProfileInfo = (props) => {

    let[editMode, setEditMode] = useState(false);

    if(!props.profile) {
        return <Preloader />
    }

    let onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    let onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })

    }

    return(
        <div>
            <div>
                <div className={style.photo}>
                    <img src={props.profile.photos.large || userPhoto} className={style.photo}/>
                    <div className={style.addPhoto}>
                        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    </div>
                </div>
                <div className={style.descriptionProfile}>
                    <div className={style.status}>
                        <b>Status</b>: <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                    {editMode
                        ? <ProfileDataReduxForm onSubmit={onSubmit} profile={props.profile} initialValues={props.profile}/>
                        : <ProfileData profile={props.profile} goToEditMode={() => setEditMode(true)} isOwner={props.isOwner}/>
                    }
                </div>
            </div>
        </div>
    )
}


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return(
        <div>
            {
                isOwner ? <div><button onClick={goToEditMode}>edit</button></div> : null
            }

            <div>
                <b>fullName</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking For a Job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
               <div>
                   <b>My professional skills</b>: {profile.lookingForAJobDescription}
               </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return(
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}


export default ProfileInfo;