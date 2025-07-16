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

export function PatientProfileForm(props){



    return (
        <div>
            <form onSubmit={props.onSubmit} id='patient-profile-form'>

                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name"/><br/><br/>
                
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name"/><br/><br/>
            
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"/><br/><br/>

                <label htmlFor="user_id">User Id</label>
                <input type="number" id="user_id" name="user_id"/><br/><br/>

                <label htmlFor="phone_number">Phone Number</label>
                <input type="tel" id="phone_number" name="phone_number"/><br/><br/>
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"/><br/><br/>
                
                
                
                
                <br/><br/>

                <label htmlFor="dietary_choice">Dietary Choice</label>
                <input type="text" id="dietary_choice" name="dietary_choice"/><br/><br/>

                <label htmlFor="height">Height</label>
                <input type="number" id="height" name="height"/><br/><br/>

                <label htmlFor="weight">Weight</label>
                <input type="number" id="weight" name="weight"/><br/><br/>

                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age"/><br/><br/>

                <label htmlFor="religion">Religion</label>
                <input type="text" id="religion" name="religion"/><br/><br/>

                <label htmlFor="goal">Goal</label>
                <select id="goal" name="goal">
                    <option value="lose">Lose</option>
                    <option value="maintain">Maintain</option>
                    <option value="gain">Gain</option>
                </select>

                <label htmlFor="activity_level">Activity Level</label>
                 <select id="activity_level" name="activity_level">
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>

                
                <button type="submit" onClick={props.handleChangeAcount}>Update Profile</button>
            </form>
        </div>
    );
}
