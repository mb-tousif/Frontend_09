"use client";
import { useGetUserByIdQuery } from "@/redux/api/userApi";
import { IUserInfo, getUserInfo } from "@/utils/getUserInfo";
import Image from "next/image";

export default function AdminProfile() {
  const userInfo: IUserInfo = getUserInfo();
  const { data, isLoading, isError } = useGetUserByIdQuery(userInfo?.id);
  const user = data?.data;

  return (
    <div className="mx-auto my-auto">
      <div className="flex md:mx-36 flex-col justify-center items-center min-h-70vh">
        <div className="relative flex justify-center flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[400px] mx-auto p-4 bg-slate-500 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
            <Image
              width={500}
              height={500}
              src="https://img.freepik.com/premium-vector/concept-colorful-rainbow_29937-7210.jpg"
              className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
              alt="cover image"
            />
            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
              <Image
                width={500}
                height={500}
                className="h-full w-full rounded-full"
                src={user?.imgUrl}
                alt="Profile Image"
              />
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <h4 className="text-xl font-bold text-gray-50 dark:text-white">
              {user?.name}
            </h4>
            <p className="text-base font-normal text-[#214f7a]">{user?.role}</p>
          </div>
          <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-50 dark:text-white">
                17
              </p>
              <p className="text-sm font-normal text-[#214f7a]">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-50 dark:text-white">
                9.7K
              </p>
              <p className="text-sm font-normal text-[#214f7a]">Sales</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-50 dark:text-white">
                434
              </p>
              <p className="text-sm font-normal text-[#214f7a]">Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
