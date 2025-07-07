import { useState } from 'react'
import React from 'react'
import {SignUpForm} from '../Components/SignUpForm.jsx'
import { Navigate } from 'react-router-dom'
import axios from 'axios';








export function SignUp(){

    const [hasAccount, setHasAccount] = useState(false);
    const [values,setValues] = useState(
       { 
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        dietarychoice: '',
        height: '',
        weight: '',
        relgion: '',
        goal: '',
        activitylevel: '',
        healthissues: [],
        neurodivergence: [],
        drughistory: [],
        role: '',

    }
    )
    function submitData(e)
    {
        e.preventDefault();
        axios.post('/user')
    }

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