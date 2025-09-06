import { useState } from 'react'
import React from 'react'
import "./Styles/PatientProfileForm.css"


export function OwnerProfileUpdateForm({ user_values, handleValsChange, handleUserSubmit }) {
    return (
        <form onSubmit={handleUserSubmit} id='patient-profile-form'>

            <label htmlFor="address">Address</label>
            <input 
                type="text" 
                id="address" 
                onChange={handleValsChange} 
                required
            /><br/><br/>

            <label htmlFor="license_number">License Number</label>
            <input 
                type="text" 
                id="license_number" 
                onChange={handleValsChange} 
            /><br/><br/>

            <label htmlFor="vehicle_type">Vehicle Type</label>
            <input 
                type="text" 
                id="vehicle_type" 
                onChange={handleValsChange} 
            /><br/><br/>

            <label htmlFor="experience_years">Years of Experience</label>
            <input 
                type="number" 
                id="experience_years" 
                onChange={handleValsChange} 
                min="0"
            /><br/><br/>

            <label htmlFor="access_level">Access Level</label>
            <select 
                id="access_level" 
                
                onChange={handleValsChange}
            >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select><br/><br/>

            <label htmlFor="status">Status</label>
            <select 
                id="status" 
                onChange={handleValsChange}
            >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select><br/><br/>

            <button type="submit">Save Driver Profile</button>
        </form>
    );
}
