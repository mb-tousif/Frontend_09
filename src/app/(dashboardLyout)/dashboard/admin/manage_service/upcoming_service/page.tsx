"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { useGetUpcomingServicesQuery } from "@/redux/api/serviceApi";
import { Row, Space, Spin } from "antd";

export default function UpcomingService() {
  const { data, isLoading } = useGetUpcomingServicesQuery({});
  // @ts-ignore
  const upcomingPayload =  data?.services?.data?.data;
  
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
    <div className="mt-6">
      <h1 className="text-center text-4xl font-bold text-gray-50">
        Upcoming Services
      </h1>
      <ServiceCard payload={upcomingPayload} />
    </div>
  );
}
