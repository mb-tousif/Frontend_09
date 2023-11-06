"use client"
import { useCreateReviewMutation } from '@/redux/api/reviewApi';
import { TReview } from '@/types/review.types';
import { message } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function AddReview({ params }: any) {
  const [createReview] = useCreateReviewMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TReview>();
  const onSubmit: SubmitHandler<TReview> = async (data: TReview) => {
    try {
      data.serviceId = params?.id;
      const res = await createReview({...data}).unwrap();
      message.success(res?.message);
      reset();
    } catch (err: any) {
      message.error(err?.data?.message);
}
}
  
  return (
    <div className="p-10 md:pl-20">
      <div className="w-full sm:w-4/6 mx-auto bg-slate-500 rounded-2xl p-5">
        <h3 className="p-4 text-2xl text-gray-50 font-bold text-center">
          Add Review
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-50"
              htmlFor="rating"
            >
              Service rating
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-50 bg-slate-500 rounded focus:outline-none"
              {...register("rating", { required: true})}
              type="text"
              placeholder="Rate the service between 1 to 5"
            />
            {errors.rating?.type === "required" && (
              <p className="text-gray-50 text-center text-sm">
                Rating is required.
              </p>
            )}
            {errors.rating?.type === "min" && (
              <p className="text-gray-50 text-center text-sm">
                Rating must be greater than 0.
              </p>
            )}
            {errors.rating?.type === "max" && (
              <p className="text-gray-50 text-center text-sm">
                Rating must be less than 6.
              </p>
            )}
          </div>
          <div className="mb-4 mt-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-50"
              htmlFor="comment"
            >
              Review Content
            </label>
            <textarea
              className="w-full px-3 py-2 mb-3 text-lg text-gray-50 bg-slate-500 rounded focus:outline-none focus:border"
              rows={3}
              placeholder="Enter Your Review"
              {...register("comment", { required: true })}
            />
            {errors.comment && (
              <p className="text-gray-50 text-center text-sm">
                Comment is required.
              </p>
            )}
          </div>
          <div className="text-center">
            <button
              className="w-full px-4 py-2 font-bold text-gray-50 bg-[#50577A] hover:bg-[#474E68] rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
