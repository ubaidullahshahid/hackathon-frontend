import axios from "axios";
import BaseUrl from "../config";

export const GetTokenStatus = async (token) => {
  try {
    const apiUrl = `${BaseUrl}/getTokenStatus?token=${token}`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};
