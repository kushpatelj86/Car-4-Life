import { useState } from 'react'
import React from 'react'
import "./Styles/PatientProfileForm.css"





export function UserForm({onSubmit,handleValsChange}){
    


    return (
        <div>
            <form onSubmit={onSubmit}  action="POST" id='patient-profile-form'>

                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name"  onChange={handleValsChange}/><br/><br/>
                
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name"  onChange={handleValsChange}/><br/><br/>
            
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"  onChange={handleValsChange}/><br/><br/>

                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password"  onChange={handleValsChange}/><br/><br/>

                <label htmlFor="user_id">User Id</label>
                <input type="number" id="user_id" name="user_id"  onChange={handleValsChange}/><br/><br/>

                <label htmlFor="phone_number">Phone Number</label>
                <input type="tel" id="phone_number" name="phone_number"  onChange={handleValsChange}/><br/><br/>
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"  onChange={handleValsChange}/><br/><br/>
                
            

                
                <button type="submit" >Update Profile</button>
            </form>
        </div>
    );
}
