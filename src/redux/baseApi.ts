import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "./tagTypesList";
import { RootState } from "./store";
import getAccessToken from "@/utils/getToken";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1/",
    baseUrl: "https://printing-service-ltd.vercel.app/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = getAccessToken(state);
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }) as any,
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
