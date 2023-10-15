"use client";
import { useAppSelector } from '@/redux/hooks';
import { Row, Space, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Services() {
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [token, router]);

  if (!isLoading) {
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
    <div>Services Page!</div>
  )
}
