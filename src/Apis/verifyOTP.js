"use client";

import axios from "axios";
import Base_URL from "../config";

export const verifyOtp = async (data) => {
  try {
    const apiUrl = `${Base_URL}/verify-otp`;
    const response = await axios.post(apiUrl, data, {});
    return response;
  } catch (error) {
    throw error;
  }
};