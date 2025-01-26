"use client";

import axios from "axios";
import BaseUrl from "../config";

const register = async (data) => {
  try {
    const apiUrl = `${BaseUrl}/register`;
    const response = await axios.post(apiUrl, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export default register;