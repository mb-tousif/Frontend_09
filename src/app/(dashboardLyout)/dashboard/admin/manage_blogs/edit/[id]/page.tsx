"use client";
import { useGetBlogByIdQuery, useUpdateBlogByIdMutation } from "@/redux/api/blogApi";
import { TBlog } from "@/types/blog.types";
import { message } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";

export default function EditBlog({ params }: { params: any }) {
  const { handleSubmit, register, reset } = useForm<TBlog>();
  const { data, isLoading, isError } = useGetBlogByIdQuery(params?.id);
  const blog = data?.data;
  const [updateBlogById] =useUpdateBlogByIdMutation()
  const onSubmit: SubmitHandler<TBlog> = async (data: TBlog) => {
    try {
      data.id = params?.id;
      const res = await updateBlogById({ ...data }).unwrap();
      message.success(res.message);
    } catch (err: any) {
      message.error(err.data.message);
    }
  };
  return (
    <div className="flex justify-center sm:p-6 sm:min-w-[600px] md:min-w-[900px]">
      <div className="min-h-50vh md:w-4/6 rounded-2xl bg-[#474E68]">
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
              className="w-full px-3 bg-[#8d99ae] py-2 mb-3 text-sm leading-tight text-gray-50 border-none rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              {...register("title")}
              type="text"
              defaultValue={blog?.title}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="imgUrl"
            >
              Blog Picture
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              {...register("imgUrl")}
              type="text"
              defaultValue={blog?.imgUrl}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-50"
              htmlFor="content"
            >
              Blog Content
            </label>
            <textarea
              className="w-full bg-[#8d99ae] px-3 py-2 mb-3 text-sm leading-tight text-gray-50 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              rows={6}
              {...register("content")}
              defaultValue={blog?.content}
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-gray-50 bg-[#50577A] hover:bg-[#474E68] rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Blogs
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
