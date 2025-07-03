import { useState } from 'react'
import React from 'react'
import "./Styles/NuerodivergenceForm.css"

export function NuerodivergenceForm(props){
    return (
        <div>
            <form onSubmit={props.onSubmit} id='nuerodivergence-form'>

                <label htmlFor="Condition">Condition</label>
                <input type="text" id="condition" name="condition"/><br/><br/>
                

                <label htmlFor="date-of-diagnosis">Date of Diagnosis</label>
                <input type="date" id="date-of-diagnosis" name="date-of-diagnosis"/><br/><br/>
                

                <label htmlFor="severity">Serverity</label>
                <input type="text" id="severity" name="username"/><br/><br/>

                <label htmlFor="intention-for-treatment">Intention for Treatment</label>
                <input type="text" id="intention-for-treatment" name="intention-for-treatment"/><br/><br/>

               
                <button type="submit" onClick={props.handleChangeAcount}>Add Nuerodivergence</button>
            </form>
        </div>
    );
}
