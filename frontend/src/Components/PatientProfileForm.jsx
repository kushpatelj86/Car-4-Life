import { useState } from 'react'
import React from 'react'

export function PatientProfileForm(props){
    return (
        <div>
            <form onSubmit={props.onSubmit} id='profile-form'>

                <label htmlFor="full-name">Name</label>
                <input type="text" id="full-name" name="full-name"/><br/><br/>
                

                <label htmlFor="user-id">User Id</label>
                <input type="number" id="user-id" name="full-name"/><br/><br/>
                

                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"/><br/><br/>

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

                <button type="submit" onClick={props.handleChangeAcount}>Update Profile</button>
            </form>
        </div>
    );
}
