import { useState,useEffect } from "react";
import profileImage from "./Images/defaultprofileicon.png"
import './Styles/Profile.css'
import {UpdateList} from '../Components/UpdateList.jsx'
import {updateUser} from '../api/user.js'
import { getUser } from "../api/user.js";
import {PatientProfileUpdateForm} from '../Components/PatientProfileUpdateForm.jsx'
import { getProfile } from "../api/user.js";
import {CreateList} from '../Components/CreateList.jsx'

import axios from 'axios';

function updatePhoto(){
    let profilePic = document.getElementById('profile-pic');
    let inputFile = document.getElementById('profile-photo-input-file');

    profilePic.src=URL.createObjectURL(inputFile.files[0])
}





export function ServiceRecords(){

    const [changeProfile, setChangeProfile] = useState(false);

    const [currentUser, setCurrentUser] = useState([]);
    const [username, setUsername] = useState([]);

    const [user_data, setUserData] = useState({
        uname : '',
        fname : '',
        lname : '',
        phone : '',
        email : '',
        role : '',
        uid : ''

});


const [profile_data, setProfileData] = useState({
        dietary_choice : '',
        height : '',
        weight : '',
        age : '',
        religion : '',
        goal : '',
        activity_level : '',
        access_level : ''

});
        

    const handleCurrentUserChange = e => {

        const user = JSON.parse(localStorage.getItem("currentUser"));




        setCurrentUser(user);

    
    };

    

     useEffect(() => {
        handleCurrentUserChange(event);
    }, []);



    async function fetchUserData() {
      var user = await getUser(currentUser.username);
      if (user) {
        setUserData({
          fname: user.first_name,
          lname: user.last_name,
          phone: user.phone_number,
          email: user.phone,
          role: user.role,
          uid: Number(user.user_id)
        });
      }
    }




    async function fetchProfileData() {

        if(user_data.uid)
        {
            var profile = await getProfile(user_data.uid);
            if (profile) {
                setProfileData({
                dietary_choice: user.dietary_choice,
                height: user.height,
                weight: user.weight,
                age: user.age,
                religion: user.religion,
                goal: user.goal,
                activity_level : user.activity_level,
                access_level : user.access_level
                });
            }
        }
      
    }


 useEffect(function() {
    if (!currentUser || !currentUser.username) return;

    fetchUserData();
  }, [currentUser]);



  useEffect(function() {
    if (!user_data.uid) return;
    fetchProfileData();
  }, [user_data.uid]);







        function handleValsChange(event){
            event.preventDefault()
        }





    function handleChangeProfile(event){
        event.preventDefault()

        setChangeProfile(!changeProfile);
    }





    return (


        <div id='patient-profile'>

            <h1>User profile</h1>



        </div>
    );


}