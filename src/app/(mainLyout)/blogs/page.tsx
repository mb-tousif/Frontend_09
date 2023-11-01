"use client";
import { useGetAllBlogsQuery } from '@/redux/api/blogApi';
import { TBlog } from '@/types/blog.types';
import { Row, Space, Spin } from 'antd';
import Image from 'next/image'
import React from 'react'

export default function Blog() {
  const { data, isLoading } = useGetAllBlogsQuery({});
  // @ts-ignore
  const blogs=data?.blogs?.data?.data
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
  return (
    <div className="antialiased p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {blogs?.map((blog: TBlog) => (
          <div key={blog.id} className="md:p-8 p-2 bg-[#50577A] rounded-3xl">
            <Image
              className="rounded-lg w-full"
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
            <div className="flex items-center space-x-2 mt-10">
              <Image
                width={500}
                height={500}
                // @ts-ignore
                src={blog?.users?.imgUrl}
                className="w-10 h-10 object-cover object-center rounded-full"
                alt="Blog Author"
              />
              <div>
                <p className="text-gray-50 font-semibold">
                {/* @ts-ignore */}
                  {blog?.users?.name}
                </p>
                <p className="text-gray-50 font-semibold text-sm">
                  {/* @ts-ignore */}
                  {blog?.createdAt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
