import { baseApi } from "../baseApi";
import { IMeta } from "@/types/common";
import { tagTypes } from "../tagTypesList";
import { TService } from "@/types/service.types";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    allServices: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/services/all-services",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: TService[], meta: IMeta) => {
        return {
          subscription: response,
          meta,
        };
      },
      providesTags: [tagTypes.Service],
    }),
    // get by id
    getServiceById: build.query({
      query: (id: string) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.Service],
    }),
    // create
    createService: build.mutation({
      query: (payload: TService) => ({
        url: "/services/create-service",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [tagTypes.Service],
    }),
    // get by id
    updateServiceById: build.mutation({
      query: (payload) => ({
        url: `/services/${payload.id}`,
        method: "PUT",
        data: payload.body,
      }),
      invalidatesTags: [tagTypes.Service],
    }),
  }),
});

export const {
} = serviceApi;
