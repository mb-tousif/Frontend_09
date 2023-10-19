import { TUser } from "@/types/user.types";
import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypesList";


export const superAdminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createAdminBySuperAdmin: build.mutation({
      query: (payload: TUser) => ({
        url: "/super-admins/create-admin",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [tagTypes.User],
    }),
    // update by id
    updateUserBySuperAdmin: build.mutation({
      query: (payload) => ({
        url: `/super-admins/update-user/${payload.id}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: [tagTypes.User],
    }),
  }),
});

export const {
  useCreateAdminBySuperAdminMutation,
  useUpdateUserBySuperAdminMutation,
} = superAdminApi;



