"use client"
import { ENUM_CART_STATUS } from '@/constants/common';
import { useDeleteCartByIdMutation, useGetCartByUserIdQuery } from '@/redux/api/cartApi';
import { TCart } from '@/types/cart.types';
import { Row, Space, Spin, message } from 'antd';

export default function CartPage() {
    const { data, isLoading } =useGetCartByUserIdQuery({});
    const [deleteCartById, { isSuccess, isError, error}] = useDeleteCartByIdMutation();
    if ( isLoading ) {
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
    const carts = data?.data?.data
    

    if (carts?.length === 0) {
      return (
        <div className="flex justify-center items-center min-h-70vh">
          <div className="text-2xl font-bold text-gray-700">
            You have no Cart
          </div>
        </div>
      );
    }
    
    return (
      <div className='min-h-70vh'>
        <div className="flex flex-col justify-center">
          {carts?.map((cart: TCart) => (
            <div
              key={cart.id}
              className="flex max-w-3xl m-6 min-h-50vh bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div
                className="w-3/5 bg-cover"
                style={{
                  // @ts-ignore
                  backgroundImage: `url(${cart?.services?.imgUrl})`,
                  objectFit: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                  {/* @ts-ignore */}
                  {cart?.services?.name}
                </h1>
                <p className="mt-2 text-gray-600 text-sm">
                  {/* @ts-ignore */}
                  {cart?.services?.description}
                </p>
                {
                  carts.length > 0 ? (
                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">{cart?.totalPrice}</h1>
                  <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                    Buy now
                  </button>
                  <button 
                  onClick={() => handleDeleteCart(cart?.id as string)}
                  className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                    Delete cart
                  </button>
                </div>
                  ): (
                    <div className="flex item-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">{cart?.totalPrice}</h1>
                  <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                    Buy now
                  </button>
                </div>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
