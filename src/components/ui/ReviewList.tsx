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
        <h3 className="text-[#474E68] text-xl sm:ml-6 min-h-[60px] mt-6 font-medium">
          Reviews
        </h3>
        <div className="flex sm:ml-6 mt-2 max-w-[500px] bg-[#474E68] items-center justify-between rounded-2xl p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base font-medium text-gray-50">No Reviews Yet</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-medium md:font-bold text-[#474E68] sm:ml-6 mt-6 mb-6">
        Reviews
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <p className="mt-2 text-sm text-gray-50 text-justify">
                  {review?.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
