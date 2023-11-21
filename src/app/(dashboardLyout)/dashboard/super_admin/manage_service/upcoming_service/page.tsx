"use client";
import { useDeleteServiceByIdMutation, useGetUpcomingServicesQuery } from "@/redux/api/serviceApi";
import { TService } from "@/types/service.types";
import { Row, Space, Spin, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

export default function UpcomingService() {
  const { data, isLoading} =
    useGetUpcomingServicesQuery({});
  const [deleteServiceById, { isSuccess, isError }] =
    useDeleteServiceByIdMutation({ fixedCacheKey: "Service" });
  // @ts-ignore
  const payload = data?.services?.data?.data;
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
  const deleteService = async (id: string) => {
    try {
      await deleteServiceById(id);
      message.success("Service deleted successfully");
    } catch (error) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };
  return (
    <div className="mt-6">
      <div className="antialiased flex flex-col md:mx-36 justify-center items-center h-[100vh]">
        <div className="relative flex w-full flex-col rounded-[10px] bg-[#50577abd] bg-clip-border">
          <div className="flex h-fit w-full items-center justify-between rounded-t-2xl px-4 pb-[20px] pt-4">
            <h4 className="text-lg font-bold text-[#474E68]">
              Upcoming Services
            </h4>
            <Link href="/dashboard/super_admin/manage_service/create">
              <button className="rounded-[20px] text-gray-50 border-2 hover:border-none px-4 py-2 text-base font-medium text-brand-500 transition duration-200">
                Add Service
              </button>
            </Link>
          </div>
          <div className="w-auto px-4">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr>
                  <th className="pointer">
                    <p className="text-center pb-2 pt-4 text-gray-50 text-xs sm:text-sm">
                      Service
                    </p>
                  </th>
                  <th className="pointer">
                    <p className="text-center pb-2 pt-4 text-gray-50 text-xs sm:text-sm">
                      Price
                    </p>
                  </th>
                  <th className="pointer">
                    <p className="text-center pb-2 pt-4 text-gray-50 text-xs sm:text-sm">
                      Bookings
                    </p>
                  </th>
                  <th className="pointer">
                    <p className="text-center pb-2 pt-4 text-gray-50 text-xs sm:text-sm">
                      Action
                    </p>
                  </th>
                </tr>
              </thead>
              {payload?.map((service: TService) => (
                <tbody key={service?.id} role="rowgroup" className="px-4">
                  <tr>
                    <td className="py-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <Image
                            width={500}
                            height={500}
                            src={service?.imgUrl}
                            className="h-full w-full rounded-full"
                            alt=""
                          />
                        </div>
                        <p className="text-xs font-medium text-gray-50">
                          {service?.name}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 text-sm">
                      <p className="text-md font-medium text-gray-50">
                        $ {service?.price}
                      </p>
                    </td>
                    <td className="py-3 text-sm">
                      <p className="text-md text-center font-medium text-gray-50">
                        {
                          // @ts-ignore
                          service?.bookings?.length || 0
                        }
                      </p>
                    </td>
                    <td className="py-3 text-sm">
                      <div className="mx-2 flex font-bold">
                        <button
                          onClick={() => deleteService(service?.id as string)}
                          className="text-md font-medium text-gray-50"
                        >
                          <AiTwotoneDelete className="text-gray-50 w-6 h-6" />
                        </button>
                        <Link
                          href={`/dashboard/super_admin/manage_service/edit/${service?.id}`}
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
    </div>
  );
}
