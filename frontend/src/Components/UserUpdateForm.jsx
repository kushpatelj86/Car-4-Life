import { useState } from 'react'
import React from 'react'
import "./Styles/PatientProfileForm.css"


/*

 const healthIssues = ['Diabetes', 'Heart Desiese', 'Cancer', 'Asthma',
        'Arhirtus','High Cholesterol','Obesity','Rashes','Acne','Dermatitis',
    'High Blood Pressure','Stress','Back Pain','None']

    const neurodivergence = ['Autism', 'ADHD', 'Bipolar', 'Asthma',
        'OCD','Depression','Anxiety','PTSD','Down Syndromw','Nuerotypical']


    const drughistory = ['Smoker','Alcoholic','Drug Abuse','Vaper', 'None']

<label htmlFor="health-issues">Health Issues</label>
                {
                healthIssues.map((val)=>
                (
                     
                    <div key={val}>
                        <input type="checkbox" id={`health-issues-${val.replace(/ /g,"_")}`} name="health-issues" value={val} />
                        <label htmlFor="health-issues">{val}</label>
                    </div>
                ))}



 <label htmlFor="neurodivergence">Neurodivergence</label>
                {neurodivergence.map((val)=>
                (
                    
                    <div key={val}>
                        <input type="checkbox" id={`neurodivergence-${val.replace(/ /g,"_")}`} name="neurodivergence" value={val} />
                        <label htmlFor="neurodivergence">{val}</label>
                    </div>

                ))}


                <label htmlFor="drug-history">Drug History</label>
                {drughistory.map((val)=>
                (
                    <div key={val}>
                        <input type="checkbox" id={`drug-history-${val.replace(/ /g,"_")}`} name="drug-history" value={val} />
                        <label htmlFor="drug-history">{val}</label>
                        </div>
  
                ))}


*/
export function UserUpdateForm({ values, handleValsChange, handlePatientSubmit }) {
    return (
        <form onSubmit={handlePatientSubmit} id='patient-profile-form'>
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first_name"  onChange={handleValsChange} /><br/><br/>
            
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name"  onChange={handleValsChange} /><br/><br/>

            <label htmlFor="username">Username</label>
            <input type="text" id="username"  onChange={handleValsChange} /><br/><br/>

            <label htmlFor="uid">User Id</label>
            <input type="number" id="uid"  onChange={handleValsChange} /><br/><br/>

            <label htmlFor="phone_number">Phone Number</label>
            <input type="tel" id="phone_number"  onChange={handleValsChange} /><br/><br/>
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  onChange={handleValsChange} /><br/><br/>

            <button type="submit">Update Profile</button>
        </form>
    );
}
