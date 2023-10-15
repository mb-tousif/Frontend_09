import { TSubscribe } from "@/types/subscribe";
import { baseApi } from "../baseApi";
import { IMeta } from "@/types/common";
import { tagTypes } from "../tagTypesList";

export const courseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    allSubscriptions: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/subscribes/all-subscribes",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: TSubscribe[], meta: IMeta) => {
        return {
          subscription: response,
          meta,
        };
      },
      providesTags: [tagTypes.Subscription],
    }),
    // get by id
    subscriptionById: build.query({
      query: (id: string) => ({
        url: `/subscribes/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.Subscription],
    }),
    // create
    createSubscription: build.mutation({
      query: (payload: TSubscribe) => ({
        url: "/subscribes",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.Subscription],
    }),
  }),
});

export const {
  useAllSubscriptionsQuery,
  useSubscriptionByIdQuery,
  useCreateSubscriptionMutation,
} = courseApi;
