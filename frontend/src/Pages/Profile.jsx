export function Profile(){

    return (
        <div id='patient-profile'>
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
                    <li>Dietary Choice: </li>
                    <li>Height: </li>
                    <li>Weight: </li>
                    <li>Age: </li>
                    <li>Religion: </li>
                    <li>Goal: </li>
                    <li>Activity Level: </li>
                    <li>Health Issues: </li>
                    <li>Nuerodivergence: </li>
                    <li>Drug History: </li>
                </ul>
            </div>
        </div>
    );


}