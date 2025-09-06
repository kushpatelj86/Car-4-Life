import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { CarProfile } from './Pages/CarProfile';
import { ServiceRecords } from './Pages/ServiceRecords';
import { PredictiveAlerts } from './Pages/PredictiveAlerts';
import { Appointment } from './Pages/Appointment';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import { OwnerProfile } from './Pages/OwnerProfile';
import { Parts } from './Pages/Parts';
import { Reminders } from './Pages/Reminders';
import { CarScore } from './Pages/CarScore';
import { Trips } from './Pages/Trips'; 
import { Layout } from './Components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/owner-profile" element={<OwnerProfile />} />
          <Route path="/car-profile" element={<CarProfile />} />
          <Route path="/service-records" element={<ServiceRecords />} />
          <Route path="/predictive-alerts" element={<PredictiveAlerts />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/car-score" element={<CarScore />} />
          <Route path="/trips" element={<Trips />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
