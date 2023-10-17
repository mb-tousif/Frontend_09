"use client";
import { useCreateSubscriptionMutation } from "@/redux/api/subscribeApi";
import { TSubscribe } from "@/types/subscribe";
import { message } from "antd";
import React from "react";
import { useForm } from "react-hook-form";

export default function Subscribe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSubscribe>({
    mode: "onBlur",
  });
  const [createSubscription] = useCreateSubscriptionMutation();
  const onSubmit = async (data: TSubscribe) => {
    try {
      const res = await createSubscription(data).unwrap();
      if (res) {
        message.success(res.message);
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-6xl md:h-56 sm:bg-slate-500 md:bg-[#03A776] rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
        <div className="md:flex items-center justify-center md:w-1/2 md:bg-gray-700">
          <div className="py-6 px-8 md:py-0">
            <h2 className="text-gray-700 text-2xl font-bold md:text-gray-100">
              Sign Up For News Letter
            </h2>
            <p className="mt-2 text-gray-600 md:text-gray-400">
              Painting Service Ltd is the best partner for your painting.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
              <input
                className="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
              />
              <button
                type="submit"
                className="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600"
              >
                subscribe
              </button>
            </div>
            {errors.email?.type === "required" && (
              <span className="text-red-600 text-xs">
                {errors.email.message}
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
