import { useState } from 'react'
import React from 'react'
import {LoginForm} from '../Components/LoginForm.jsx'
import { Navigate } from 'react-router-dom'
import axios from 'axios';




export function Login(){

    const [hasAccount, setHasAccount] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const [values,setValues] = useState(
           { 
            
            username: '',
            password: ''
        }
    )

    const handleValsChange = e => {

        const id = e.target.id;



        setValues({...values, [id] : e.target.value});

    
    };


    function handleHasAccount(val){
        setHasAccount(val);
    }

    function handleIsLoggedIn(val){
        setIsLoggedIn(val);
    }

    function handleLoginSubmit(e) {
        e.preventDefault();
        console.log("Logging in...");

        alert(values.username)


        axios.post('http://localhost:8000/user/login',values)
        .then((res) =>{

            if(res.data.success)
            {
                alert(res.data.success)
                localStorage.setItem("currentUser", JSON.stringify({
                username: values.username,
                email: values.email,
                role: values.role
                }));    

                handleIsLoggedIn(true)
            }
            
            

        })
        .catch((err) => {
            console.log(err)
            alert(err)
        }  
        )

        console.log("Logging Up...");
        alert("Logging Up...");
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
            <LoginForm handleHasAccount={handleHasAccount } onSubmit={handleLoginSubmit} handleValsChange={handleValsChange}/>
        </div>

    );
}

