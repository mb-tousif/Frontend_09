import { ENUM_SERVICE_CATEGORY } from '@/constants/service';
import Link from 'next/link';
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-[#304FFE] text-2xl text-center pt-8 font-bold">Our All Services</h1>
      <section className="text-gray-600 body-font h-screen flex justify-center items-center">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-sm font-bold">
                    Service Category
                  </h2>
                  <h3 className="mt-2 text-xl font-bold text-yellow-500 text-left">
                    + 220.000 $
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Last Year Revenue
                  </p>
                  <Link href="/services">
                    <button className="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                      Buy our service
                    </button>
                  </Link>
                </div>
                <div className="bg-gradient-to-tr from-yellow-500 to-yellow-400 w-32 h-32  rounded-full shadow-2xl shadow-yellow-400 border-white  border-dashed border-2  flex justify-center items-center ">
                  <div>
                    <h1 className="text-white text-2xl">
                      {ENUM_SERVICE_CATEGORY.HOME_PAINTING}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-sm font-bold">
                    Service Category
                  </h2>
                  <h3 className="mt-2 text-xl font-bold text-green-500 text-left">
                    + 250.000 $
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Last Year Revenue
                  </p>
                  <Link href="/services">
                    <button className="text-sm mt-6 px-4 py-2 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-green-500 outline-none">
                      Buy our service
                    </button>
                  </Link>
                </div>
                <div className="bg-gradient-to-tr from-green-500 to-green-500 w-32 h-32  rounded-full shadow-2xl shadow-green-400 border-white  border-dashed border-2  flex justify-center items-center ">
                  <div>
                    <h1 className="text-white text-2xl">
                      {ENUM_SERVICE_CATEGORY.FURNITURE_PAINTING}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-sm font-bold">
                    Service Category
                  </h2>
                  <h3 className="mt-2 text-xl font-bold text-cyan-500 text-left">
                    + 450.000 $
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Last Year Revenue
                  </p>
                  <Link href="/services">
                    <button className="text-sm mt-6 px-4 py-2 bg-cyan-400  text-white rounded-lg  tracking-wider hover:bg-cyan-500 outline-none">
                      Buy our service
                    </button>
                  </Link>
                </div>
                <div className="bg-gradient-to-tr from-cyan-500 to-cyan-400 w-32 h-32  rounded-full shadow-2xl shadow-cyan-400 border-white  border-dashed border-2  flex justify-center items-center ">
                  <div>
                    <h1 className="text-white text-2xl">
                      {ENUM_SERVICE_CATEGORY.OFFICE_PAINTING}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-sm font-bold">
                    Service Category
                  </h2>
                  <h3 className="mt-2 text-xl font-bold text-red-500 text-left">
                    + 150.000 $
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Last Year Revenue
                  </p>
                  <Link href="/services">
                    <button className="text-sm mt-6 px-4 py-2 bg-red-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none">
                      Buy our service
                    </button>
                  </Link>
                </div>
                <div className="bg-gradient-to-tr from-red-500 to-red-400 w-32 h-32  rounded-full shadow-2xl shadow-red-400 border-white  border-dashed border-2  flex justify-center items-center ">
                  <div>
                    <h1 className="text-white text-2xl">
                      {ENUM_SERVICE_CATEGORY.SHOP_PAINTING}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-sm font-bold">
                    Service Category
                  </h2>
                  <h3 className="mt-2 text-xl font-bold text-indigo-500 text-left">
                    + 000.00 $
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Last Year Revenue
                  </p>
                  <Link href="/services">
                    <button className="text-sm mt-6 px-4 py-2 bg-indigo-400 text-white rounded-lg  tracking-wider hover:bg-indigo-500 outline-none">
                      Buy our service
                    </button>
                  </Link>
                </div>
                <div className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                  <div>
                    <h1 className="text-white text-2xl">Upcoming Service</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
