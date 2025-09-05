import { useState } from 'react'
import React from 'react'
import "./Styles/PatientProfileForm.css"

export function PatientProfileCreateForm(props){
    return (
        <div>
            <form onSubmit={props.onSubmit} id='patient-profile-form'>

                <label htmlFor="dietary-choice">Dietary Choice</label>
                <input type="text" id="dietary-choice" name="dietary-choice" required/><br/><br/>

                <label htmlFor="health-issue">Health Issue</label>
                <input type="text" id="health-issue" name="health-issue" required/><br/><br/>

                <label htmlFor="height">Height (cm)</label>
                <input type="number" id="height" name="height" step="0.01" min="0" max="999.99" required/><br/><br/>

                <label htmlFor="weight">Weight (kg)</label>
                <input type="number" id="weight" name="weight" step="0.01" min="0" max="999.99" required/><br/><br/>

                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" required/><br/><br/>

                <label htmlFor="religion">Religion</label>
                <input type="text" id="religion" name="religion" required/><br/><br/>

                <label htmlFor="goal">Goal:</label>
                <select id="goal" name="goal" required>
                    <option value="">Select Goal</option>
                    <option value="Lose">Lose</option>
                    <option value="Maintain">Maintain</option>
                    <option value="Gain">Gain</option>
                </select><br/><br/>

                <label htmlFor="activity-level">Activity Level:</label>
                <select id="activity-level" name="activity-level" required>
                    <option value="">Select Activity Level</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                </select><br/><br/>

                <button type="submit" onClick={props.handleChangeAcount}>Add Health Issue</button>
            </form>

        </div>
    );
}
