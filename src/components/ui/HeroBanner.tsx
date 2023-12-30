import React from 'react';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <div className="min-h-70vh flex items-center">
      <div className="bg-main sm:m-3 md:m-6 bg-cover w-full rounded-3xl">
        <div className="w-full bg-[#141414b0] rounded-3xl p-4 py-24">
          <div className="container mx-auto text-center text-gray-50">
            <h1
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="sm:text-3xl first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl text-center md:text-4xl text-lg font-medium mb-6"
            >
              Welcome to Painting Service Ltd.
            </h1>
            <p
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="sm:text-xl md:text-3xl mb-12"
            >
              Bringing Colors to Life, <br /> One Stroke at a Time !
            </p>
            <Link
              href="/services"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
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
