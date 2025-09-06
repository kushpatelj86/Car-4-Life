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





export function OwnerProfile(){

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
          email: user.email,
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

            <h1>Owner profile</h1>





            <div className="profile-header">
                <div className="profile-image">
                    <img src={profileImage} id="profile-pic"/>
                    <label htmlFor="input-file">Update Profile Photo</label>
                    <input type="file" accept="image/jpg, image/png, image/jpeg" id="profile-photo-input-file" onChange={updatePhoto}></input>
                </div>
            </div>


            <div className="profile-information">
                <ul>
                    <li>Name: {user_data.fname} {user_data.lname}</li>
                    <li>Username: {currentUser.username}</li>
                    <li>User Id: {user_data.uid}</li>
                    <li>Phone: </li>
                    <li>Email: {user_data.email} </li>
                    <li>Address: </li>
                    <li>Access Level: </li>
                    <li>Role: {user_data.role}</li>

                </ul>
            </div>


           <div id="profile-change">
  {changeProfile ? (
    <>
        <h1>Update Information</h1>
 
      <UpdateList handleChangeAcount={handleChangeProfile} user_data={user_data} updateUser={updateUser} />
      <h1>Create Information</h1>
      <CreateList handleChangeAcount={handleChangeProfile} user_data={user_data} updateUser={updateUser} />
    </>
  ) : (
    <button id="profile-change-button" onClick={handleChangeProfile}>Update Profile</button>
  )}
</div>
        </div>
    );


}