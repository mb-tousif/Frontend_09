"use client";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
import { TBlog } from "@/types/blog.types";
import { message } from "antd";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ManageBlogsBySuperAdmin() {
  const [createBlog] = useCreateBlogMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TBlog>();
  const onSubmit: SubmitHandler<TBlog> = async (data: TBlog) => {
    try {
      const res = await createBlog({ ...data }).unwrap();
      message.success(res.message);
      reset();
    } catch (err: any) {
      message.error(err.data.message);
    }  
  };
  return (
    <div className="p-10 md:pl-20">
      <div className="w-full min-w-90vh mx-auto bg-[#474E68] rounded-2xl p-5">
        <h3 className="p-4 text-2xl text-gray-50 font-bold text-center">
          Create a Blog
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 pt-6 pb-8 mb-4 rounded"
        >
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-50"
              htmlFor="title"
            >
              Blog Title
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-50 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              {...register("title", { required: true })}
              type="text"
              placeholder="Enter Blog Title"
            />
            {errors.title && (
              <p className="text-rose-600 text-center text-sm">
                Title is required.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-50"
              htmlFor="imgUrl"
            >
              Blog Image Url
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-50 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              {...register("imgUrl", { required: true })}
              type="text"
              placeholder="Image Url"
            />
            {errors.imgUrl?.type === "pattern" && (
              <p className="text-rose-600 text-center text-sm">
                {errors.imgUrl.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-50"
              htmlFor="content"
            >
              Blog Content
            </label>
            <textarea
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-50 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              rows={6}
              placeholder="Enter Your Address"
              {...register("content", { required: true })}
            />
            {errors.content && (
              <p className="text-rose-600 text-center text-sm">
                Address is required.
              </p>
            )}
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-gray-50 bg-[#50577A] hover:border-2 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
