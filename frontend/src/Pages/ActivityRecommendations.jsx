import './Styles/ActivityRecommendations.css'


export function ActivityRecommendations(){

    return (
        <div id='activity-recommendations'>
            <h1 className='activity-recommendations-head'>Here are your Activity recommendations</h1>
            <p className='activity-recommendations-option'>Pick an Option on how you would like your answers</p>
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

