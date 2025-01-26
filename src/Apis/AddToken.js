import axios from "axios";
import BaseUrl from "../config";

const addToken = async (data) => {
  try {
      console.log("data" , data);
    const apiUrl = `${BaseUrl}/addToken`;
    
    const response = await axios.post(apiUrl, data);
    return response.data;
  } catch (error) {
    console.log(error);
    
    throw error.response ? error.response.data.message : error.message;
  }
};

export default addToken;
