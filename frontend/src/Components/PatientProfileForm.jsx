import { useState } from 'react'
import React from 'react'
import "./Styles/PatientProfileForm.css"

export function PatientProfileForm(props){
    return (
        <div>
            <form onSubmit={props.onSubmit} id='patient-profile-form'>

                <label htmlFor="dietary-choice">Dietary Choice</label>
                <input type="text" id="health-issue" name="health-issue"/><br/><br/>

                <label for="height">Height (cm)</label>
                <input type="number" id="height" name="height" step="0.01" min="0" max="999.99" required/>

                <label for="weight">Weight (kg)</label>
                <input type="number" id="weight" name="weight" step="0.01" min="0" max="999.99" required/>

                
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age"/><br/><br/>

               
                <label htmlFor="religion">Religion</label>
                <input type="text" id="religion" name="religion"/><br/><br/>

                <label for="goal">Goal:</label>
                <select id="goal" name="goal">
                    <option value="Lose">Lose</option>
                    <option value="Maintain">Maintain</option>
                    <option value="Gain">Gain</option>
                </select>

                <label for="activity-level">Activity Level:</label>
                <select id="activity-level" name="activity-level">
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                </select>

                <button type="submit" onClick={props.handleChangeAcount}>Add Health Issue</button>
            </form>
        </div>
    );
}
