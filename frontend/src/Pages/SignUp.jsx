import { useState } from 'react'
import React from 'react'
import {SignUpForm} from '../Components/SignUpForm.jsx'
import { Navigate } from 'react-router-dom'
import axios from 'axios';








export function SignUp(){

    const [hasAccount, setHasAccount] = useState(false);
    const [values,setValues] = useState(
       { 
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        phone_number: '',
        email: '',
        role: '',

    }
    )

    const handleValsChange = e => {

        const id = e.target.id;



        setValues({...values, [id] : e.target.value});

    
    };

    

    function handleHasAccount(val){
        setHasAccount(val);
    }

    function handleSignUpSubmit(e) {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/user',values)
        .then((res) =>{
            console.log(res);
            handleHasAccount(true);
        })
        .catch((err) => {
            console.log(err)
            alert(err)
        }  
        )

        console.log("Signing Up...");
        alert("Signing Up...");
}

    
    if(hasAccount === true)
    {
        return <Navigate to="/home" replace />;

    }


   

    return (
        <div>
            <SignUpForm handleSignUpSubmit={handleSignUpSubmit} handleValsChange={handleValsChange}/>
            
        </div>
    );


}