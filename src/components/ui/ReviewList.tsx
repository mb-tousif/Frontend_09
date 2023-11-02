import Image from 'next/image';
import React from 'react'
import { TService } from "@/types/service.types";
import { useGetReviewByIdQuery } from '@/redux/api/reviewApi';
import { TReview } from '@/types/review.types';

export default function ReviewList({ service }: { service: TService }) {
  const serviceId = service?.id;
  const { data } = useGetReviewByIdQuery(serviceId as string)
  const reviews = data?.data
  if(reviews?.length <= 0 ) {
    return (
      <div>
        <h3 className="text-gray-50 text-2xl sm:ml-6 min-h-[60px] mt-6 font-medium">
          Service Reviews
        </h3>
        <div className="flex sm:ml-6 mt-2 max-w-[500px] bg-[#474E68] items-center justify-between rounded-2xl p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base font-medium text-gray-50">
            No Reviews Yet
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3 className="text-gray-50 text-2xl sm:ml-6 mt-6 font-medium">
        Service Reviews
      </h3>
      {reviews?.map((review: TReview) => (
        <div
          key={review.id}
          className="flex sm:ml-6 mt-2 max-w-[500px] bg-[#474E68] items-center justify-between rounded-2xl p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
        >
          <div className="flex items-center">
            <div className="min-w-[100px]">
              <Image
                width={83}
                height={83}
                className="h-[83px] min-w-[83px] rounded-lg"
                // @ts-ignore
                src={review?.users?.imgUrl}
                alt="Reviewer"
              />
            </div>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-50">
                {/* @ts-ignore  */}
                Reviewer: {review?.users?.name}
              </p>
              <p className="text-base font-medium text-gray-50">
                {/* @ts-ignore  */}
                Ratings: {review?.rating} out of 5
              </p>
              <p className="mt-2 text-sm text-gray-50 text-justify">{review?.comment}</p>
            </div>
          </div>
          <button className="mr-4 ml-3 flex items-center justify-center text-gray-50">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="border-slate-50 border-2 rounded-full h-8 w-8 p-1"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"></path>
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
