import { useState } from 'react'
import React from 'react'
import {SignUpForm} from '../Components/SignUpForm.jsx'
import { Navigate } from 'react-router-dom'



export function SignUp(){

    const [hasAccount, setHasAccount] = useState(false);
    
    

    function handleHasAccount(val){
        setHasAccount(val);
    }

    function handleSignUpSubmit(e) {
  e.preventDefault();
  console.log("Signing Up...");
}

    
    if(hasAccount === true)
    {
        return <Navigate to="/home" replace />;

    }


   

    return (
        <div>
            <SignUpForm  handleHasAccount={handleHasAccount } onSubmit={handleSignUpSubmit}/>
            
        </div>
    );


}