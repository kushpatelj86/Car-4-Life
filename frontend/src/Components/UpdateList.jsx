
import { useState } from 'react'

import React from 'react'
import {UserForm} from '../Components/UserForm.jsx'
import {HealthIssueForm} from '../Components/HealthIssueForm.jsx'
import {PatientProfileForm} from '../Components/PatientProfileForm.jsx'
import {NuerodivergenceForm} from '../Components/NuerodivergenceForm.jsx'
import { getUser, updateUser } from "../api/user.js";

import { Navigate } from 'react-router-dom'
import axios from 'axios';

export function UpdateList(props){
    const [values, setValues] = useState(props.data);



    const handleValsChange = e => {
        const id = e.target.id;
        setValues({...values, [id]: e.target.value});
    };

    const handlePatientSubmit = async e => {
        e.preventDefault();
        console.log("Values ", values.uid);
        
        let data = await updateUser(values.uid, values);
    };

    return (
        <ul>
            <li>
                <PatientProfileForm 
                    values={values} 
                    handleValsChange={handleValsChange} 
                    handlePatientSubmit={handlePatientSubmit} 
                />
            </li>
            <li><UserForm handleValsChange={handleValsChange} /></li>
            <li><HealthIssueForm/></li>
            <li><NuerodivergenceForm/></li>
        </ul>
    );
}