import React from 'react';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <div className="min-h-70vh flex items-center">
      <div className="bg-main sm:m-3 md:m-6 bg-cover w-full rounded-3xl">
        <div className="w-full bg-[#141414b0] rounded-3xl p-4 py-24">
          <div className="container mx-auto text-center text-gray-50">
            <h1 className="sm:text-3xl md:text-5xl text-lg font-medium mb-6">
              Welcome to Painting Service Ltd.
            </h1>
            <p className="sm:text-xl md:text-3xl mb-12">
              Bringing Colors to Life, <br /> One Stroke at a Time !
            </p>
            <Link
              href="/services"
              className="bg-[#50577A] hover:bg-[#474E68] text-gray-50 py-4 px-12 rounded-xl transition duration-300 ease-in-out"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
