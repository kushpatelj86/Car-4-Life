
import { useState } from 'react'

import React from 'react'
import {UserUpdateForm} from './UserUpdateForm.jsx'
import {HealthIssueForm} from '../Components/HealthIssueForm.jsx'
import {OwnerProfileUpdateForm} from '../Components/OwnerProfileUpdateForm.jsx'
import { getUser, updateUser } from "../api/user.js";

import { Navigate } from 'react-router-dom'
import axios from 'axios';
import { PatientProfileUpdateForm } from '../Components/PatientProfileUpdateForm.jsx'

export function UpdateList(props){
    const [user_values, setUserValues] = useState();
    const [userId, setUserId] = useState(Number(props.user_data.uid));

    const [profile_values, setProfileValues] = useState();


    const handleValsChange = e => {
        const id = e.target.id;
        setUserValues({...user_values, [id]: e.target.value});
    };

    const handleUserSubmit = async e => {
        e.preventDefault();
        console.log("user_values ",userId);
        
        let data = await updateUser(userId, user_values);
    };


    


    return (
        <ul>
            <li>
                <UserUpdateForm 
                    user_values={user_values} 
                    handleValsChange={handleValsChange} 
                    handleUserSubmit={handleUserSubmit} 
                />
            </li>

            <li><OwnerProfileUpdateForm /></li>

           
        </ul>
    );
}