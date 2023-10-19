"use client"
import { getToken } from "@/redux/slices/authSlice";
import jwtDecode from "jwt-decode";

export interface IUserInfo {
  id: string;
  role: string;
}
export const getUserInfo = ():IUserInfo | any => {
  const authToken = getToken();
  // console.log(authToken);
  if (authToken) {
    const decodedData = jwtDecode(authToken);
    return decodedData;
  } else {
    return "";
  }
};
