import { services } from '@/constants/service';
import Link from 'next/link';
import React from 'react'

export default function ServiceSection() {
  return (
    <div className="p-2 md:p-6">
      <h1 className="text-[#245b8f] font-medium sm:text-2xl md:text-3xl text-center">
        Our Service Category
      </h1>
      <div className="grid text-gray-50 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 p-2 mt-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-7 rounded-xl bg-slate-500 dark:bg-neutral-700/70"
          >
            <h3 className="text-xl font-semibold mb-7">{service.name}</h3>
            <p className="font-medium leading-7 mb-6 dark:text-gray-400">
              {service.description}
            </p>
            <Link
              href="/services"
              className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-[#2D5A84] hover:bg-[#127A9E] transition duration-300 ease-in-out"
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
        ))}
      </div>
    </div>
  );
}
