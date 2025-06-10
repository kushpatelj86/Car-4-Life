import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { ActivityRecommendations } from './Pages/ActivityRecommendations';
import { Appointment } from './Pages/Appointment';
import { Profile } from './Pages/Profile';
import { MealRecommendations } from './Pages/MealRecommendations';
import { MedicalHistory } from './Pages/MedicalHistory';
import { MedicationRecommendations } from './Pages/MedicationRecommendations';
import { VaccinationHistory } from './Pages/VaccinationHistory';
import { VaccinationRecommendation } from './Pages/VaccinationRecommendation';
import { Admin } from './Pages/Admin';
import { Layout } from './Components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="activity-recomendation" element={<ActivityRecommendations />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="profile" element={<Profile />} />
          <Route path="meal-recomendation" element={<MealRecommendations />} />
          <Route path="medical-history" element={<MedicalHistory />} />
          <Route path="medication-recomendation" element={<MedicationRecommendations />} />
          <Route path="vaccination-history" element={<VaccinationHistory />} />
          <Route path="vaccination-recommendation" element={<VaccinationRecommendation />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );

  

}

export default App;
