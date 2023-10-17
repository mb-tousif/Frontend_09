"use client";
import HeroBanner from "@/components/ui/HeroBanner";
import ServiceCard from "@/components/ui/ServiceCard";
import ServiceSection from "@/components/ui/ServiceSection";
import Subscribe from "@/components/ui/Subscribe";
import { useGetAvailableServicesQuery, useGetUpcomingServicesQuery } from "@/redux/api/serviceApi";
import { Row, Space, Spin } from "antd";

export default function Home() {
  // const query: Record<string, any> = {};
  const { data: availableData, isLoading: availableIsLoading } = useGetAvailableServicesQuery({});
  const { data: upcomingData, isLoading: upcomingIsLoading } = useGetUpcomingServicesQuery({});
  if (availableIsLoading || upcomingIsLoading) {
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
  const payload = availableData?.services?.data?.data.slice(0, 3);
  // @ts-ignore
  const upcomingPayload = upcomingData?.services?.data?.data.slice(0, 3);
  return (
    <div className="">
      <HeroBanner />
      <ServiceSection />
      <div className="mt-6">
        <h1 className="text-center text-4xl font-bold text-gray-50">
          Available Services
        </h1>
        <ServiceCard payload={payload} />
      </div>
      <div className="mt-6">
        <h1 className="text-center text-4xl font-bold text-gray-50">
          Upcoming Services
        </h1>
        <ServiceCard payload={upcomingPayload} />
      </div>
      <Subscribe />
    </div>
  );
}
