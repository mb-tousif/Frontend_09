import React from "react";
import { Button, Result } from "antd";
import Link from "next/link";

const PaymentSuccess: React.FC = () => (
  <Result
    status="success"
    title="Successfully finished payment!"
    subTitle="Thank you for your purchasing our service. Any questions, please contact us at 12345678. Give your feedback to us."
    extra={[
      <Button key="buy">
        <Link
         href="/">
            Go Home
        </Link>
    </Button>,
    ]}
  />
);

export default PaymentSuccess;
