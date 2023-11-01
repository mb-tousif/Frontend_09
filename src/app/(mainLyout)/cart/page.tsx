"use client"
import { ENUM_CART_STATUS } from '@/constants/common';
import { useDeleteCartByIdMutation, useGetCartByUserIdQuery } from '@/redux/api/cartApi';
import { useAppSelector } from '@/redux/hooks';
import { TCart } from '@/types/cart.types';
import { Row, Space, Spin, message } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [loading, setIsLoading] = useState<boolean>(false);
    const { data, isLoading } =useGetCartByUserIdQuery({});
    const [deleteCartById, { isSuccess, isError, error}] = useDeleteCartByIdMutation();
    useEffect(() => {
      if (!token) {
        router.push("/login");
      }
      setIsLoading(true);
    }, [token, router]);
    if (  isLoading  ) {
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
    const handleDeleteCart = ( id: string) => {
      deleteCartById(id);
    };
    if (isSuccess) {
      message.success("Cart deleted successfully");
    }
    if (isError) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
    // @ts-ignore
    const carts = data?.data?.data.filter(
      (cart: any) => cart.status === ENUM_CART_STATUS.BOOKED
    );

    if (carts?.length === undefined || carts?.length ===0) {
      return (
        <div className="flex justify-center items-center min-h-70vh">
          <div className="text-2xl font-bold text-gray-700">
            You have no Cart which is booked
          </div>
        </div>
      );
    }
    
    return (
      <div className="min-h-70vh p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {carts?.map((cart: TCart) => (
            <div
              key={cart.id}
              className="sm:flex max-w-3xl rounded-lg mx-auto my-auto min-h-50vh bg-[#3c4153ad]"
            >
              <div
                className="sm:w-3/5 bg-cover"
                style={{
                  // @ts-ignore
                  backgroundImage: `url(${cart?.services?.imgUrl})`,
                  objectFit: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div className="w-2/3 p-4 text-gray-50">
                <h1 className="font-bold text-2xl">
                  {/* @ts-ignore */}
                  {cart?.services?.name}
                </h1>
                <p className="mt-2 text-sm text-justify">
                  {/* @ts-ignore */}
                  {cart?.services?.description}
                </p>
                <div
                  key={cart.id}
                  className="mt-6 w-full h-auto mb-6 rounded-lg border bg-[#3c4153ad] p-6"
                >
                  <div className="flex justify-between">
                    <p className="text-gray-50">Status: {cart?.status}</p>
                    <p className="text-gray-50">Quantity: {cart?.quantity}</p>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <p className="text-gray-50">Total Price</p>
                    <p className="text-gray-50">${cart?.totalPrice}</p>
                  </div>
                  <hr className="my-4" />
                  <button className="mt-6 w-full rounded-md text-gray-50 bg-[#50577A] hover:bg-[#474E68] py-1.5 font-medium">
                    Increment Quantity
                  </button>
                </div>
                {carts.length > 0 ? (
                  <div className="flex item-center justify-between mt-3">
                    <button className="px-3 bg-[#50577A] hover:bg-[#474E68] py-2 text-xs font-bold uppercase rounded">
                      Buy now
                    </button>
                    <button
                      onClick={() => handleDeleteCart(cart?.id as string)}
                      className="px-3 bg-[#50577A] hover:bg-[#474E68] py-2 text-xs font-bold uppercase rounded"
                    >
                      Delete cart
                    </button>
                  </div>
                ) : (
                  <div className="flex item-center justify-between mt-3">
                    <button className="px-3 py-2 bg-[#50577A] hover:bg-[#474E68] text-xs font-bold uppercase rounded">
                      Buy now
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
