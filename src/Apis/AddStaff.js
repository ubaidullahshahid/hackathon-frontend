import axios from "axios";
import BaseUrl from "../config";

const addAdmin = async (data) => {
  try {
      console.log("data" , data);
    const apiUrl = `${BaseUrl}/addStaff`;
    
    const response = await axios.post(apiUrl, data);
    return response.data;
  } catch (error) {
    console.log(error);
    
    throw error.response ? error.response.data.message : error.message;
  }
};

export default addAdmin;