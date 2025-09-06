import { useState } from 'react'
import React from 'react'
import "./Styles/SignUpForm.css"

export function SignUpForm({ handleSignUpSubmit, handleValsChange }) {
    return (
        <div>
            <form id='signup-form' action="POST" onSubmit={handleSignUpSubmit}>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name" onChange={handleValsChange} /><br /><br />

                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name" onChange={handleValsChange} /><br /><br />

                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" onChange={handleValsChange} /><br /><br />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleValsChange} /><br /><br />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleValsChange} /><br /><br />

                <label htmlFor="phone_number">Phone Number</label>
                <input type="tel" id="phone_number" name="phone_number" onChange={handleValsChange} /><br /><br />

                <label htmlFor="role">Role</label>
                <select id="role" name="role" onChange={handleValsChange}>
                    <option value="OWNER">Owner</option>
                    <option value="MECHANIC">Mechanic</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FLEET_MANAGER">Fleet Manager</option>
                </select>

                <br /><br />

                <button type="submit">Create Profile</button>
            </form>
        </div>
    );
}
