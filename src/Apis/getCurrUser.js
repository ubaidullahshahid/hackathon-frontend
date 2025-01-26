import axios from "axios";
import BaseUrl from "../config";

export const getCurrentUser = async (token) => {
  console.log("hello world");

  if (!token) throw new Error("No token provided");
  const apiUrl = `${BaseUrl}/get-me`;
  const {data} = await axios.get(apiUrl, {
    headers: { Authorization: `${token}` },
  });
  // console.log(response.data);

  

  return data?.data; 
};