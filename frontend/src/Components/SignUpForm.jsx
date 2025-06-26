import { useState } from 'react'
import React from 'react'

export function SignUpForm({onSubmit,handleHasAccount}){

    

    return (
        <div>
            <form onSubmit={onSubmit} id='signup-form'>
               <label htmlFor="full-name">Name</label>
                <input type="text" id="full-name" name="full-name"/><br/><br/>
                
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
                <input type="text" id="goal" name="goal"/><br/><br/>

                <label htmlFor="activity-level">Activity Level</label>
                <input type="text" id="activity-level" name="activity-level"/><br/><br/>

                <label htmlFor="health-issues">Health Issues</label>
                <input type="text" id="health-issues" name="health-issues"/><br/><br/>

                <label htmlFor="neurodivergence">Neurodivergence</label>
                <input type="text" id="neurodivergence" name="neurodivergence"/><br/><br/>

                <label htmlFor="drug-history">Drug History</label>
                <input type="text" id="drug-history" name="drug-history"/><br/><br/>

                <button type="button" onClick={() => handleHasAccount(true)}>Create Profile</button>
            </form>
        </div>

    );
}

