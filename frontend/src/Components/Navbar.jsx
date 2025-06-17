import {Link} from "react-router-dom";
import "./Styles/Navbar.css"

export function Navbar(){
    return (
        <div id="navbar">
            <Link className={"link-styles"} to="/home"><button>Home</button></Link>
            <Link className={"link-styles"} to="/about"><button>About</button></Link>
            <Link className={"link-styles"} to="/activity-recomendation"><button>Activity Recommendations</button></Link>
            <Link  className={"link-styles"}to="/appointment"><button>Appointment</button></Link>
            <Link  className={"link-styles"}to="/profile"><button>Profile</button></Link>
            <Link  className={"link-styles"}to="/meal-recomendation"><button>Meal Recommendations</button></Link>
            <Link className={"link-styles"} to="/medical-history"><button>Medical History</button></Link>
            <Link className={"link-styles"} to="/medication-recomendation"><button>Medication Recommendations</button></Link>
            <Link  className={"link-styles"}to="/vaccination-history"><button>Vaccination History</button></Link>
            <Link className={"link-styles"} to="/vaccination-recommendation"><button>Vaccination Recommendation</button></Link>
            <Link className={"link-styles"} to="/admin"><button>Admin</button></Link>

        </div>
    )
}