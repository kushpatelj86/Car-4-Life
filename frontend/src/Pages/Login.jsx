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


        axios.get('http://127.0.0.1:8000/user',values)
        .then((res) =>{

            if(res.data.success)
            {
                console.log(res.data);
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
            <LoginForm handleHasAccount={handleHasAccount } handleIsLoggedIn={handleIsLoggedIn} onSubmit={handleLoginSubmit}/>
        </div>

    );
}

