import axios from "axios";
import BaseUrl from "../config";

export const GetTokens = async (token, status) => {
  try {
    const apiUrl = `${BaseUrl}/getTokens?status=${status}`;
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};
