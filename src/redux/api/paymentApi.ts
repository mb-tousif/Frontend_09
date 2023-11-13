import { IMeta } from "@/types/common";
import { tagTypes } from "../tagTypesList";
import { baseApi } from "../baseApi";
import { TPayment } from "@/types/payment.types";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPayment: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/payments/all-payments",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: TPayment[], meta: IMeta) => {
        return {
          payments: response,
          meta,
        };
      },
      providesTags: [tagTypes.Payment],
    }),
    createPayment: build.mutation({
      query: (payload: TPayment) => ({
        url: "/payments/create-payment",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.Payment, tagTypes.Notification],
    }),
    // get by id
    getPaymentById: build.query({
      query: (id: string) => ({
        url: `/payments/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.Payment],
    }),
    // get by id
    updatePaymentById: build.mutation({
      query: (payload) => ({
        url: `/payments/update-payment/${payload.id}`,
        method: "PUT",
        data: payload.body,
      }),
      invalidatesTags: [tagTypes.Payment],
    }),
    deletePaymentById: build.mutation({
      query: (id: string) => ({
        url: `/payments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.Payment],
    }),
  }),
});

export const {
  useGetAllPaymentQuery,
  useCreatePaymentMutation,
  useGetPaymentByIdQuery,
  useUpdatePaymentByIdMutation,
  useDeletePaymentByIdMutation,
} = paymentApi;