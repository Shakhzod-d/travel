/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";

interface ReviewCardProps {}

const ReviewCard: FC<ReviewCardProps> = () => {
  return (
    <div className="flex-col  gap-3 inline-flex items-start">
      <div className="text-[#858585] text-xs font-semibold leading-tight">
        Nov 7, 2023
      </div>
      <img src="/icons/stars.png" />
      <div className=" items-center gap-3 inline-flex">
        <div className="bg-[rgba(84,101,255,0.21)] rounded-full w-9 h-9 flex items-center justify-center ">
          <p className=" text-[#5465ff] text-sm font-semibold leading-tight">
            MT
          </p>
        </div>
        <div className="text-center text-[#0d0c22] text-sm font-medium leading-[18px]">
          Michael T.
        </div>
      </div>
      <div className="text-center text-[#858585] text-sm font-medium leading-[18px]">
        Marketing Director
      </div>
      <div className="text-[#0d0c22] text-sm font-normal leading-normal">
        Sam.AI truly values its employees and their well-being. From flexible
        work hours to regular team-building activities, the company goes above
        and beyond to create a supportive and inclusive environment.
      </div>
    </div>
  );
};

export default ReviewCard;
