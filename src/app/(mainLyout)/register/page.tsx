"use client";
import { Button, Col, Row, message } from "antd";
import registerImage from "@/assets/register.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { useUserRegisterMutation } from "@/redux/api/userApi";
import Form from "@/components/form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/form/FormInput";
import FormTextArea from "@/components/form/FormTextArea";
import UploadImage from "@/components/form/UploadImage";

type FormValues = {
  id: string;
  password: string;
};

const RegisterPage = () => {
  const [userRegister] = useUserRegisterMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      console.log(data);
      const res = await userRegister({ ...data }).unwrap();
      if (res) {
        message.success("User registered successfully");
      }
      router.push("/login");
    } catch (err: any) {
      message.error(err.data.message);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "70vh",
        paddingBottom: "20px",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={registerImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          Register your account!
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={zodResolver}>
            <div>
              <FormInput
                name="name"
                type="text"
                size="large"
                label="Name"
                required
              />
            </div>
            <div>
              <FormInput
                name="email"
                type="email"
                size="large"
                label="Email"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
                required
              />
            </div>
            <div>
              <FormInput
                name="contact"
                type="text"
                size="large"
                label="Contact Number"
                required
              />
            </div>
            <div>
              <FormTextArea
                name="address"
                rows={3}
                label="Address"
                placeholder="Enter your address"
              />
            </div>
            <div className="p-2">
              <UploadImage name="file" />
            </div>
            <div className="flex justify-center">
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterPage;
