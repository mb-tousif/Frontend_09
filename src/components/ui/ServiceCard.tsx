import { TService } from "@/types/service.types";
import React from "react";

export default function ServiceCard({props}:TService[]) {
  return (
    <div>
      <div className="grid text-gray-50 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 p-2 mt-6">
        <div className="relative bg-gray-700 rounded-2xl mx-auto w-full max-w-sm p-6">
          <a
            href="#"
            className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
          >
            <div className="rounded-lg">
              <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
                <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                  <img
                    src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />
                </div>
                <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                  Featured
                </span>
              </div>

              <div className="">
                <div className="mt-4 grid grid-cols-2">
                  <div className="flex items-center">
                    <div className="relative">
                      <h2
                        className="line-clamp-1 text-base font-medium md:text-lg"
                        title="New York"
                      >
                        Statue of Liberty
                      </h2>
                      <p
                        className="mt-2 line-clamp-1 text-sm"
                        title="New York, NY 10004, United States"
                      >
                        New York, NY 10004, United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                      <span className="text-sm uppercase"> $ </span>
                      <span className="text-lg">3,200</span>/m
                    </p>
                  </div>
                </div>

                <div className="mt-2 border-t border-gray-200 pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  laboriosam labore obcaecati hic fugit exercitationem ad
                  blanditiis inventore excepturi cumque!
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
