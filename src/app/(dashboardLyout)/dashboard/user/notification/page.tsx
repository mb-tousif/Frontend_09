"use client";
import { Row, Space, Spin } from "antd";
import { useState } from "react";
import { useGetNotificationByUserIdQuery } from "@/redux/api/notificationApi";
import { getUserInfo } from "@/utils/getUserInfo";
import { TNotification } from "@/types/notification.types";

export default function NotificationPage() {
  const user = getUserInfo();
  const { data, isLoading } = useGetNotificationByUserIdQuery(user?.id);
  const notifications = data?.data;

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
    <div className="p-4">
      <div className="xl:w-full py-5 px-8">
        <div className="flex items-center mx-auto">
          <div className="container mx-auto">
            <div className="mx-auto xl:w-full">
              <p className="text-lg text-gray-700 dark:text-gray-100 font-bold">
                Notifications
              </p>
              {notifications?.map((notification: TNotification) => (
                <div key={notification.id} className="p-2">
                  <p className="text-sm border-gray-400 border-b flex text-gray-600 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon mr-2"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                    {notification?.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
