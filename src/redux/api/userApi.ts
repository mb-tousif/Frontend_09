import { IMeta } from "@/types/common";
import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypesList";
import { TUser } from "@/types/user.types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Auth api
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
    resetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.User],
    }),
    // user api
    getAllUser: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/users/all-users",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: TUser[], meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.User],
    }),
    // get by id
    getUserById: build.query({
      query: (id: string) => ({
        url: `/users/profile/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.User],
    }),
    // get by id
    updateUserById: build.mutation({
      query: (payload) => ({
        url: `/users/update-profile/${payload.id}`,
        method: "PUT",
        data: payload.body,
      }),
      invalidatesTags: [tagTypes.User],
    }),
    deleteUserById: build.mutation({
      query: (id: string) => ({
        url: `/users/delete-profile/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.User],
    }),
  }),
});

export const { 
  useUserLoginMutation, 
  useUserRegisterMutation,
  useResetPasswordMutation,
  useGetAllUserQuery,
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
  useDeleteUserByIdMutation,
} = userApi;
