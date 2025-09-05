
import { useState } from 'react'

import React from 'react'
import {UserUpdateForm} from './UserUpdateForm.jsx'
import {HealthIssueForm} from '../Components/HealthIssueForm.jsx'
import {NuerodivergenceForm} from '../Components/NuerodivergenceForm.jsx'
import { getUser, updateUser } from "../api/user.js";

import { Navigate } from 'react-router-dom'
import axios from 'axios';
import { PatientProfileCreateForm } from '../Components/PatientProfileCreateForm.jsx'

export function CreateList(props){
    const [values, setValues] = useState();
    const [userId, setUserId] = useState(Number(props.user_data.uid));



    const handleValsChange = e => {
        const id = e.target.id;
        setValues({...values, [id]: e.target.value});
    };

    const handlePatientSubmit = async e => {
        e.preventDefault();
        console.log("Values ",userId);
        
        let data = await updateUser(userId, values);
    };


    return (
        <ul>
            
            <li><PatientProfileCreateForm/></li>

            
        </ul>
    );
}