import { useState } from "react";
import profileImage from "./Images/defaultprofileicon.png"
import './Styles/Profile.css'
import {UpdateList} from '../Components/UpdateList.jsx'

function updatePhoto(){
    let profilePic = document.getElementById('profile-pic');
    let inputFile = document.getElementById('profile-photo-input-file');

    profilePic.src=URL.createObjectURL(inputFile.files[0])
}





export function Profile(){

    const [changeProfile, setChangeProfile] = useState(false);

    const [currentUser, setCurrentUser] = useState([]);




    function handleCurrentUser(event){
            event.preventDefault();
            setCurrentUser(localStorage.getItem("currentUser"));
        }





      const [data, setData] = useState([]);


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





            <div className="profile-header">
                <div className="profile-image">
                    <img src={profileImage} id="profile-pic"/>
                    <label htmlFor="input-file">Update Profile Photo</label>
                    <input type="file" accept="image/jpg, image/png, image/jpeg" id="profile-photo-input-file" onChange={updatePhoto}></input>
                </div>
            </div>


            <div className="profile-information">
                <ul>
                    <li>Name: </li>
                    <li>Username: </li>
                    <li>Dietary Choice: </li>
                    <li>Height: </li>
                    <li>Weight: </li>
                    <li>Age: </li>
                    <li>Religion: </li>
                    <li>Goal: </li>
                    <li>Activity Level: </li>
                    <li>Health Issues: </li>
                    <li>Nuerodivergence: </li>
                    <li>Drug History: </li>
                    <li>Role: </li>

                </ul>
            </div>


            <div id="profile-change">
                {changeProfile ? 
                <UpdateList handleChangeAcount={handleChangeProfile} />: <button id="profile-change-button" onClick={handleChangeProfile}>Update Profile</button>}
            </div>
        </div>
    );


}