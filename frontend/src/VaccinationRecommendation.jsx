export function VaccinationRecommendations(){

    return (
        <div id='vaccination-recommendations'>
            <h1>Here are your Medication recommendations</h1>
            <p>Pick an Option on how you would like your answers</p>
            <select name="recommend-format" id="recommend-format">
                <option value="PDF">PDF</option>
                <option value="WebDisplay">Display on Website</option>
                <option value="Excel">Excel Sheet</option>
                <option value="Email">Email</option>
                <option value="Text">Text File</option>
            </select>
        </div>
    );


}