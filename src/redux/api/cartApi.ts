import { TCart } from "@/types/cart.types";
import { baseApi } from "../baseApi";
import { IMeta } from "@/types/common";
import { tagTypes } from "../tagTypesList";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCart: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/carts/all-carts",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: TCart[], meta: IMeta) => {
        return {
          carts: response,
          meta,
        };
      },
      providesTags: [tagTypes.Cart],
    }),
    getCartByUserId: build.query({
      query: () => {
        return {
          url: "/carts/user-carts",
          method: "GET",
        };
      },
      providesTags: [tagTypes.Cart],
    }),
    createCart: build.mutation({
      query: (payload: TCart) => ({
        url: "/carts/create-cart",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.Cart, tagTypes.Booking, tagTypes.User],
    }),
    // get by id
    getCartById: build.query({
      query: (id: string) => ({
        url: `/carts/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.Cart],
    }),
    // get by id
    updateCartById: build.mutation({
      query: (payload) => ({
        url: `/carts/${payload.id}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: [tagTypes.Cart],
    }),
    incrementCartQuantity: build.mutation({
      query: (id: string) => ({
        url: `/carts/increment-cart-quantity/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.Cart],
    }),
    decrementCartQuantity: build.mutation({
      query: (id: string) => ({
        url: `/carts/decrement-cart-quantity/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.Cart],
    }),
    deleteCartById: build.mutation({
      query: (id: string) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.Cart, tagTypes.Booking],
    }),
  }),
});

export const {
  useGetAllCartQuery,
  useGetCartByUserIdQuery,
  useCreateCartMutation,
  useGetCartByIdQuery,
  useUpdateCartByIdMutation,
  useDeleteCartByIdMutation,
  useIncrementCartQuantityMutation,
  useDecrementCartQuantityMutation,
} = cartApi;