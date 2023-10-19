"use client";
import { ENUM_BOOKING_STATUS } from "@/constants/common";
import { useGetBookingByUserIdQuery } from "@/redux/api/bookingApi";
import { useGetCartByUserIdQuery } from "@/redux/api/cartApi";
import { useAppSelector } from "@/redux/hooks";
import { TBooking } from "@/types/booking.types";
import { TCart } from "@/types/cart.types";
import { Row, Space, Spin } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Booking() {
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const { data: cartData, isLoading: cartLoading } = useGetCartByUserIdQuery(
    {}
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data, isLoading: bookingLoad } = useGetBookingByUserIdQuery({});
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [token, router]);
  if (!isLoading || bookingLoad || cartLoading) {
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
  // @ts-ignore
  const carts = cartData?.carts?.data?.data.filter(
    (cart: TCart) => cart.status === "Pending"
  );
  const bookings = data?.data?.filter( (booking: any) => booking.status === ENUM_BOOKING_STATUS.PENDING || ENUM_BOOKING_STATUS.CONFIRMED);
	console.log(bookings);
	
  if (bookings?.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-70vh">
        <div className="text-2xl font-bold text-gray-700">
          You have no Booking
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-70vh bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Booking Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {bookings?.map((booking: TBooking) => (
              <div
                key={booking.id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <Image
                  width={200}
                  height={200}
                  // @ts-ignore
                  src={booking?.services?.imgUrl}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {
                        // @ts-ignore
                        booking?.services?.name
                      }
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      {
                        // @ts-ignore
                        booking?.services?.description
                      }
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      Booking Status: {booking?.status}
                    </p>
                    <div className="flex justify-center p-2">
                      <button className="px-3 py-2 hover:bg-blue-600 bg-blue-500 text-white text-xs font-bold uppercase rounded">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {carts?.map((cart: TCart) => (
            <div
              key={cart.id}
              className="mt-6 h-full mb-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
            >
              <div className="flex justify-between">
                <p className="text-gray-700">Status: {cart?.status}</p>
                <p className="text-gray-700">Quantity: {cart?.quantity}</p>
              </div>
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Total Price</p>
                <p className="text-gray-700">${cart?.totalPrice}</p>
              </div>
              <hr className="my-4" />
              {/* <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div> */}
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
