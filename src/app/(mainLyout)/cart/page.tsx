"use client"
import { ENUM_CART_STATUS } from '@/constants/common';
import {
  useDeleteCartByIdMutation,
  useGetCartByUserIdQuery,
  useIncrementCartQuantityMutation,
  useDecrementCartQuantityMutation,
} from "@/redux/api/cartApi";
import { useCreatePaymentMutation } from '@/redux/api/paymentApi';
import { useAppSelector } from '@/redux/hooks';
import { TCart } from '@/types/cart.types';
import { TPayment } from '@/types/payment.types';
import { Row, Space, Spin, message } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [loading, setIsLoading] = useState<boolean>(false);
    const { data, isLoading } =useGetCartByUserIdQuery({});
    const [deleteCartById] = useDeleteCartByIdMutation();
    const [incrementCartQuantity] = useIncrementCartQuantityMutation();
    const [ decrementCartQuantity, { isError, isSuccess }] = useDecrementCartQuantityMutation();
    const [ createPayment ] = useCreatePaymentMutation();
    useEffect(() => {
      if (!token) {
        router.push("/login");
      }
      setIsLoading(true);
    }, [token, router, loading]);
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
      try {
        deleteCartById(id);
        message.success("Cart deleted successfully");
      } catch (error) {
        message.error("Cart cannot be deleted");
      }
    };

    const handleQuantityCart = ( id: string) => {
      try {
        incrementCartQuantity(id);
        message.success("Cart quantity incremented successfully");
      } catch (error) {
        message.error("Cart quantity cannot be incremented");
      }
    };

    const handleDecrementCart =async (id: string) => {
      await decrementCartQuantity(id);
      if (isSuccess) {
        message.success("Cart quantity decremented successfully");
      }
      if (isError) {
        message.error("Cart quantity cannot be decremented");
      }
    };
    
    // @ts-ignore
    const carts = data?.data?.data.filter(
      (cart: any) => cart.status === ENUM_CART_STATUS.BOOKED
    );

    const handlePayment = async (cart:TCart) => {
      // const paymentData:TPayment = ;
      const res = await createPayment({
        cartId: cart?.id,
        serviceId: cart?.serviceId,
        amount: Number(cart?.totalPrice),
      }).unwrap();
      router.push(`${res?.data}`);
    };

    if (carts?.length === undefined || carts?.length ===0) {
      return (
        <div className="flex justify-center items-center min-h-70vh">
          <p className="text-2xl font-bold text-[#474E68]">
            You have no Cart which is booked
          </p>
        </div>
      );
    }
    
    return (
      <div className="min-h-70vh p-2">
        <div className="text-2xl text-center mt-5 mb-8 font-bold text-[#474E68]">
          Your all booked cart
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {carts?.map((cart: TCart) => (
            <div
              key={cart.id}
              className="sm:flex max-w-3xl rounded-lg mx-auto my-auto min-h-50vh bg-[#3c4153ad]"
            >
              <div
                className="sm:w-3/5 bg-cover aspect-video"
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
                  <button
                    onClick={() => handleQuantityCart(cart?.id as string)}
                    className="mt-6 w-full rounded-md text-gray-50 bg-[#50577A] hover:bg-[#474E68] py-1.5 font-medium"
                  >
                    Increment Quantity
                  </button>
                  <button
                    onClick={() => handleDecrementCart(cart?.id as string)}
                    className="mt-6 w-full rounded-md text-gray-50 bg-[#50577A] hover:bg-[#474E68] py-1.5 font-medium"
                  >
                    Decrement Quantity
                  </button>
                </div>
                {carts.length > 0 ? (
                  <div className="flex item-center justify-between mt-3">
                    <button 
                      onClick={() => handlePayment(cart)}
                    className="px-3 bg-[#50577A] hover:bg-[#474E68] py-2 text-xs font-bold uppercase rounded">
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
