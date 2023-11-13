import React from "react";
import { Button, Result } from "antd";
import Link from "next/link";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const PaymentFailed: React.FC = () => (
  <Result
    status="error"
    icon={<ExclamationCircleOutlined />}
    title="Oops! Payment Failed!"
    subTitle="Sorry, your payment failed. Please try again."
    extra={[
      <Button key="buy">
        <Link href="/cart">
          Go Cart Page
        </Link>
      </Button>,
    ]}
  />
);

export default PaymentFailed;
