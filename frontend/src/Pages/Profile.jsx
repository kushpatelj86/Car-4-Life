import { useState,useEffect } from "react";
import profileImage from "./Images/defaultprofileicon.png"
import './Styles/Profile.css'
import {UpdateList} from '../Components/UpdateList.jsx'
import axios from 'axios';

function updatePhoto(){
    let profilePic = document.getElementById('profile-pic');
    let inputFile = document.getElementById('profile-photo-input-file');

    profilePic.src=URL.createObjectURL(inputFile.files[0])
}





export function Profile(){

    const [changeProfile, setChangeProfile] = useState(false);

    const [currentUser, setCurrentUser] = useState([]);
    const [username, setUsername] = useState([]);

    const [data, setData] = useState({
        uname : '',
        fname : '',
        lname : '',
        phone : '',
        email : '',
        role : '',

});
        

    const handleCurrentUserChange = e => {

        const user = JSON.parse(localStorage.getItem("currentUser"));




        setCurrentUser(user);

    
    };

    

     useEffect(() => {
        handleCurrentUserChange(event);
    }, []);


    useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/user/get_user/${currentUser.username}`)
      .then((res) => {
        if(res.data.user)
        {
           alert(res.data.user.first_name);
           setData({
            fname : res.data.user.first_name,
            lname : res.data.user.last_name,
            phone :  res.data.user.phone_number,
            email :  res.data.user.phone,
            role :  res.data.user.role

           }
        
           )



        }
      })
      .catch((err) => console.log(err));
  }, [currentUser]);

    
        







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
                    <li>Name: {data.fname} {data.lname}</li>
                    <li>Username: {currentUser.username}</li>
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
                    <li>Role: {data.role}</li>

                </ul>
            </div>


            <div id="profile-change">
                {changeProfile ? 
                <UpdateList handleChangeAcount={handleChangeProfile} />: <button id="profile-change-button" onClick={handleChangeProfile}>Update Profile</button>}
            </div>
        </div>
    );


}