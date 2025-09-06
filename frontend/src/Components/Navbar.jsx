import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

export function Navbar() {
    return (
        <div id="navbar">
            <Link className="link-styles" to="/home"><button>Home</button></Link>
            <Link className="link-styles" to="/owner-profile"><button>Owner Profile</button></Link>
            <Link className="link-styles" to="/car-profile"><button>Car Profile</button></Link>
            <Link className="link-styles" to="/service-records"><button>Service Records</button></Link>
            <Link className="link-styles" to="/predictive-alerts"><button>Predictive Alerts</button></Link>
            <Link className="link-styles" to="/appointment"><button>Appointment</button></Link>
            <Link className="link-styles" to="/parts"><button>Parts</button></Link>
            <Link className="link-styles" to="/service-parts"><button>Service Parts</button></Link>
            <Link className="link-styles" to="/reminders"><button>Reminders</button></Link>
            <Link className="link-styles" to="/car-score"><button>Car Score</button></Link>
        </div>
    );
}
