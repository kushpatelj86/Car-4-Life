import { useState, useEffect } from "react";
import profileImage from "./Images/defaultprofileicon.png";
import "./Styles/Profile.css";
import { updateUser, getUser } from "../api/user.js";
import { addCar } from "../api/car.js";

import { CarAddForm } from "../Components/CarAddForm.jsx";

export function CarProfile() {
  const [car_values, setCarValues] = useState({
    owner_user_id: "",
    make: "",
    model: "",
    year: "",
    vin: "",
    mileage: "",
    fuel_type: "",
  });



  const handleValsChange = (e) => {
    const id = e.target.id;
    setCarValues({...car_values, [id]: e.target.value});
  };

  const handleCarSubmit = async (e) => {
    e.preventDefault();

    const newCar = {
      ...car_values    
    };

    console.log("Submitting new car:", newCar);

    const data = await addCar(newCar);
    if (data.success) {
      alert(data.success);
      setCarValues({
        owner_user_id: data.uid,
        make: data.make,
        model: data.model,
        year: data.year,
        vin: data.vin,
        mileage: data.mileage,
        fuel_type: data.fuel_type
      });
    } else {
      alert("Failed to add car");
    }
  };


  

  return (
    <div id="patient-profile">
      <h1>Your Cars</h1>


      <div id="add-car">
        <CarAddForm
          car_values={car_values}
          handleValsChange={handleValsChange}
          handleCarSubmit={handleCarSubmit}

        />
      </div>
    </div>
  );
}
