"use client";
import { useGetBlogByIdQuery } from '@/redux/api/blogApi';
import { TBlog } from '@/types/blog.types';
import { Row, Space, Spin } from 'antd';
import Image from 'next/image';

export default function BlogDetails({ params }: any) {
  const { data, isLoading } = useGetBlogByIdQuery(params?.blogId);
  const blog = data?.data as TBlog;
  console.log(blog);
  
  if (isLoading ) {
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
  return (
    <div className="antialiased p-4">
        <div className="md:p-8 p-2 bg-[#50577A] rounded-3xl">
          <Image
            className="rounded-lg h-52 w-full"
            width={500}
            height={500}
            src={blog?.imgUrl}
            alt="blog"
          />
          <p className="text-green-500 font-semibold text-base mt-2">
            Painting
          </p>
          <h1 className="font-semibold text-gray-50 leading-none text-xl mt-1 capitalize">
            {blog?.title}
          </h1>
          <div className="max-w-full mt-2">
            <p className="text-base font-medium tracking-wide text-gray-50 mt-1">
              {blog?.content}
            </p>
          </div>
          <div className="flex justify-evenly md:justify-center space-x-2 mt-10">
            <Image
              width={500}
              height={500}
              // @ts-ignore
              src={blog?.users?.imgUrl}
              className="w-12 h-12 object-cover object-center rounded-full ease-in-out duration-700 hover:scale-125"
              alt="Blog Author"
            />
            <div>
              <p className="text-gray-50 text-center font-semibold">
                {/* @ts-ignore */}
                Author: {blog?.users?.name}
              </p>
              <p className="text-gray-50 text-center font-semibold text-sm">
                {/* @ts-ignore */}
                Posted: {blog?.createdAt.split("T")[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
