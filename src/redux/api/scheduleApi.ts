// import { TSchedule } from "@/types/schedule.types";
// import { baseApi } from "../baseApi";
// import { tagTypes } from "../tagTypesList";
// import { IMeta } from "@/types/common";

// export const scheduleApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     getAllSchedule: build.query({
//       query: (arg: Record<string, any>) => {
//         return {
//           url: "/schedules/all-schedules",
//           method: "GET",
//           params: arg,
//         };
//       },
//       transformResponse: (response: TSchedule[], meta: IMeta) => {
//         return {
//           schedules: response,
//           meta,
//         };
//       },
//       providesTags: [tagTypes.Schedule],
//     }),
//     createSchedule: build.mutation({
//       query: (payload: TSchedule) => ({
//         url: "/schedules/create-schedule",
//         method: "POST",
//         data: payload,
//       }),
//       invalidatesTags: [tagTypes.Schedule],
//     }),
//     // get by id
//     getScheduleById: build.query({
//       query: (id: string) => ({
//         url: `/schedules/${id}`,
//         method: "GET",
//       }),
//       providesTags: [tagTypes.Schedule],
//     }),
//     // get by id
//     updateScheduleById: build.mutation({
//       query: (payload) => ({
//         url: `/schedules/update-schedule/${payload.id}`,
//         method: "PUT",
//         data: payload.body,
//       }),
//       invalidatesTags: [tagTypes.Schedule],
//     }),
//     deleteScheduleById: build.mutation({
//       query: (id: string) => ({
//         url: `/schedules/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: [tagTypes.Schedule],
//     }),
//   }),
// });

// export const { 
//   useGetAllScheduleQuery,
//   useCreateScheduleMutation,
//   useGetScheduleByIdQuery,
//   useUpdateScheduleByIdMutation,
//   useDeleteScheduleByIdMutation,
// } = scheduleApi;