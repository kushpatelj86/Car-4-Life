import { useState,useEffect } from "react";
import profileImage from "./Images/defaultprofileicon.png"
import './Styles/Profile.css'
import {UpdateList} from '../Components/UpdateList.jsx'
import {updateUser} from '../api/user.js'
import { getUser } from "../api/user.js";
import {PatientProfileUpdateForm} from '../Components/PatientProfileUpdateForm.jsx'
import {CreateList} from '../Components/CreateList.jsx'

import axios from 'axios';

function updatePhoto(){
    let profilePic = document.getElementById('profile-pic');
    let inputFile = document.getElementById('profile-photo-input-file');

    profilePic.src=URL.createObjectURL(inputFile.files[0])
}





export function ServiceRecords(){

    
    


}