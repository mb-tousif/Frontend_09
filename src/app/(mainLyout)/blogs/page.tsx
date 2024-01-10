"use client";
import { useGetAllBlogsQuery } from '@/redux/api/blogApi';
import { TBlog } from '@/types/blog.types';
import { Row, Space, Spin } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

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
              className="rounded-lg w-full ease-in-out duration-700 hover:scale-110 aspect-video"
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
                <Link
                  href={`/blogs/${blog?.id}`}
                  className="py-3 flex mt-3 items-center justify-center w-full font-semibold rounded-md bg-[#2f3e8a] hover:bg-[#474E68] text-gray-50 transition duration-300 ease-in-out"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className=" h-5 w-5 ms-3"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
