import axios from "axios";

export  async function  getUser (username)  {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/user/get_user/${username}`);
    return res.data.user;
  } catch (err) {
    console.error("Error fetching user:", err);
    return null;
  }
};

export  async function  updateUser (userData, values) {
  try {
    console.log("/User id ",userData)
    const res = await axios.post(`http://localhost:8000/user/update_user/${userData}`, values);
    return res.data;
  } catch (err) {
    console.error("Error updating user:", err);
    return null;
  }
};



export  async function  getProfile(user_id)  {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/user/get_profile/${user_id}`);
    return res.data.user;
  } catch (err) {
    console.error("Error fetching user:", err);
    return null;
  }
};




export  async function  updatePatientProfile (profileData, values) {
  try {
    console.log("/User id ",profileData)
    const res = await axios.post(`http://localhost:8000/user/update_profile/${profileData}`, values);
    return res.data;
  } catch (err) {
    console.error("Error updating user:", err);
    return null;
  }
};
