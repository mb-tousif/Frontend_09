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
      query: ({id, payload}) => ({
        url: `/admins/update-user/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: [tagTypes.User],
    }),
  }),
});

export const { useCreateUserByAdminMutation, useUpdateUserByAdminMutation } =
  adminApi;