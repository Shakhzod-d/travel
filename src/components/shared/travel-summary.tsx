/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";

interface TravelSummaryProps {}

const TravelSummary: FC<TravelSummaryProps> = () => {
  return (
    <div className="max-w-[443px] w-full max-h-[432px] px-4 pt-4 pb-5 bg-white rounded border flex-col justify-start items-start gap-[38px] inline-flex max-[1000px]:max-w-full max-[550px]:max-h-full">
      <div className=" border border-[#eaeaea] w-full px-5 py-7">
        <h2 className=" text-[#112211] text-xl font-bold mb-2">
          Total Summary
        </h2>
        <div className="flex mb-5">
          <div className="flex-1 flex gap-4">
            <p className=" text-neutral-700 text-sm font-bold">Urungach lake</p>
            <p className=" text-neutral-700 text-sm font-bold flex items-center g-1">
              <span className="w-1 h-1 bg-neutral-700 rounded-full inline-block" />
              <span className="  inline-block pl-2"> Group Tour (Guided) </span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <img
              src="/icons/star.svg"
              className="w-4 h-4 px-[1.33px] pt-[1.33px] pb-0.5 left justify-center items-center inline-flex"
            />
            <p className="text-black text-sm font-medium">4.69</p>
          </div>
        </div>
        <div className="flex gap-9 pb-5 border-b border-[#D9D9D9] mb-5 max-[550px]:flex-wrap max-[550px]:justify-center">
          <div className="">
            <div className=" text-[#949494] text-xs font-bold mb-2">
              CHECK IN
            </div>
            <div className="text-[#222222] text-xs font-bold">16.04.2024</div>
          </div>
          <div className="">
            <div className=" text-[#949494] text-xs font-bold mb-2">
              CHECK-OUT
            </div>
            <div className="text-[#222222] text-xs font-bold">16.04.2024</div>
          </div>
          <div className="">
            <div className=" text-[#949494] text-xs font-bold mb-2">
              TOTAL LENGTH
            </div>
            <div className="text-[#222222] text-xs font-bold">
              4 nights, 3 days
            </div>
          </div>
        </div>

        <div className="mb-[30px]">
          <div>
            <span className="text-black text-[28px] font-bold">$950,00 </span>
            <span className="text-[#949494] text-base font-medium">
              /insted of $1100,00
            </span>
          </div>
          <div className="">
            <span className="text-[#949494] text-xs font-bold">
              Trip Code:{" "}
            </span>
            <span className="text-[#3c3c3c] text-xs font-bold">GS314F</span>
          </div>
        </div>
        <div className="max-w-[423px] w-[100%] h-10 ]">
          <button className="max-w-[371px] w-[100%] h-10  bg-[#ffce52]">
            <p className=" text-black text-base font-medium leading-snug tracking-tight">
              Book your trip now
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelSummary;
