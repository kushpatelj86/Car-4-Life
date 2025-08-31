
import { useState } from 'react'

import React from 'react'
import {UserForm} from '../Components/UserForm.jsx'
import {HealthIssueForm} from '../Components/HealthIssueForm.jsx'
import {PatientProfileForm} from '../Components/PatientProfileForm.jsx'
import {NuerodivergenceForm} from '../Components/NuerodivergenceForm.jsx'

import { Navigate } from 'react-router-dom'
import axios from 'axios';

export function UpdateList(props){
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        user_id: '',
        phone_number: '',
        email: ''
    });

    const handleValsChange = e => {
        const id = e.target.id;
        setValues({...values, [id]: e.target.value});
    };

    const handlePatientSubmit = e => {
        e.preventDefault();
        console.log(values);
        axios.post(`http://localhost:8000/update_user/${user_id}`, values)
        .then(res => {
            if (res.data.success) {
            alert(res.data.success);
            } else {
            alert(res.data.message);
            }
        })
        .catch(err => console.log(err));
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