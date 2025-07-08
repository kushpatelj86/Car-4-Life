import { useState } from 'react'
import React from 'react'
import "./Styles/SignUpForm.css"

export function SignUpForm({onSubmit,handleHasAccount,submitData}){



    return (
        <div>
            <form onSubmit={onSubmit} id='signup-form' action="POST">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name"/><br/><br/>
                
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name"/><br/><br/>
            
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"/><br/><br/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"/><br/><br/>


                <label htmlFor="phone-number">Phone Number</label>
                <input type="tel" id="phone-number" name="phone-number"/><br/><br/>

                

               


               
                <label htmlFor="role">Role</label>
                <select id="role" name="role">
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                    <option value="admin">Admin</option>
                </select>


                <br/><br/>



                <button type="submit">Create Profile</button>
            </form>
        </div>

    );
}

