import { useState } from 'react'
import React from 'react'
import {LoginForm} from '../Components/LoginForm'
import { Navigate } from 'react-router-dom'




export function Login(){

    const [hasAccount, setHasAccount] = useState(true);


    function handleHasAccount(e){
        e.preventDefault();
        setHasAccount(false);

    }
    
        if(!hasAccount)
        {
            return <Navigate to="/sign-up" replace />;

        }
    


    return (
        <div>
            <LoginForm handleHasAccount={handleHasAccount} />

        </div>

    );
}

