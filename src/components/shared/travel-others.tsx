/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useState, type FC } from "react";
import { Container } from "../ui";

interface TravelOthersProps {}

const TravelOthers: FC<TravelOthersProps> = () => {
  const [active, setActive] = useState(0);

  const changeActive = (num: number) => {
    if(active !== num){
      setActive(num)
    }else{
      setActive(0)
    }
  }

  return (
    <section className="bg-white py-20 sm:px-2 sm:py-2" id="other">
      <Container>
        <div className="flex-col gap-1 flex">
          <h2 className="text-[#112211] text-xl font-bold mb-1">Other</h2>
          <p className="text-[#98a1b2] text-base font-semibold leading-normal mb-6">
            Some info regarding ordering is below
          </p>
        </div>
        <div
          className={`flex-col gap-3 flex mb-9 transition-all ease-in-out duration-500 ${
            active == 1 ? "max-h-[1000px]" : "max-h-[70px] overflow-hidden"
          }`}
        >
          <div
            className="px-5 py-2.5 bg-[#f2f3f6] rounded items-center gap-2.5 flex justify-between mb-3 cursor-pointer"
            onClick={() => changeActive(1)}
          >
            <p className=" text-[#0f1728] text-2xl font-semibold leading-9 sm:text-xl">
              Ticket exchange
            </p>
            <img
              src="/icons/arrow-chevron.svg"
              className={`transition-all ease-in-out duration-500 delay-75 ${active == 1 ? "rotate-180" : ""}`}
            />
          </div>
          <ul className="text-[#98a1b2] text-2xl font-extralight leading-9 pl-3">
            <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
              E-tickets/vouchers do not need to be printed. Just show the
              e-ticket/voucher from your smartphone when exchanging or at the
              entrance. Please adjust your screen brightness.
            </li>
            <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
              Bag checks will be carried out for safety & security purposes.
            </li>
          </ul>
        </div>
        <div
          className={`flex-col gap-3 flex transition-all ease-in-out duration-500 ${
            active == 2
              ? "max-h-[1000px] overflow-y-hidden xm:overflow-y-scroll"
              : "max-h-16 overflow-hidden"
          }`}
        >
          <div
            className="px-5 py-2.5 bg-[#f2f3f6] rounded items-center gap-2.5 flex justify-between cursor-pointer"
            onClick={() => changeActive(2)}
          >
            <p className=" text-[#0f1728] text-2xl font-semibold leading-9  sm:text-xl ">
              Terms and Conditions
            </p>
            <img
              src="/icons/arrow-chevron.svg"
              className={`transition-all ease-in-out duration-500 delay-75 ${active == 2 ? "rotate-180" : ""}`}
            />
          </div>
          <div className="flex-col gap-3 flex">
            <div className="px-5 gap-2.5 flex">
              <h2 className=" text-[#344053] text-2xl font-semibold leading-9">
                General
              </h2>
            </div>
            <ul className="text-[#98a1b2] text-2xl font-extralight leading-9 pl-10 sm:pl-2">
              <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
                Prices include tax.
              </li>
              <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
                Tickets that have been purchased are non-refundable.
              </li>
              <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
                Tickets that have been purchased cannot be rescheduled.
              </li>
              <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
                Buyers are required to fill in personal data when ordering.
              </li>
              <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
                Ticket sales can be stopped or started by us at any time in
                accordance with the policies of the island of Bali
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TravelOthers;
