"use client";
import PaginationSection from '@/components/ui/PaginationSection';
import { useAllServicesQuery, useDeleteServiceByIdMutation } from '@/redux/api/serviceApi';
import { TService } from '@/types/service.types';
import { Row, Space, Spin, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function ManageService() {
  const [deleteServiceById, { isError}] =
    useDeleteServiceByIdMutation({ fixedCacheKey: "Service" });
  const { data, isLoading } = useAllServicesQuery({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const lastServiceIndex = currentPage * postsPerPage;
  const firstServiceIndex = lastServiceIndex - postsPerPage;
  const deleteService = async (id: string) => {
    try {
      await deleteServiceById(id);
       message.success("User deleted successfully");
    } catch (error) {
      // @ts-ignore
      message.error(isError?.data?.message);
    }
    
  };
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
  // @ts-ignore
  const services: TService[] = data?.services?.data?.data;
  const currentServices = services?.slice(firstServiceIndex, lastServiceIndex);
  return (
    <div>
      <h1 className="text-center mt-4 text-4xl font-bold text-[#474E68]">
        Manage Services
      </h1>
      <div className="sm:p-8 md:p-12">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal bg-[#3c4153ad]">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                    Service Details
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentServices.map((service: TService) => (
                  <tr key={service?.id}>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <Image
                            className="w-full h-full rounded-full"
                            width={50}
                            height={50}
                            src={service?.imgUrl}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-50 text-sm whitespace-no-wrap">
                            {service?.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                      {service?.status === "Available" ? (
                        <span className="relative inline-block px-3 py-1 font-semibold text-gray-50 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-400 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">{service?.status}</span>
                        </span>
                      ) : (
                        <span className="relative inline-block px-3 py-1 font-semibold text-gray-50 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-red-400 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">{service?.status}</span>
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                      <div className="text-gray-50 flex justify-evenly whitespace-no-wrap">
                        <button
                          onClick={() => deleteService(service?.id as string)}
                        >
                          <AiFillDelete className="text-gray-50 h-6 w-6" />
                        </button>
                        <Link
                          href={`/dashboard/super_admin/manage_service/edit/${service.id}`}
                        >
                          <AiFillEdit className="text-gray-50 ml-3 h-6 w-6" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <PaginationSection
          totalData={services?.length}
          dataPerPage={currentServices?.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
