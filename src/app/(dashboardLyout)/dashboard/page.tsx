import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import { serviceTypes } from '@/constants/service';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-gray-50 text-2xl text-center pt-8 font-bold">
        Our All Services
      </h1>
      <section className="grid md:grid-cols-3 gap-3 sm:grid-cols-2 mx-auto grid-cols-1">
        {serviceTypes.map((service) => (
          <div key={service.id} className="sm:m-4 md:m-6 mx-auto">
            <div className="flex bg-[#284b63a6] rounded-3xl flex-wrap text-center">
              <div className="p-4 w-full hover:scale-105 duration-500">
                <div className="flex items-center  justify-between p-4 rounded-lg shadow-md">
                  <div>
                    <h2 className="text-sm font-bold text-gray-50">
                      Service Category
                    </h2>
                    <h1 className="text-2xl">{service.name}</h1>
                    <h3 className="mt-2 text-xl font-bold text-gray-50 text-left">
                      {service.revenue} $
                    </h3>
                    <p className="text-sm text-gray-50 font-semibold">
                      Last Year Revenue
                    </p>
                    <Link href="/services">
                      <button className="text-sm mt-6 px-4 py-2 rounded-lg  tracking-wider bg-[#50577A] hover:bg-[#474E68] text-gray-50 outline-none">
                        Buy our service
                      </button>
                    </Link>
                  </div>
                  <div className="relative">
                    <Image
                      src={service.imgUrl}
                      width={200}
                      height={200}
                      alt="Picture of the author"
                      className="w-full h-full object-cover object-center items-center "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
