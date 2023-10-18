"use client";
import PaginationSection from '@/components/ui/PaginationSection';
import ServiceHeroSection from '@/components/ui/ServiceHeroSection';
import { useAllServicesQuery } from '@/redux/api/serviceApi';
import { useAppSelector, useDebounced } from '@/redux/hooks';
import { TService } from '@/types/service.types';
import { Input, Row, Space, Spin } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { LuView } from "react-icons/lu";

export default function Services() {
  const [search, setSearch] = useState<string>("");
  const query: Record<string, any> = {};
   const debouncedSearchTerm = useDebounced({
     searchQuery: search,
     delay: 600,
   });
  if (!!debouncedSearchTerm) {
    query["search"] = debouncedSearchTerm;
  }
  const { data, isLoading: serviceIsLoading } =
    useAllServicesQuery({...query})
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);
    const lastServiceIndex = currentPage * postsPerPage;
    const firstServiceIndex = lastServiceIndex - postsPerPage;
    // @ts-ignore
    const services:TService[] = data?.services?.data?.data;
    const currentServices = services?.slice(firstServiceIndex, lastServiceIndex);
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [token, router]);

  if (!isLoading || serviceIsLoading) {
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
    <>
      <ServiceHeroSection />
      <div className="mx-auto container px-6 xl:px-0 py-6">
        <div className="flex justify-center p-2">
          <Input
            size="large"
            placeholder="Search by name, category, status only"
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "80%",
              color: "black",
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="mt-4 grid md:p-4 p-2 lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
            {currentServices?.map((service) => (
              <div
                key={service.id}
                className="group rounded-2xl group-hover:bg-opacity-60 transition duration-500 relative bg-[#14141493] pt-24 pb-4 text-white"
              >
                <div className="flex justify-center">
                  <Image
                    width={500}
                    height={500}
                    className="group-hover:opacity-60 max-h-60 rounded-xl transition duration-500"
                    src={service.imgUrl}
                    alt="Service Image"
                  />
                </div>
                {/* <article className="pt-3">
                  <span className="text-lg">Description: </span>
                  {service.description}
                </article> */}
                <p className="pt-3 text-center">
                  <span className="text-lg">Duration: </span>
                  {service.schedule}
                </p>
                <p className="pt-1 text-center">
                  <span className="text-lg">Price: </span>
                  {service.price}
                </p>
                <div className="flex item-center justify-center mb-2">
                  <svg
                    className="w-5 h-5 fill-current text-gray-50"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-50"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-50"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                  <div>
                    <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-white">
                      {service.category}
                    </p>
                  </div>
                  <div>
                    <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-white">
                      {service.name}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row bottom-8 left-8 space-x-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                  <Link href={`/cart/${service.id}`}>
                    <FaCartPlus className="text-white w-6 h-6" />
                  </Link>
                  <Link href={`/services/${service.id}`}>
                    <LuView className="text-white w-6 h-6" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PaginationSection
        totalData={services?.length}
        dataPerPage={currentServices?.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
