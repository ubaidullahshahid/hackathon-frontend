import axios from "axios";
import BaseUrl from "../config";

export const editToken = async (data) => {
  const apiUrl = `${BaseUrl}/editTokenStatus`;
  try {
    console.log("data", data);
    const response = await axios.put(apiUrl, data);
    return response.data;
  } catch (error) {
    console.error("Error updating resource:", error);
  }
};
