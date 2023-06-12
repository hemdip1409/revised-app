import React from "react";
import './Login.css'

export default function Login()
{
    return(
    <>
   <div id="login_form">
    <h1>Sign in</h1>
    <input type="text" placeholder="Email"></input><br></br>
    <input type="password" placeholder="Password"></input><br></br>
    <button>Log in</button>
   </div>
    </>
    )
}