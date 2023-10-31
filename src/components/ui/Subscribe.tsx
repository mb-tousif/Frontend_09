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
      <div className="flex flex-col max-w-6xl md:h-56 bg-[#474E68] md:bg-[#50577A] rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
        <div className="md:flex items-center justify-center md:w-1/2 md:bg-[#474E68]">
          <div className="py-6 px-8 md:py-0 text-gray-50">
            <h2 className="text-2xl font-bold">Sign Up For News Letter</h2>
            <p className="mt-2">
              Painting Service Ltd is the best partner for your painting.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
              <input
                className="py-3 px-4 bg-[#8d99ae] text-gray-50 outline-none placeholder-gray-50 text-center"
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
                className="py-3 px-4 bg-gray-700 text-gray-50 font-semibold uppercase hover:bg-gray-600"
              >
                subscribe
              </button>
            </div>
            {errors.email?.type === "required" && (
              <p className="text-gray-50 pt-1 text-center sm:text-base md:text-lg text-xs">
                {errors.email.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
