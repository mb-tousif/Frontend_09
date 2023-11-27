import Image from 'next/image';
import React from 'react'

export default function ServiceHeroSection() {
  return (
    <div className="flex flex-col mt-4 justify-center">
      <div className="relative md:p-2">
        <Image
          width={500}
          height={500}
          className="hidden h-[400px] object-fill rounded-3xl sm:block w-full"
          src="https://img.freepik.com/premium-photo/blue-paint-can-with-paint-brush-it-black-background_9493-1043.jpg"
          alt="Painting Service"
        />
        <Image
          width={500}
          height={500}
          className="sm:hidden w-full rounded-lg"
          src="https://img.freepik.com/free-photo/top-view-paint-can_23-2149705393.jpg"
          alt="Painting Service"
        />
        <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="text-3xl sm:text-4xl font-semibold leading-9 text-white"
          >
            Affordable Elegance: Painting Dreams on a Budget
          </p>
        </div>
      </div>
    </div>
  );
}
