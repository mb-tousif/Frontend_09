"use client"
import { useCreateServiceMutation } from '@/redux/api/serviceApi';
import { TService } from '@/types/service.types';
import { message } from 'antd';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

export default function CreateService() {
    const [createService] = useCreateServiceMutation();
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm<TService>();
     const onSubmit: SubmitHandler<TService> = async (data: TService) => {
       try {
        console.log(data, "data");
        
         const res = await createService(data).unwrap();
         message.success(res.message);
       } catch (err: any) {
         message.error(err.data.message);
       }
     };
  return (
    <div className="flex justify-center">
      <div className="min-h-50vh md:ml-32 w-full md:w-[600px] rounded-2xl bg-slate-500">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 pt-6 pb-8 mb-4 rounded"
        >
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Service Title
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              {...(register("name"),
              {
                required: true,
              })}
              type="text"
              placeholder="Enter Service Title"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block mb-2 mr-2 text-gray-700">
              Service category
            </label>
            <select
              className={`w-full h-10 text-center bg-[#868d05] text-gray-50 rounded-lg text-xl ${
                errors.category &&
                " focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              {...register("category", { required: true })}
            >
              <option value="">--Select Category--</option>
              <option value="Furniture painting">Furniture painting</option>
              <option value="Home painting">Home painting</option>
              <option value="Office painting">Office painting</option>
              <option value="Shop painting">Shop painting</option>
            </select>
            {errors.category && (
              <p className="text-rose-600 text-center">
                Service category is required.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="inline-block mb-2 mr-2 text-gray-700">
              Service Status
            </label>
            <select
              className={`w-full h-10 text-center bg-[#868d05] text-gray-50 rounded-lg text-xl ${
                errors.status &&
                " focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              {...register("status", { required: true })}
            >
              <option value="">--Select Status--</option>
              <option value="Available">Available</option>
              <option value="Upcoming">Upcoming</option>
            </select>
            {errors.status && (
              <p className="text-rose-600 text-center">
                Service status is required.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="imgUrl"
            >
              Service image url
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              {...(register("imgUrl"),
              {
                required: true,
              })}
              placeholder="Enter Service image url"
            />
            {errors.imgUrl && (
              <p className="text-rose-600 text-center">
                Service Image URL is required.
              </p>
            )}
          </div>
          <div className="md:ml-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="price"
            >
              Enter Price
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="number"
              {...(register("price"),
              {
                required: true,
              })}
              placeholder="Enter Price"
            />
            {errors.price && (
              <p className="text-rose-600 text-center">
                Service Price is required.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="schedule"
            >
              Service Duration
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              {...(register("schedule"),
              {
                required: true,
              })}
              type="text"
              placeholder="Enter Service Schedule"
            />
            {errors.schedule && (
              <p className="text-rose-600 text-center">
                Service Duration is required.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              rows={6}
              {...register("description")}
              placeholder="Enter Description"
            />
            {errors.description && (
              <p className="text-rose-600 text-center">
                Service Description is required.
              </p>
            )}
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-gradient-to-r from-[#03A776] to-[#0D1519] rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
                Create Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
