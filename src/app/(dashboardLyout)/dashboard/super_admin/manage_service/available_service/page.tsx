"use client";
import ServiceCard from '@/components/ui/ServiceCard';
import { useGetAvailableServicesQuery } from '@/redux/api/serviceApi';
import { Row, Space, Spin } from 'antd';
import React from 'react'

export default function AvailableService() {
  const { data, isLoading } = useGetAvailableServicesQuery({});
  // @ts-ignore
  const payload = data?.services?.data?.data
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
        Available Services
      </h1>
      <ServiceCard payload={payload} />
    </div>
  );
}
