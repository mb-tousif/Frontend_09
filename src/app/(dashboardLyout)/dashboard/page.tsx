import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import { serviceTypes } from '@/constants/service';

export default function Dashboard() {
  return (
    <div className="p-3">
      <h1 className="text-[#474E68] text-2xl text-center pb-4 pt-8 font-bold">
        Our All Services
      </h1>
      <section className="sm:ml-4 md:ml-8 mb-8 grid md:grid-cols-2 gap-3 md:gap-6 sm:grid-cols-2 mx-auto grid-cols-1">
        {serviceTypes.map((service) => (
          <Link href="/services" key={service.id}>
            <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <Image
                width={400}
                height={400}
                src={service.imgUrl}
                alt=""
                className="w-full min-h-[350px] object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 h-44 ease-in-out duration-700 hover:h-60 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 className="text-2xl font-semibold">{service.name}</h1>
                <p className="mb-2">Description: {service.description}</p>
                <p className="mb-4">Revenue: ${service.revenue}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
