"use client";
import { useDeleteBlogByIdMutation, useGetAllBlogsQuery } from "@/redux/api/blogApi";
import { TBlog } from "@/types/blog.types";
import { Row, Space, Spin, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

export default function AdminAllBlogs() {
  const { data, isLoading } = useGetAllBlogsQuery({});
  const [deleteBlogById, { isSuccess}] = useDeleteBlogByIdMutation();
  // @ts-ignore
  const blogs = data?.blogs?.data?.data;
  if (isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }

  const handleDeleteBlog = async (id: string) => {
    await deleteBlogById(id).unwrap();
  };

  if (isSuccess) {
    message.success("Blog Deleted Successfully");
  }

  return (
    <div className="antialiased flex flex-col md:mx-36 justify-center items-center h-[100vh]">
      <div className="relative flex w-full flex-col rounded-[10px] bg-[#50577abd] bg-clip-border">
        <div className="flex h-fit w-full items-center justify-between rounded-t-2xl px-4 pb-[20px] pt-4">
          <h4 className="text-lg font-bold text-gray-50">Top Blogs</h4>
          <Link href="/dashboard/super_admin/manage_blogs/create">
            <button className="rounded-[20px] text-gray-50 border-2 hover:border-none px-4 py-2 text-base font-medium text-brand-500 transition duration-200">
              Add Blog
            </button>
          </Link>
        </div>
        <div className="w-auto px-4">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr>
                <th className="pointer">
                  <p className="text-center pb-2 pt-4 text-gray-50 text-xs sm:text-sm">
                    Authors
                  </p>
                </th>
                <th className="pointer">
                  <p className="text-center pb-2 pt-4 text-gray-50 text-xs sm:text-sm">
                    Title
                  </p>
                </th>
                <th className="pointer">
                  <p className="text-center pb-2 pt-4 text-gray-50 text-xs sm:text-sm">
                    Views
                  </p>
                </th>
                <th className="pointer">
                  <p className="text-center pb-2 pt-4 text-gray-50 text-xs sm:text-sm">
                    Action
                  </p>
                </th>
              </tr>
            </thead>
            {blogs?.map((blog: TBlog) => (
              <tbody key={blog?.id} role="rowgroup" className="px-4">
                <tr>
                  <td className="py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-[30px] w-[30px] rounded-full">
                        <Image
                          width={500}
                          height={500}
                          // @ts-ignore
                          src={blog?.users?.imgUrl}
                          className="h-full w-full rounded-full"
                          alt=""
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-50">
                        {
                          // @ts-ignore
                          blog?.users?.name
                        }
                      </p>
                    </div>
                  </td>
                  <td className="py-3 text-sm">
                    <p className="text-md font-medium text-gray-50">
                      {blog?.title.slice(0, 14)} ...
                    </p>
                  </td>
                  <td className="py-3 text-sm">
                    <div className="mx-2 flex font-bold">
                      <p className="text-md font-medium text-gray-50">3.4k</p>
                    </div>
                  </td>
                  <td className="py-3 text-sm">
                    <div className="mx-2 flex font-bold">
                      <button
                        onClick={() => handleDeleteBlog(blog?.id as string)}
                        className="text-md font-medium text-gray-50"
                      >
                        <AiTwotoneDelete className="text-gray-50 w-6 h-6" />
                      </button>
                      <Link
                        href={`/dashboard/super_admin/manage_blogs/edit/${blog?.id}`}
                        className="text-md font-medium text-gray-600 dark:text-white"
                      >
                        <AiTwotoneEdit className="text-gray-50 ml-2 w-6 h-6" />
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
