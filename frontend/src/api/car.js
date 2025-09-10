import axios from "axios";


export  async function  addCar (values) {
  try {
    console.log("/User id cretae ",values)

    const res = await axios.post(`http://localhost:8000/car/add_car`, values);
    return res.data;
  } catch (err) {
    console.error("Error updating user:", err);
    return null;
  }
};


