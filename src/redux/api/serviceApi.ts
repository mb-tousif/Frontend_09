import { baseApi } from "../baseApi";
import { IMeta } from "@/types/common";
import { tagTypes } from "../tagTypesList";
import { TService } from "@/types/service.types";
// 
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
          services: response,
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
        body: payload,
      }),
      invalidatesTags: [tagTypes.Service],
    }),
    // get by id
    updateServiceById: build.mutation({
      query: (payload) => ({
        url: `/services/update-service/${payload.id}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: [tagTypes.Service],
    }),
    deleteServiceById: build.mutation({
      query: (id: string) => ({
        url: `/services/delete-service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.Service],
    }),
    getAvailableServices: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/services/all-available-services",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TService[], meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.Service],
    }),
    getUpcomingServices: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/services/all-upcoming-services",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TService[], meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.Service],
    }),
  }),
});

export const {
  useAllServicesQuery,
  useGetServiceByIdQuery,
  useCreateServiceMutation,
  useUpdateServiceByIdMutation,
  useDeleteServiceByIdMutation,
  useGetAvailableServicesQuery,
  useGetUpcomingServicesQuery,
} = serviceApi;
