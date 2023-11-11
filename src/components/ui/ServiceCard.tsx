import { TService } from "@/types/service.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServiceCard({payload}:{payload:TService[] | undefined}) {
  const services = payload;
  return (
    <div className="grid text-gray-50 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-2 mt-6">
      {services?.map((service) => (
        <div
          key={service?.id}
          className="relative bg-[#474E68] rounded-2xl mx-auto w-full max-w-sm p-6"
        >
          <Link
            href={`/services/${service?.id}`}
            className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
          >
            <div className="rounded-lg">
              <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
                <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                  <Image
                    className="absolute inset-0 object-cover object-center w-full h-full rounded-lg"
                    src={service?.imgUrl}
                    alt="Statue of Liberty"
                    width={500}
                    height={500}
                  />
                </div>
                <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                  {service?.status}
                </span>
              </div>
              <div className="">
                <div className="mt-4 grid grid-cols-2">
                  <div className="flex items-center">
                    <div className="relative">
                      <h2
                        className="line-clamp-1 text-base font-medium md:text-lg"
                        title={service?.category}
                      >
                        {service?.category}
                      </h2>
                      <p
                        className="mt-2 line-clamp-1 text-sm"
                        title={service?.name}
                      >
                        {service?.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                      <p className="text-lg">Price: ${service?.price}</p>
                      <p className="text-sm">
                        Duration: ${service?.schedule}
                      </p>
                    </p>
                  </div>
                </div>
                <div className="mt-2 border-t border-gray-200 pt-3">
                  {service?.description}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
