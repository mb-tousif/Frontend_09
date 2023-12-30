import { services } from '@/constants/service';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function ServiceSection() {
  return (
    <div className="p-2 md:p-6">
      <h1
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="sm:text-3xl first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl text-center md:text-4xl text-lg font-medium mb-6 text-[#474E68]"
      >
        Our Service Category
      </h1>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="grid text-gray-50 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full mx-auto relative shadow-md rounded-lg cursor-pointer"
          >
            <Image
              width={400}
              height={400}
              src={service.imgUrl}
              alt=""
              className="w-full min-h-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-48 ease-in-out duration-700 hover:h-64 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
              <h1 className="text-2xl font-semibold">{service.name}</h1>
              <p className="mb-2">Description: {service.description}</p>
              <Link
                href="/services"
                className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-[#50577A] hover:bg-[#474E68] text-gray-50 transition duration-300 ease-in-out"
              >
                Our All Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className=" h-5 w-5 ms-3"
                >
                  <path
                    fill="currentColor"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
