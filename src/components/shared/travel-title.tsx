/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { Container } from "../ui";

interface TravelTitleProps {}

const TravelTitle: FC<TravelTitleProps> = () => {
  return (
    <section className="bg-white ">
      <Container className="flex items-end justify-between pb-10">
        <div className="flex-col  gap-3 inline-flex ">
          <h2 className=" text-[#0c141d] text-[32px] font-semibold  leading-[48px]">
            Explore Bali - Diving into the Beauty of the Island of the Gods
          </h2>
          <div className="  gap-6 flex max-[550px]:flex-col">
            <div className="items-center gap-3 flex">
              <img src="/icons/location.svg" />
              <p className="text-[#98a1b2] text-lg font-semibold  leading-[27px]">
                Uzbekistan, Tashkent
              </p>
            </div>
            <div className="items-center gap-3 flex">
              <img src="/icons/star.svg" />
              <p className="text-[#98a1b2] text-lg font-semibold  leading-[27px]">
                4.7 (reviews)
              </p>
            </div>
          </div>
        </div>
        <div className=" gap-5 flex max-[700px]:hidden">
          <div className="pl-3.5 pr-4 py-2.5 rounded-[200px] border border-[#98a1b2] items-center gap-3 flex max-[700px]:p-0">
            <img src="./icons/share.svg" />
            <div className="text-[#0c141d] text-lg font-semibold  leading-[27px] max-[1000px]:hidden grow shrink-0">
              Share
            </div>
          </div>
          <div className="pl-3.5 pr-4 py-2.5 rounded-3xl border border-[#98a1b2] items-center gap-3 flex max-[700px]:p-0 max-[700px]:w-auto max-[700px]:h-auto">
            <img src="./icons/like.svg" />
            <p className="text-[#0c141d] text-lg font-semibold  leading-[27px] max-[1000px]:hidden grow shrink-0">
              Like
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TravelTitle;
