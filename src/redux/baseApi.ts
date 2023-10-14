import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "./tagTypesList";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painting-service-roan.vercel.app/api/v1/",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
