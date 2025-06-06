import {Link} from "react-router-dom";

export function Navbar(){
    return (
        <>
            <Link to="/"><button>Home</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/activity-recomendation"><button>Activity Recommendations</button></Link>
            <Link to="/appointment"><button>Appointment</button></Link>
            <Link to="/profile"><button>Profile</button></Link>
            <Link to="/meal-recomendation"><button>Meal Recommendations</button></Link>
            <Link to="/medical-history"><button>Medical History</button></Link>
            <Link to="/medication-recomendation"><button>Medication Recommendations</button></Link>
            <Link to="/vaccination-history"><button>Vaccination History</button></Link>
            <Link to="/vaccination-recommendation"><button>Vaccination Recommendation</button></Link>
            <Link to="/admin"><button>Admin</button></Link>

        </>
    )
}