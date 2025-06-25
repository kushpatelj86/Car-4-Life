export function PatientProfile(){

    return (
        <div id='doctor-profile'>
            <div className="profile-header">
                <h1>User profile</h1>
                <img src='/image/profile.jpg' alt='' id='photo'/>
                <input type='file' id="file" />
                <label for='file' id='uploadButton'></label>
            </div>


            <div className="profile-information">
                <ul>
                    <li>Name: </li>
                    <li>Username: </li>
                    <li>Specialization: </li>
                    <li>Liscence Number: </li>
    
                </ul>
            </div>
        </div>
    );


}