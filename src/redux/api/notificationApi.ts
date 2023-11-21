import { TNotification } from "@/types/notification.types";
import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypesList";
import { IMeta } from "@/types/common";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    getAllNotifications: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/notifications/all-notifications",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: TNotification[], meta: IMeta) => {
        return {
          notifications: response,
          meta,
        };
      },
      providesTags: [tagTypes.Notification],
    }),
    // get by id
    getNotificationById: build.query({
      query: (id: string) => ({
        url: `/notifications/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.Notification],
    }),
    // get by id
    getNotificationByUserId: build.query({
      query: (id: string) => ({
        url: `/notifications/user/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.Notification],
    }),
    // create
    createNotification: build.mutation({
      query: (payload: TNotification) => ({
        url: "/notifications/create-notification",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [tagTypes.Notification],
    }),
    // get by id
    updateNotificationById: build.mutation({
      query: (payload) => ({
        url: `/notifications/update-notification/${payload.id}`,
        method: "PUT",
        data: payload.body,
      }),
      invalidatesTags: [tagTypes.Notification],
    }),
    deleteNotificationById: build.mutation({
      query: (id: string) => ({
        url: `/notifications/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.Notification],
    }),
  }),
});

export const {
  useGetAllNotificationsQuery,
  useGetNotificationByIdQuery,
  useGetNotificationByUserIdQuery,
  useCreateNotificationMutation,
  useUpdateNotificationByIdMutation,
  useDeleteNotificationByIdMutation,
} = notificationApi;