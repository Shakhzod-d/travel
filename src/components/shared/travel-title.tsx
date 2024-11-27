/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { Container } from "../ui";
import { useState } from "react";
import { useNotify } from "../../hooks";
import CheckIcon from '@mui/icons-material/Check';

interface TravelTitleProps {}

const TravelTitle: FC<TravelTitleProps> = () => {
  const [copied, setCopied] = useState(false);
  const { toastify } = useNotify()

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      toastify('Failed to copy URL!', 'error');
    }
  }

  return (
    <section className="bg-white pt-7">
      <Container className="flex items-end justify-between pb-10 lg:flex-col lg:items-start">
        <div className="flex-col  gap-3 inline-flex ">
          <h2 className=" text-[#0c141d] text-[32px] font-semibold  leading-[48px]">
            Explore Bali - Diving into the Beauty of the Island of the Gods
          </h2>
          <div className="  gap-6 flex sm:flex-col">
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
        <div className="flex flex-col items-center lg:mt-3">
          {copied && <div className="flex">
            <h4 className="font-semibold mb-2 mr-1">copied</h4>
            <CheckIcon style={{ fontSize: 20, color: 'black' }}/>
          </div>}
          <button onClick={copyToClipboard} className='cursor-pointer pl-3.5 pr-4 py-2.5 rounded-[200px] border border-[#98a1b2] items-center gap-3 flex sm:p-1'>
            <img src="./icons/share.svg" />
            <div className="text-[#0c141d] text-lg font-semibold  leading-[27px] grow shrink-0">
              Share
            </div>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default TravelTitle;
