import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { CarProfile } from './Pages/CarProfile';
import { ServiceRecords } from './Pages/ServiceRecords';
import { PredictiveAlerts } from './Pages/PredictiveAlerts';
import { CarHealth } from './Pages/CarHealth';
import { Appointment } from './Pages/Appointment';
import { MechanicRating } from './Pages/MechanicRating';
import { Notifications } from './Pages/Notifications';
import { Admin } from './Pages/Admin';
import { Layout } from './Components/Layout';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="car-profile" element={<CarProfile />} />
          <Route path="service-records" element={<ServiceRecords />} />
          <Route path="predictive-alerts" element={<PredictiveAlerts />} />
          <Route path="car-health" element={<CarHealth />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="mechanic-rating" element={<MechanicRating />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
