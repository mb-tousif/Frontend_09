import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import { serviceTypes } from '@/constants/service';

export default function Dashboard() {
  return (
    <div className='p-3'>
      <h1 className="text-gray-50 text-2xl text-center pb-4 pt-8 font-bold">
        Our All Services
      </h1>
      <section className="grid md:grid-cols-3 gap-3 sm:grid-cols-2 mx-auto grid-cols-1">
        {serviceTypes.map((service) => (
            <div key={service.id} className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <Image width={400} height={400} src={service.imgUrl} alt="" className="w-full min-h-[350px] object-cover rounded-lg"/>
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 className="text-2xl font-semibold">{service.name}</h1>
                <p className="mt-2">Revenue: ${service.revenue}</p>
              </div>
            </div>
        ))}
      </section>
    </div>
  );
}
