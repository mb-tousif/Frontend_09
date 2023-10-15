import React from 'react';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <div className="min-h-70vh bg-[#426A56] flex items-center">
      <div className="w-full py-24">
        <div className="container mx-auto text-center text-gray-50">
          <h1 className="sm:text-3xl md:text-5xl text-lg font-medium mb-6">
            Bringing Colors to Life, One Stroke at a Time!
          </h1>
          <p className="text-lg mb-12">
            Transforming spaces through artistry and precision. Our painters
            bring your vision to life, one brushstroke at a time. Your dream,
            our canvas.
          </p>
          <Link
            href="/services"
            className="bg-[#2D5A84] text-white py-4 px-12 rounded-xl hover:bg-[#127A9E] transition duration-300 ease-in-out"
          >
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
