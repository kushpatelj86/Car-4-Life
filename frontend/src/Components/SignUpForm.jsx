import { useState } from 'react'
import React from 'react'
import "./Styles/SignUpForm.css"

export function SignUpForm({onSubmit,handleHasAccount,submitData}){

    const healthIssues = ['Diabetes', 'Heart Desiese', 'Cancer', 'Asthma',
        'Arhirtus','High Cholesterol','Obesity','Rashes','Acne','Dermatitis',
    'High Blood Pressure','Stress','Back Pain','None']

    const neurodivergence = ['Autism', 'ADHD', 'Bipolar', 'Asthma',
        'OCD','Depression','Anxiety','PTSD','Down Syndromw','Nuerotypical']


    const drughistory = ['Smoker','Alcoholic','Drug Abuse','Vaper', 'None']

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

                <label htmlFor="dietary-choice">Dietary Choice</label>
                <input type="text" id="dietary-choice" name="dietary-choice"/><br/><br/>

                <label htmlFor="height">Height</label>
                <input type="number" id="height" name="height"/><br/><br/>

                <label htmlFor="weight">Weight</label>
                <input type="number" id="weight" name="weight"/><br/><br/>

                <label htmlFor="religion">Religion</label>
                <input type="text" id="religion" name="religion"/><br/><br/>

                <label htmlFor="goal">Goal</label>
                <select id="goal" name="goal">
                    <option value="lose">Lose</option>
                    <option value="maintain">Maintain</option>
                    <option value="gain">Gain</option>
                </select>
                <br/><br/>

                <label htmlFor="activity-level">Activity Level</label>
                <select id="activity-level" name="activity-level">
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>
                <br/><br/>
                <label htmlFor="health-issues">Health Issues</label>
                {
                healthIssues.map((val)=>
                (
                     
                    <div key={val}>
                        <input type="checkbox" id={`health-issues-${val.replace(/ /g,"_")}`} name="health-issues" value={val} />
                        <label htmlFor="health-issues">{val}</label>
                    </div>
                ))}
                
                
                <br/><br/>

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

