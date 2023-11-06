'use client'
import React from 'react'
import { useGetServiceByIdQuery } from '@/redux/api/serviceApi'
import { Row, Space, Spin, message } from 'antd';
import { TService } from '@/types/service.types';
import Image from 'next/image';
import { ENUM_SERVICE_STATUS } from '@/constants/service';
import { TCart } from '@/types/cart.types';
import { useCreateCartMutation } from '@/redux/api/cartApi';
import { useRouter } from 'next/navigation';
export default function AddToCart({ params }: {params: any}) {
  const { data, isLoading } = useGetServiceByIdQuery(params?.cartId);
  const [createCart, { isSuccess, isError, error}] = useCreateCartMutation();
  const router = useRouter();
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
  const service = data?.data as TService;
  const cartData: TCart = {
    serviceId: service?.id as string,
  };
  const handleAddToCart = (data: TCart) => {
    createCart(data);
  };
  if (isSuccess) {
    router.push('/booking');
    message.success("Cart added, please confirm your booking");
  }
  if (isError) {
    // @ts-ignore
    message.error( error?.data?.message);
  }
  return (
    <div className="flex justify-center p-6 text-blue-50">
      <div
        key={service?.id}
        className="mt-6 h-full rounded-xl bg-[#3c4153ad] pb-6 shadow-md md:mt-0 md:w-4/6"
      >
        <div className="flex justify-center">
          <Image
            width={200}
            height={200}
            src={service?.imgUrl}
            alt="product-image"
            className="w-full h-48 rounded-lg m-3 sm:w-4/6"
          />
        </div>
        <div className="flex justify-center flex-col text-center">
          <p>Quantity: {service?.name}</p>
          <p>Status: {service?.schedule}</p>
          <p>Status: {service?.status}</p>
        </div>
        <div className="mb-2 flex justify-evenly">
          <p>Total Price</p>
          <p>${service?.price}</p>
        </div>
        <hr className="my-4" />
        {service?.status === ENUM_SERVICE_STATUS.UPCOMING ? (
          <div className="flex justify-center">
            <button
              disabled
              className="mt-3 w-3/5 rounded-md bg-red-500 py-1.5 font-medium"
            >
              Add to cart
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={() => {
                handleAddToCart(cartData);
              }}
              className="mt-3 w-3/5 rounded-md border-gray-50 border-2 py-1.5 font-medium text-gray-50 hover:border-none hover:bg-[#474E68]"
            >
              Add to cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
