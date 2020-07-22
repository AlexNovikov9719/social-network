import React from "react";
import style from "./FormsControls.module.css";
import {Field} from "redux-form";

export const InputType = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
            <div>
                {props.types === 'input'
                ? <input {...props} {...input}/>
                :<textArea {...props} {...input}/>
                }
            </div>
            {hasError && <span className={style.error}>{meta.error}</span>}
        </div>
    )
}

export const createField = (name, component, placeholder, validate, type, types, text) => {
    return (
        <div>
            <Field name={name} component={component} placeholder={placeholder}
                   validate={validate} type={type} types={types} /> {text}
        </div>
    )
}