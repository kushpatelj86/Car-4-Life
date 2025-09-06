import React from "react";
import "./Styles/PatientProfileForm.css"

export function OwnerProfileCreateForm({ ownerValues, handleValsChange, handleOwnerProfileSubmit }) {
  return (
    <div>
      <form onSubmit={handleOwnerProfileSubmit} id="owner-profile-form">
        
        <label htmlFor="address">Address</label>
        <input 
          type="text" 
          id="address" 
          name="address"
          onChange={handleValsChange} 
          required
        />
        <br /><br />

        <label htmlFor="license_number">License Number</label>
        <input 
          type="text" 
          id="license_number" 
          name="license_number"
          onChange={handleValsChange} 
          required
        />
        <br /><br />

        <label htmlFor="driver_type">Vehicle Type</label>
        <input 
          type="text" 
          id="driver_type" 
          name="driver_type"
          onChange={handleValsChange} 
          required
        />
        <br /><br />

        <label htmlFor="experience_years">Years of Experience</label>
        <input 
          type="number" 
          id="experience_years" 
          name="experience_years"
          onChange={handleValsChange} 
          min="0"
          required
        />
        <br /><br />

       

        <label htmlFor="status">Status</label>
        <select 
          id="status" 
          name="status"
          onChange={handleValsChange}
          required
        >
          <option value="">-- Select Status --</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <br /><br />

        <button type="submit">Save Owner Profile</button>
      </form>
    </div>
  );
}
