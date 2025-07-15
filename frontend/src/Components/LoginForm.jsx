import { useState } from 'react'
import React from 'react'
import "./Styles/LoginForm.css"

export function LoginForm({onSubmit,handleHasAccount,handleValsChange}){

    

    return (
        <div>
            <form onSubmit={onSubmit} action="GET" id='login-form'>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" onChange={handleValsChange}/><br/><br/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" onChange={handleValsChange}/><br/><br/>
                <br />
                <br />
                <button type="submit">Log In</button>
                <div id='registration-link'>
                    <p>Don't have an account register here </p>
                    <button onClick={() => handleHasAccount(false) } type="submit">Register Here</button>
                </div>
            </form>
        </div>

    );
}

