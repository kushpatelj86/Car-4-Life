import { useState } from 'react'
import React from 'react'
import {PatientProfileForm} from './PatientProfileForm.jsx'
import {HealthIssueForm} from './HealthIssueForm.jsx'
import {NuerodivergenceForm} from './NuerodivergenceForm.jsx'



export function UpdateList(props){
    return (

        <ul>
            <li><PatientProfileForm/></li>
            <li><HealthIssueForm/></li>
            <li><NuerodivergenceForm/></li>

        </ul>


    );


}


