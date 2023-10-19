"use client";
import { useDeleteBlogByIdMutation, useGetAllBlogsQuery } from "@/redux/api/blogApi";
import { TBlog } from "@/types/blog.types";
import { Row, Space, Spin, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneDelete } from "react-icons/ai";

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
      <div className="relative flex w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3]">
        <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
          <h4 className="text-lg font-bold text-gray-700">Top Blogs</h4>
          <Link href="/dashboard/admin/manage_blogs/create">
            <button className="rounded-[20px] px-4 py-2 text-base font-medium text-brand-500 transition duration-200 active:bg-gray-200">
              Add Blog
            </button>
          </Link>
        </div>
        <div className="w-auto px-4">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr>
                <th className="pointer">
                  <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                    Authors
                  </div>
                </th>
                <th className="pointer">
                  <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                    Title
                  </div>
                </th>
                <th className="pointer">
                  <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                    Views
                  </div>
                </th>
                <th className="pointer">
                  <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                    Action
                  </div>
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
                      <p className="text-sm font-medium text-[#2C68A5] dark:text-white">
                        {
                          // @ts-ignore
                          blog?.users?.name
                        }
                      </p>
                    </div>
                  </td>
                  <td className="py-3 text-sm">
                    <p className="text-md font-medium text-[#145A2C]">
                      {blog?.title.slice(0, 14)} ...
                    </p>
                  </td>
                  <td className="py-3 text-sm">
                    <div className="mx-2 flex font-bold">
                      <p className="text-md font-medium text-[#2C68A5] dark:text-white">
                        3.4k
                      </p>
                    </div>
                  </td>
                  <td className="py-3 text-sm">
                    <div className="mx-2 flex font-bold">
                      <button
                        onClick={() => handleDeleteBlog(blog?.id as string)}
                       className="text-md font-medium text-gray-600 dark:text-white">
                        <AiTwotoneDelete className="text-[#2C68A5] w-6 h-6" />
                      </button>
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
