"use client"
import { useGetCartByUserIdQuery } from '@/redux/api/cartApi';
import { TCart } from '@/types/cart.types';
import { Row, Space, Spin } from 'antd';

export default function CartPage() {
    const { data, isLoading } =useGetCartByUserIdQuery({});
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
    // @ts-ignore
    const carts = data?.carts?.data?.data;
    
    return (
      <div>
        CartPage
        <div className="flex p-6 justify-center">
          {carts?.map((cart: TCart) => (
            <div
              key={cart.id}
              className="flex max-w-3xl min-h-50vh bg-white shadow-lg rounded-lg overflow-hidden"
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
                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">$220</h1>
                  <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                    Add to Card
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
