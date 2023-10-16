import { TUser } from "@/types/user.types";
import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypesList";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createUserByAdmin: build.mutation({
      query: (payload: TUser) => ({
        url: "/admins/create-all-user",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [tagTypes.User],
    }),
    // get by id
    updateUserByAdmin: build.mutation({
      query: (payload) => ({
        url: `/admins/update-user/${payload.id}`,
        method: "PUT",
        data: payload.body,
      }),
      invalidatesTags: [tagTypes.User],
    }),
  }),
});

export const { useCreateUserByAdminMutation, useUpdateUserByAdminMutation } =
  adminApi;