import { useState } from 'react'
import React from 'react'
import "./Styles/SignUpForm.css"

export function SignUpForm({handleSignUpSubmit,handleValsChange}){



    return (
        <div>
            <form  id='signup-form' action="POST" onSubmit={handleSignUpSubmit}>
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" name="firstname" onChange={handleValsChange}/><br/><br/>
                
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" onChange={handleValsChange}/><br/><br/>
            
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" onChange={handleValsChange}/><br/><br/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleValsChange}/><br/><br/>


                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleValsChange}/><br/><br/>

                


                <label htmlFor="phonenumber">Phone Number</label>
                <input type="tel" id="phonenumber" name="phonenumber" onChange={handleValsChange}/><br/><br/>

                

               


               
                <label htmlFor="role">Role</label>
                <select id="role" name="role" onChange={handleValsChange}>
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

