"use client";
import PaginationSection from "@/components/ui/PaginationSection";
import { Row, Space, Spin } from "antd";
import React, { useState } from "react";
import { useGetNotificationByUserIdQuery } from "@/redux/api/notificationApi";
import { getUserInfo } from "@/utils/getUserInfo";
import { TNotification } from "@/types/notification.types";

export default function NotificationPage() {
    const user = getUserInfo();
    const { data, isLoading } = useGetNotificationByUserIdQuery(user?.id);
  const notifications = data?.data;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [ read, setRead ] = useState(false);
  const lastServiceIndex = currentPage * postsPerPage;
  const firstServiceIndex = lastServiceIndex - postsPerPage;
  const currentNotification = notifications?.slice(
    firstServiceIndex,
    lastServiceIndex
  );

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
    <div>
      <h1 className="text-center mt-4 text-4xl font-bold text-[#474E68]">
        User Notifications
      </h1>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-[#3c4153ad] text-center text-sm text-gray-500">
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-50">
                Status
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-50">
                Message
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-50">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {currentNotification?.map((notification: TNotification) => (
              <tr key={notification?.id} className="hover:bg-gray-500">
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    {read ? "Read" : "Unread"}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-50">
                  {read
                    ? notification?.message
                    : notification?.message.slice(0, 50)
                  }
                  <p
                    onClick={() => setRead(!read)}
                    className="ml-3 cursor-pointer"
                  >
                    {read ? "Show Less" : "Show More"}
                  </p>

                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white"
                        className="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white"
                        className="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationSection
          totalData={notifications?.length}
          dataPerPage={currentNotification?.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
