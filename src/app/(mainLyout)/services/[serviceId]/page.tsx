"use client"
import ReviewList from '@/components/ui/ReviewList';
import { useAllServicesQuery, useGetServiceByIdQuery } from '@/redux/api/serviceApi';
import { useAppSelector } from '@/redux/hooks';
import { TService } from '@/types/service.types';
import { Row, Space, Spin } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useEffect } from 'react'

export default function Service({ params }: any) {
  const { data, isLoading } = useGetServiceByIdQuery(params?.serviceId);
  const service = data?.data as TService;
  // console.log(service);
  const { data: serviceData, isLoading: serviceIsLoading } = useAllServicesQuery({category: service?.category});
  // @ts-ignore
  const services = serviceData?.services?.data?.data.filter((service) => {
    return service?.status === "Available"});
  
  if (isLoading || serviceIsLoading ) {
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
    <div>
      <h3 className="text-center text-2xl md:text-4xl font-medium md:font-bold text-[#474E68] sm:ml-6 mt-6 mb-6">
        Service Detail
      </h3>
      <main className="my-8">
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center">
            <div className="w-full h-64 md:w-1/2 lg:h-96">
              <Image
                height={500}
                width={500}
                className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
                src={service?.imgUrl}
                alt="Service Image"
              />
            </div>
            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
              <h3 className="text-[#474E68] uppercase text-lg">
                {service?.category}
              </h3>
              <span className="text-[#474E68] mt-3">{service?.name}</span>
              <hr className="my-3" />
              <div className="mt-2">
                <label className="text-[#474E68] text-sm" htmlFor="count">
                  Price: ${service?.price}
                </label>
                <p className="flex text-[#474E68] items-center mt-1">
                  Duration: {service?.schedule}
                </p>
              </div>
              <div className="mt-1">
                <label className="text-[#474E68] text-sm" htmlFor="count">
                  Description: {service?.description}
                </label>
              </div>
              <div className="flex justify-evenly items-center mt-6">
                {
                  // @ts-ignore
                  service?.carts[0]?.status === "Pending" ? (
                    <button className="px-8 py-2 bg-[#50577A] hover:bg-[#474E68] text-gray-50 text-sm font-medium rounded">
                      Pay Now
                    </button>
                  ) : (
                    ""
                  )
                }
                <Link href={`/cart/${service?.id}`}>
                  <button className="flex bg-[#50577A] hover:bg-[#474E68] border-none text-gray-50 rounded-md p-2">
                    Add to cart
                    <svg
                      className="h-5 w-5 ml-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </Link>
                <Link href={`/services/review/${service?.id}`}>
                  <button className="rounded-xl text-gray-50 p-2 bg-[#50577A] mr-2 focus:outline-none">
                    Add Review
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Show related category data */}
          <ReviewList service={service} />
          <div className="mt-16">
            <h3 className="text-[#474E68] text-2xl font-medium">
              More Same Category Services
            </h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {services?.map((service: TService) => (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <div className="w-full bg-[#474E68] max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                    <div
                      className="flex items-end justify-end h-56 w-full bg-cover"
                      style={{
                        backgroundImage: `url(${service.imgUrl})`,
                      }}
                    >
                      <Link href={`/cart/${service.id}`}>
                        <button className="p-2 rounded-full bg-[#50577A] hover:bg-[#474E68] text-gray-50 mx-5 mb-4">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        </button>
                      </Link>
                    </div>
                    <div className="px-5 py-3">
                      <h3 className="text-gray-50 uppercase">{service.name}</h3>
                      <span className="text-gray-50 mt-2">
                        ${service.price}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
