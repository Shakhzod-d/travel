/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import Rating from "../ui/rating";

interface TravelRatingProps {}

const TravelRating: FC<TravelRatingProps> = () => {
  return (
    <div className="bg-white mb-4 py-4 px-10 max-[550px]:px-2">
      <div className=" bg-white rounded-lg " />
      <div className="flex w-full justify-between items-center max-[550px]:flex-col max-[550px]:gap-5">
        <div className=" flex-col justify-start items-start gap-4 flex  max-[550px]:items-center">
          <h3 className="text-[#0d0c22] text-sm font-medium">
            Employee Reviews
          </h3>
          <h2 className="text-center text-black text-[40px] font-bold leading-tight">
            4.7
          </h2>
          <div className="">
            <Rating rating={2.3} />
          </div>
          <div className="text-[#858585] text-xs font-medium">
            (578 Reviews)
          </div>
        </div>

        <div className="flex-col justify-start items-end gap-[7px] flex w-full max-w-[443px]">
          <div className="flex justify-between items-center w-full gap-[9px] ">
            <p className="text-black text-[10px] font-medium">5 stars</p>
            <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
              <div className="h-[6px] rounded-full bg-[#E7B66B] w-[90%]"></div>
            </div>
            <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
              488
            </p>
          </div>
          <div className="flex justify-between items-center w-full gap-[9px] ">
            <p className="text-black text-[10px] font-medium">5 stars</p>
            <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
              <div className="h-[6px] rounded-full bg-[#E7B66B] w-[70%]"></div>
            </div>
            <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
              488
            </p>
          </div>
          <div className="flex justify-between items-center w-full gap-[9px] ">
            <p className="text-black text-[10px] font-medium">5 stars</p>
            <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
              <div className="h-[6px] rounded-full bg-[#E7B66B] w-[50%]"></div>
            </div>
            <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
              488
            </p>
          </div>
          <div className="flex justify-between items-center w-full gap-[9px] ">
            <p className="text-black text-[10px] font-medium">5 stars</p>
            <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
              <div className="h-[6px] rounded-full bg-[#E7B66B] w-[20%]"></div>
            </div>
            <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
              488
            </p>
          </div>
          <div className="flex justify-between items-center w-full gap-[9px] ">
            <p className="text-black text-[10px] font-medium">5 stars</p>
            <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
              <div className="h-[6px] rounded-full bg-[#E7B66B] w-[90%]"></div>
            </div>
            <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
              488
            </p>
          </div>
        </div>
        {/* <div className="flex-col justify-center items-start gap-1 inline-flex">
          <div className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
            74
          </div>
          <div className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
            14
          </div>
          <div className="text-center text-[#858585] text-[10px] font-medium leading-[18px]">
            0
          </div>
          <div className="text-center text-[#858585] text-[10px] font-medium leading-[18px]">
            0
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TravelRating;
