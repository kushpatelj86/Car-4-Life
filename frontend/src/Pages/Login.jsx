import { useState } from 'react'
import React from 'react'
import {LoginForm} from '../Components/LoginForm.jsx'
import { Navigate } from 'react-router-dom'




export function Login(){

    const [hasAccount, setHasAccount] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(null);


    function handleHasAccount(val){
        setHasAccount(val);
    }

    function handleIsLoggedIn(val){
        setIsLoggedIn(val);
    }

    function handleLoginSubmit(e) {
        e.preventDefault();
        console.log("Logging in...");
    }

    
        if(hasAccount === false)
        {
            return <Navigate to="/sign-up" replace />;

        }

        if(isLoggedIn == true)
        {
            return <Navigate to="/home" replace />;

        }
    


    return (
        <div >
            <LoginForm handleHasAccount={handleHasAccount } handleIsLoggedIn={handleIsLoggedIn} onSubmit={handleLoginSubmit}/>
        </div>

    );
}

