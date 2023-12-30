import Image from 'next/image'

export default function OurClient() {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 mt-8 lg:px-8 text-center">
      <div className="mx-auto p-4 text-center bg-[#50577A] rounded-2xl pb-8">
        <h2
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600" 
        className="text-2xl font-normal pt-8 text-gray-50 sm:text-4xl sm:leading-tight">
            Our Clients Who Trust Us
        </h2>
        <div className="grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-2 md:mt-20 md:grid-cols-4">
          <div className="bg-white rounded-2xl h-12 flex shadow-lg items-center justify-center">
            <Image
              width={200}
              height={200}
              className="object-contain w-full h-6 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png"
              alt=""
            />
          </div>
          <div className="bg-white rounded-2xl h-12 flex shadow-lg items-center justify-center">
            <Image
              width={200}
              height={200}
              className="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
              alt=""
            />
          </div>
          <div className="bg-white rounded-2xl h-12 flex shadow-lg items-center justify-center">
            <Image
              width={200}
              height={200}
              className="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
              alt=""
            />
          </div>
          <div className="bg-white rounded-2xl h-12 flex shadow-lg items-center justify-center">
            <Image
              width={200}
              height={200}
              className="object-contain w-full mx-auto h-7"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
              alt=""
            />
          </div>
          <div className="bg-white rounded-2xl h-12 flex shadow-lg items-center justify-center">
            <Image
              width={200}
              height={200}
              className="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png"
              alt=""
            />
          </div>
          <div className="bg-white rounded-2xl h-12 flex shadow-lg items-center justify-center">
            <Image
              width={200}
              height={200}
              className="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png"
              alt=""
            />
          </div>
          <div className="bg-white rounded-2xl h-12 flex shadow-lg items-center justify-center">
            <Image
              width={200}
              height={200}
              className="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png"
              alt=""
            />
          </div>
          <div className="bg-white rounded-2xl h-12 flex shadow-lg items-center justify-center">
            <Image
              width={200}
              height={200}
              className="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png"
              alt=""
            />
          </div>
          <div className="bg-white rounded-2xl h-12 flex shadow-lg items-center justify-center">
            <Image
              width={200}
              height={200}
              className="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png"
              alt=""
            />
          </div>
          <div className="bg-white rounded-2xl h-12 flex shadow-lg items-center justify-center">
            <Image
              width={200}
              height={200}
              className="object-contain w-full mx-auto h-7"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png"
              alt=""
            />
          </div>
          <div className="bg-white rounded-2xl h-12 flex shadow-lg items-center justify-center">
            <Image
              width={200}
              height={200}
              className="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png"
              alt=""
            />
          </div>
          <div className="bg-white rounded-2xl h-12 flex shadow-lg items-center justify-center">
            <Image
              width={200}
              height={200}
              className="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
