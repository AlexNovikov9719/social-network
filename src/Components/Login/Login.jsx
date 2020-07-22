import React from "react";
import style from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {createField, InputType} from "../Common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return(
        <div className={style.content}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);

let maxLength40 = maxLengthCreator(40);

let LoginForm = (props) => {
    return(
      <form onSubmit={props.handleSubmit} className={style.form}>
          <div className={style.loginInput}>
              <div><p>Email</p></div>
              {createField('email', InputType, 'Email', [required, maxLength40], '', 'input')}
          </div>
          <div className={style.passwordInput}>
              <div><p>Password</p></div>
              {createField('password', InputType, 'Password', [required, maxLength40], 'password', 'input', '' )}
          </div>
<div className={style.formCaptcha}>
    {props.captchaUrl && <img src={props.captchaUrl} className={style.captcha}/>}
    {props.captchaUrl && createField('captcha', 'Input', 'Symbols from image', [required])}
</div>


          {props.error && <div className={style.formSummaryError}>
              {props.error}
          </div>}
          <div className={style.rememberMe}>
              {createField('rememberMe', 'Input', '', '', 'checkbox', 'input', 'remember me' )}
          </div>
          <div className={style.button}><button>Login</button></div>
      </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

