import { useState } from 'react'
import React from 'react'

export function LoginForm(props){



    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"/><br/><br/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password"/><br/><br/>
                <br />
                <br />
                <button type="submit">Log In</button>
            </form>
        </div>

    );
}

