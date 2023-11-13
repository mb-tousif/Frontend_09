import React from "react";
import { Button, Result } from "antd";
import Link from "next/link";
import { CloseCircleOutlined } from "@ant-design/icons";

const PaymentFailed: React.FC = () => (
  <Result
    status="warning"
    icon={<CloseCircleOutlined />}
    title="Oops! Payment Cancelled!"
    subTitle="If you want to buy our service, please try again."
    extra={[
      <Button key="buy">
        <Link href="/cart">Go Cart Page</Link>
      </Button>,
    ]}
  />
);

export default PaymentFailed;
