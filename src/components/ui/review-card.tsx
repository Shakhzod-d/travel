/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { ReviewsType } from "../../types";
import Rating from "./rating";
import moment from 'moment';

interface ReviewCardProps {
  reviews: ReviewsType
}

const ReviewCard: FC<ReviewCardProps> = ({
  reviews
}) => {
  const date = moment(reviews?.created_at)
  let year = date.year();
  let month = moment(reviews?.created_at).format('MMM');
  let day = date.date();

  return (
    <div className="flex-col  gap-3 inline-flex items-start">
      <div className="text-[#858585] text-xs font-semibold leading-tight">
        {month} {day} {year}
      </div>
      <Rating rating={reviews.rank}/>
      <div className=" items-center gap-3 inline-flex">
        <div className="bg-[rgba(84,101,255,0.21)] rounded-full w-9 h-9 flex items-center justify-center ">
          <p className=" text-[#5465ff] text-sm font-semibold leading-tight">
            {reviews.full_name.split(' ').map(item => item[0]).join('')}
          </p>
        </div>
        <div className="text-center text-[#0d0c22] text-sm font-medium leading-[18px]">
          {reviews.full_name}
        </div>
      </div>
      <div className="text-center text-[#858585] text-sm font-medium leading-[18px]">
        {reviews.position}
      </div>
      <div className="text-[#0d0c22] text-sm font-normal leading-normal">
        {reviews.content}
      </div>
    </div>
  );
};

export default ReviewCard;
