import { useState } from 'react'
import React from 'react'
import "./Styles/HealthIssueForm.css"

export function HealthIssueForm(props){
    return (
        <div>
            <form onSubmit={props.onSubmit} id='health-issue-form'>

                <label htmlFor="health-issue">Health Issue</label>
                <input type="text" id="health-issue" name="health-issue"/><br/><br/>

                 <label htmlFor="duration">Duration</label>
                <input type="number" id="duration" name="duration"/><br/><br/>
                
                

                <label htmlFor="severity">Severity</label>
                <input type="text" id="severity" name="severity"/><br/><br/>
                
                <label htmlFor="start-date">Start Date</label>
                <input type="date" id="start-date" name="start-date"/><br/><br/>

               
                <label htmlFor="uid">User Id</label>
                <input type="number" id="uid"   /><br/><br/>

                <button type="submit" onClick={props.handleChangeAcount}>Add Health Issue</button>
            </form>
        </div>
    );
}
