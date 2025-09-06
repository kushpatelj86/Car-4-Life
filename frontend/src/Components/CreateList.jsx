
import { useState } from 'react'

import React from 'react'
import {UserUpdateForm} from './UserUpdateForm.jsx'
import {HealthIssueForm} from '../Components/HealthIssueForm.jsx'
import {NuerodivergenceForm} from '../Components/NuerodivergenceForm.jsx'
import { getUser, updateUser, createOwnerProfile } from "../api/user.js";

import { Navigate } from 'react-router-dom'
import axios from 'axios';
import { OwnerProfileCreateForm } from './OwnerProfileCreateForm.jsx'

export function CreateList(props){
    const [owner_values, setOwnerValues] = useState();
    const [userId, setUserId] = useState(Number(props.user_data.uid));



    const handleValsChange = e => {
        const id = e.target.id;
        setOwnerValues({...owner_values, [id]: e.target.value});
    };

   const handleOwnerProfileSubmit = async e => {
        e.preventDefault();
        console.log("user_values ",userId);
        
        let data = await createOwnerProfile(userId, owner_values);
    };

    return (
        <ul>
            
            <li><OwnerProfileCreateForm owner_values={ owner_values}handleValsChange={handleValsChange} handleOwnerProfileSubmit={handleOwnerProfileSubmit}/></li>

            
        </ul>
    );
}