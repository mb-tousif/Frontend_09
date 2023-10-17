"use client"
import { getToken } from "@/redux/slices/authSlice";
import jwtDecode from "jwt-decode";

export const getUserInfo = () => {
  const authToken = getToken();
  // console.log(authToken);
  if (authToken) {
    const decodedData = jwtDecode(authToken);
    return decodedData;
  } else {
    return "";
  }
};
