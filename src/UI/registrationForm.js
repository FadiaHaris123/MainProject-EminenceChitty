import React, { useState } from "react"
import { Link } from "react-router-dom"

import Image from '../assets/images/joinus.jpg'
const Auth = (props) => {
let [authMode, setAuthMode] = useState("signup")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signup" ? "signin" : "signup")
  }
  
  if (authMode === "signup") {
    return (
      <header style={ HeaderStyle }>
      <div className="overlays">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <Link to = "/login">
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
              </Link>
            </div>
            <div className="form-group mt-3">
              <label>First Name</label>
              <input
                type="name"
                className="form-control mt-1"
                placeholder="e.g Jane "
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input
                type="name"
                className="form-control mt-1"
                placeholder="e.g Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Mobile No.</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Mobile No."
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
      </header>
    )
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <Link to = "/register">
            <span className="link-primary" onClick={changeAuthMode}>
              Sign Up
            </span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
  
}



const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${Image})`,
  backgroundPosition:'fixed',
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundAttachment: "fixed"
}

export default Auth;






