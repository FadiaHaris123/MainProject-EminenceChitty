import React, { useEffect, useState, useReducer } from "react"
import { Link } from "react-router-dom"
import Image from '../assets/images/login.jpg'
import '../App.css'

import classes from './Login.module.css';
import foreman from "../components/foreman/foreman"

const Auth = (props) => {


  let [authMode, setAuthMode] = useState("signin")
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  const emailInitialState = {
    enteredEmail: '',
    emailIsValid: null
  };

  const passwordInitialState = {
    enteredPassword: '',
    passwordIsValid: null
  };


  const emailHandler = (prevState, action) => {

    if (action.type === 'emailchange') {
      return {
        enteredEmail: action.payload,
        emailIsValid: action.payload.includes('@')
      }
    }
    if (action.type === 'emailvalidity') {
      return {
        enteredEmail: prevState.enteredEmail,
        emailIsValid: prevState.enteredEmail.includes('@')
      }
    }
    return {
      enteredEmail: '',
      emailIsValid: false
    }
  };

  const passwordHandler = (prevState, action) => {

    if (action.type === 'passwordchange') {
      return {
        enteredPassword: action.payload,
        passwordIsValid: action.payload.trim().length > 6
      }
    }
    if (action.type === 'passwordvalidity') {
      return {
        enteredPassword: prevState.enteredPassword,
        passwordIsValid: prevState.enteredPassword.trim().length > 6
      }
    }
    return {
      enteredPassword: '',
      passwordIsValid: false
    }
  };


  const [emailCurrentState, dispatchEmail] = useReducer(emailHandler, emailInitialState);
  const [passwordCurrentState, dispatchPassword] = useReducer(passwordHandler, passwordInitialState);

  const [formIsValid, setFormIsValid] = useState(false);


  ///************ useEffect returning cleanup function ***************///
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("validity check");

      setFormIsValid(
        emailCurrentState.enteredEmail.includes('@') && passwordCurrentState.enteredPassword.trim().length > 6
      );
    }, 500);
    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };

  }, [emailCurrentState, passwordCurrentState]);


  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'emailchange', payload: event.target.value })
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'emailvalidity' })
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'passwordchange', payload: event.target.value })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'passwordvalidity' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailCurrentState.enteredEmail, passwordCurrentState.enteredPassword);
    // if(emailCurrentState.enteredEmail == "admin@exp"){
    //   <Link to = "/admin"></Link>
    // }
  };
  // const login = ()
  if (authMode === "signin") {
    return (
      <header style={HeaderStyle}>
        <div className="overlays">
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={submitHandler}>
            <div className="Auth-form-content" >
              <h3 className="Auth-form-title">Log In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <Link to="/register">
                  <span className="link-primary" onClick={changeAuthMode}>
                    Sign Up
                  </span>
                </Link>
              </div>
              <div className="form-group mt-3" >
                <div className={`${classes.control} ${emailCurrentState.emailIsValid === false ? classes.invalid : ''
                  }`}>
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    value={emailCurrentState.enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <div className={`${classes.control} ${passwordCurrentState.passwordIsValid === false ? classes.invalid : ''
                  }`}>
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    value={passwordCurrentState.enteredPassword}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                  />
                </div>
              </div>
              <Link to="/admin">
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" disabled={!formIsValid}>
                    Submit
                  </button>
                </div>
              </Link>
              {/* <Link to = "/forgetpassword"> */}
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
              {/* </Link> */}
            </div>
          </form>
        </div>
        </div>
      </header>
    )
  }

  // return (
  //   <header style={HeaderStyle}>
  //     <registrationForm/>
  //   </header>
  // )
}

const HeaderStyle = {
  width: "210vh",
  height: "100vh",
  background: `url(${Image})`,
  backgroundPosition: 'fixed',
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundAttachment: "fixed"
}

export default Auth;

