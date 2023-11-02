import { TBlog } from "@/types/blog.types";
import { baseApi } from "../baseApi";
import { IMeta } from "@/types/common";
import { tagTypes } from "../tagTypesList";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    getAllBlogs: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/blogs/all-blogs",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: TBlog[], meta: IMeta) => {
        return {
          blogs: response,
          meta,
        };
      },
      providesTags: [tagTypes.Blog],
    }),
    // get by id
    getBlogById: build.query({
      query: (id: string) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.Blog],
    }),
    // create
    createBlog: build.mutation({
      query: (payload: TBlog) => ({
        url: "/blogs/create-blogs",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.Blog],
    }),
    // get by id
    updateBlogById: build.mutation({
      query: (payload) => ({
        url: `/blogs/update-blogs/${payload.id}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: [tagTypes.Blog],
    }),
    deleteBlogById: build.mutation({
      query: (id: string) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.Blog],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogByIdMutation,
  useDeleteBlogByIdMutation,
} = blogApi;