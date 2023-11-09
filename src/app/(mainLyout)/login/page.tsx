"use client";
import { Button, Col, Input, Row, message } from "antd";
import loginImage from "@/assets/login.svg"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/userApi";
import { useAppDispatch } from "@/redux/hooks";
import { setToken } from "@/redux/slices/authSlice";
import Form from "@/components/form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/form/FormInput";
import { loginSchema } from "@/schema/userSchema";
import Link from "next/link";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      // console.log(data);
      const res = await userLogin({ ...data }).unwrap();
      message.success(res?.message);
      dispatch(setToken(res.data.token));
      router.push("/services");
    } catch (err: any) {
      message.error(err.data?.message);
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
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
          className="text-gray-50 text-2xl font-bold"
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={zodResolver(loginSchema)}>
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
            <Button
              htmlType="submit"
              className="bg-[#50577A] hover:bg-[#474E68] text-gray-50 rounded-full"
            >
              Login
            </Button>
            <div className="text-center p-3">
              <span className="text-sm md:text-base text-[#474E68] align-baseline">
                If you don&rsquo;t have an account ?
                <Link href="/register" className="ml-2 text-[#474E68]">
                  Register here.
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;