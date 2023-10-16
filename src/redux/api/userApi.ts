import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypesList";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: [tagTypes.User],
    }),
    userRegister: build.mutation({
      query: (data) => ({
        url: "/auth/signup",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.User],
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = userApi;
