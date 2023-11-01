"use client";
import {
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
} from "@/redux/api/userApi";
import { TUser } from "@/types/user.types";
import { IUserInfo, getUserInfo } from "@/utils/getUserInfo";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";

export default function UserProfile() {
  const userInfo: IUserInfo = getUserInfo();
  const { data, isLoading, isError } = useGetUserByIdQuery(userInfo?.id);
  const [updateUserById] = useUpdateUserByIdMutation({fixedCacheKey: "User"});
  const user = data?.data;
  const [open, setOpen] = useState(false);
  const {
    handleSubmit, register, reset
  } = useForm<TUser>();
  const onSubmit: SubmitHandler<TUser> = async (data: TUser) => {
    try {
       const res = await updateUserById({
         id: userInfo?.id,
         payload:data,
       }).unwrap();
      setOpen(false);
      message.success(res.message);
    } catch (err: any) {
      message.error(err.data.message);
    }
  };

  return (
    <div className="mx-auto text-gray-50 my-auto">
      <div className="flex md:mx-36 flex-col justify-center items-center min-h-70vh">
        <div className="relative flex justify-center flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[400px] mx-auto p-4 bg-[#474E68] bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
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
            <h4 className="text-xl font-bold">{user?.name}</h4>
            <p className="text-base font-normal">{user?.role}</p>
          </div>
          <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold">17</p>
              <p className="text-sm font-normal">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold">9.7K</p>
              <p className="text-sm font-normal">Sales</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold">434</p>
              <p className="text-sm font-normal">Service</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-4">
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#50577A] hover:bg-[#474E68] text-gray-50 flex px-4 py-2 rounded-md"
        >
          Edit Profile <FiEdit className="ml-2 w-6 h-6" />
        </button>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } text-[#232274f9] md:mx-36 w-full justify-center items-center`}
      >
        <div className="min-h-50vh md:w-4/6 rounded-2xl bg-[#474E68]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-8 pt-6 pb-8 mb-4 rounded"
          >
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-50"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="w-full px-3 bg-[#8d99ae] py-2 mb-3 text-sm leading-tight text-gray-50 border-none rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                {...register("name")}
                type="text"
                defaultValue={user?.name}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-50"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full bg-[#8d99ae] px-3 py-2 mb-3 text-sm leading-tight text-gray-50 border-none rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="email"
                {...register("email")}
                defaultValue={user?.email}
              />
            </div>
            <div className="md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-50"
                htmlFor="phoneNumber"
              >
                Enter Phone Number
              </label>
              <input
                className="w-full bg-[#8d99ae] px-3 py-2 mb-3 text-sm leading-tight text-gray-50 border-none rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                {...register("contact")}
                defaultValue={user?.contact}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-50"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                className="w-full bg-[#8d99ae] px-3 py-2 mb-3 text-sm leading-tight text-gray-50 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                rows={6}
                {...register("address")}
                defaultValue={user?.address}
              />
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-gray-50 bg-[#50577A] hover:bg-[#474E68] rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
