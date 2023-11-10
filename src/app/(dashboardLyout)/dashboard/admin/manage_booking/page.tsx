"use client"
import PaginationSection from '@/components/ui/PaginationSection';
import { ENUM_BOOKING_STATUS} from '@/constants/common';
import { useGetAllBookingsQuery } from '@/redux/api/bookingApi';
import { useDebounced } from '@/redux/hooks';
import { TBooking } from '@/types/booking.types';
import { Input, Row, Space, Spin } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export default function ManageBookingByAdmin() {
  const [search, setSearch] = useState<string>("");
  const query: Record<string, any> = {};
  const debouncedSearchTerm = useDebounced({
    searchQuery: search,
    delay: 600,
  });
  if (!!debouncedSearchTerm) {
    query["search"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useGetAllBookingsQuery({...query});
  // @ts-ignore
  const bookings:TBooking[] = data?.bookings?.data?.data;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const lastServiceIndex = currentPage * postsPerPage;
  const firstServiceIndex = lastServiceIndex - postsPerPage;
  const currentBookings = bookings?.slice(firstServiceIndex, lastServiceIndex);
  
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
    <div>
      <h1 className="text-center mt-4 text-4xl font-bold text-[#474E68]">
        All Bookings
      </h1>
      <section className="container px-4 mx-auto">
        <div className="mt-6 sm:flex sm:items-center sm:justify-end">
          <div className="relative flex items-center mt-4 md:mt-0">
            <Input
              size="large"
              placeholder="Search ..."
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "80%",
                color: "white",
              }}
              className="bg-[#474E68] border-none text-gary-50 placeholder:text-gray-50"
            />
          </div>
        </div>
        <div className="flex justify-center mb-6 sm:ml-8 mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-[#474E68]">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-50"
                      >
                        <button className="flex items-center gap-x-3 focus:outline-none">
                          <span>Services</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-50"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-50"
                      >
                        About
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-50"
                      >
                        Users
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-50"
                      >
                        Manage Booking
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#474E68] divide-y divide-gray-200">
                    {currentBookings?.map((booking: TBooking) => (
                      <tr key={booking.id}>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                          <div>
                            <h2 className="font-medium text-gray-50">
                              {
                                // @ts-ignore
                                booking?.services?.name
                              }
                            </h2>
                            <p className="text-sm font-normal text-gray-50">
                              Price:$
                              {
                                // @ts-ignore
                                booking?.services?.price
                              }
                            </p>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                          {booking?.status === ENUM_BOOKING_STATUS.CONFIRMED ? (
                            <div className="inline px-3 py-1 text-sm font-normal rounded-full text-gray-50 gap-x-2 bg-emerald-400">
                              {booking?.status}
                            </div>
                          ) : (
                            <div className="inline px-3 py-1 text-sm font-normal rounded-full text-gray-50 gap-x-2 bg-red-400">
                              {booking?.status}
                            </div>
                          )}
                        </td>
                        <td className="text-center py-4 text-sm whitespace-nowrap">
                          <div>
                            <h4 className="text-gray-50">
                              Duration: {booking?.schedule}
                            </h4>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex justify-center items-center">
                            <Image
                              width={30}
                              height={30}
                              className="object-cover w-8 h-8 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                              src={
                                // @ts-ignore
                                booking?.users?.imgUrl
                              }
                              alt=""
                            />
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="text-gray-50 flex justify-evenly whitespace-no-wrap">
                            <button>
                              <AiFillDelete className="text-red-300 h-6 w-6" />
                            </button>
                            <Link
                              href={`/dashboard/admin/manage_booking/edit/${booking.id}`}
                            >
                              <AiFillEdit className="text-emerald-300 ml-3 h-6 w-6" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PaginationSection
        totalData={bookings?.length}
        dataPerPage={currentBookings?.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
