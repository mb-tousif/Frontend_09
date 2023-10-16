import { baseApi } from "../baseApi";
import { IMeta } from "@/types/common";
import { tagTypes } from "../tagTypesList";
import { TFeedback } from "@/types/feedback.types";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    getAllFeedback: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/feedbacks/all-feedbacks",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: TFeedback[], meta: IMeta) => {
        return {
          feedbacks: response,
          meta,
        };
      },
      providesTags: [tagTypes.Feedback],
    }),
    // get by id
    getFeedbackById: build.query({
      query: (id: string) => ({
        url: `/feedbacks/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.Feedback],
    }),
    // create
    createFeedback: build.mutation({
      query: (payload: TFeedback) => ({
        url: "/feedbacks/create-feedback",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [tagTypes.Feedback],
    }),
    // get by id
    updateFeedbackById: build.mutation({
      query: (payload) => ({
        url: `/feedbacks/update-feedback/${payload.id}`,
        method: "PUT",
        data: payload.body,
      }),
      invalidatesTags: [tagTypes.Feedback],
    }),
    deleteFeedbackById: build.mutation({
      query: (id: string) => ({
        url: `/feedbacks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.Feedback],
    }),
  }),
});

export const {
  useGetAllFeedbackQuery,
  useGetFeedbackByIdQuery,
  useCreateFeedbackMutation,
  useUpdateFeedbackByIdMutation,
  useDeleteFeedbackByIdMutation,
} = feedbackApi;