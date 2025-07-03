import { useState } from 'react'
import React from 'react'
import "./Styles/HealthIssueForm.css"

export function HealthIssueForm(props){
    return (
        <div>
            <form onSubmit={props.onSubmit} id='health-issue-form'>

                <label htmlFor="health-issue">Health Issue</label>
                <input type="text" id="health-issue" name="health-issue"/><br/><br/>
                

                <label htmlFor="severity">User Id</label>
                <input type="text" id="severity" name="severity"/><br/><br/>
                
                <label htmlFor="start-date">Start Date</label>
                <input type="date" id="start-date" name="start-date"/><br/><br/>
                

                <button type="submit" onClick={props.handleChangeAcount}>Add Health Issue</button>
            </form>
        </div>
    );
}
