"use client";
import SideBar from "@/components/ui/SideBar";
import { useAppSelector } from "@/redux/hooks";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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
          height: "100vh"
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }

  return (
    <Layout hasSider className="bg-[#8d99ae]">
      {/* @ts-ignore */}
      <SideBar />
      <div className="flex justify-center">{children}</div>
    </Layout>
  );
};

export default DashboardLayout;
