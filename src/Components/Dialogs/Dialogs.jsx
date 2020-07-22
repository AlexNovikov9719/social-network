import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {InputType} from "../Common/FormsControls/FormsControls";
import {allButton} from "../../hoc/button/Button";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.messages} key={m.id}/>)

    let addNewMessage = (value) => {
        props.addMessage(value.newMessageText)
    }

    return (
        <div className={style.content}>
            <div className={style.dialogs}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
            <div>

            </div>
        </div>
    )
}

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.textArea}>
                <Field name={'newMessageText'} component={InputType} placeholder={'Please add your message'}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                {allButton('Send Message')}
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;