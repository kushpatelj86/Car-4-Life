import React, { useState } from 'react';
import { SignUpForm } from '../Components/SignUpForm.jsx';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export function SignUp() {
    const [hasAccount, setHasAccount] = useState(false);
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email: '',
        role: '', 
    });

    const handleValsChange = (e) => {
        const { id, value } = e.target;
        setValues({ ...values, [id]: value });
    };

    const handleHasAccount = (val) => setHasAccount(val);

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/user/signup', values)
            .then((res) => {
                if (res.data.success) {
                    console.log(res.data);
                    localStorage.setItem("currentUser", JSON.stringify({
                        username: values.username,
                        email: values.email,
                        role: values.role
                    }));
                    handleHasAccount(true);
                }
            })
            .catch((err) => {
                console.error(err);
                alert('Error signing up: ' + err);
            });
    };

    if (hasAccount) return <Navigate to="/home" replace />;

    return (
        <div>
            <SignUpForm 
                handleSignUpSubmit={handleSignUpSubmit} 
                handleValsChange={handleValsChange} 
            />
        </div>
    );
}
