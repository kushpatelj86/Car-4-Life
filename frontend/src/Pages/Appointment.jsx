export function Appointment(){

    return (
        <div id='apointments'>
            <h1>Book an Appointment</h1>
            <label for="time">Pick a Time:</label>
            <select>
                <option>8:00 AM</option>
                <option>8:30 AM</option>
                <option>9:00 AM</option>
                <option>9:30 AM</option>
                <option>10:00 AM</option>
                <option>10:30 AM</option>
                <option>11:00 AM</option>
                <option>11:30 AM</option>
                <option>12:00 PM</option>
                <option>12:30 PM</option>
                <option>1:00 PM</option>
                <option>1:30 PM</option>
                <option>2:00 PM</option>
                <option>2:30 PM</option>
                <option>3:00 PM</option>
                <option>3:30 PM</option>
                <option>4:00 PM</option>
                <option>4:30 PM</option>
            </select>

            <label for="date">Pick a Date:</label>
            <input type="date" id="date" name="date"/>





            <button>Schedule Apointment</button>
            
        </div>
    );


}