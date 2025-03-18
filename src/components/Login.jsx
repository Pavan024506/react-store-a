import React from 'react';
import "./Login.css";


export default function Login(){
    return(
        <div className='login-container'>
            <div className='login-title'><h2>Login</h2></div>
            <div className='login-input'>
            <p><input type="text" placeholder="Enter username"></input></p>
            <p><input type="password" placeholder="Enter password"></input></p>
            </div>
            <div className='login-button'>
            <button>Login</button>
            </div>
            <div>
                <p>Don't have an account?</p> 
                <button><a href="/register" style={{ color: "blue", textDecoration: "none" }}>Register</a></button>
                
            </div>
        </div>

    )
}