import { TReview } from "@/types/review.types";
import { tagTypes } from "../tagTypesList";
import { IMeta } from "@/types/common";
import { baseApi } from "../baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllReview: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/reviews/all-reviews",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: TReview[], meta: IMeta) => {
        return {
          reviews: response,
          meta,
        };
      },
      providesTags: [tagTypes.Review],
    }),
    createReview: build.mutation({
      query: (payload: TReview) => ({
        url: "/reviews/create-review",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [tagTypes.Review],
    }),
    // get by id
    getReviewById: build.query({
      query: (id: string) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.Review],
    }),
    // get by id
    updateReviewById: build.mutation({
      query: (payload) => ({
        url: `/reviews/update-review/${payload.id}`,
        method: "PUT",
        data: payload.body,
      }),
      invalidatesTags: [tagTypes.Review],
    }),
    deleteReviewById: build.mutation({
      query: (id: string) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.Review],
    }),
  }),
});

export const {
  useGetAllReviewQuery,
  useCreateReviewMutation,
  useGetReviewByIdQuery,
  useUpdateReviewByIdMutation,
  useDeleteReviewByIdMutation,
} = reviewApi;