/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useState, type FC } from "react";
import { Container } from "../ui";
import { OthersType } from "../../types";
import { useSanitize } from "../../hooks";
import { useTranslation } from "react-i18next";

interface TravelOthersProps {
  others: OthersType[]
}

const TravelOthers: FC<TravelOthersProps> = ({
  others
}) => {
  const { sanitize } = useSanitize()
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(true);
  const { t } = useTranslation()
  const changeActive = () => {
    setActive(!active);
  }

  const changeActive2 = () => {
    setActive2(!active2);
  }

  return (
    <section className="bg-white py-20 sm:px-2 sm:py-2" id="other">
      <Container>
        <div className="flex-col gap-1 flex">
          <h2 className="text-[#112211] text-xl font-bold mb-1 capitalize">{t("other")}</h2>
          <p className="text-[#98a1b2] text-base font-semibold leading-normal mb-6">
            {t("regarding")}
          </p>
        </div>
        {others.length > 0 && 
          others?.map((item: OthersType) => (
            <div
              key={item.id}
              className={`flex-col gap-3 flex mb-9 transition-all ease-in-out duration-500 ${
                active == true ? "max-h-[1000px]" : "max-h-[70px] overflow-hidden"
              }`}
            >
              <div
                className="px-5 py-2.5 bg-[#f2f3f6] rounded items-center gap-2.5 flex justify-between mb-3 cursor-pointer"
                onClick={() => changeActive()}
              >
                <p className=" text-[#0f1728] text-2xl font-semibold leading-9 sm:text-xl">
                  {item?.title}
                </p>
                <img
                  src="/icons/arrow-chevron.svg"
                  className={`transition-all ease-in-out duration-500 delay-75 ${active ? "rotate-180" : ""}`}
                />
              </div>
              <ul className="text-[#98a1b2] text-2xl font-extralight leading-9 pl-3">
                <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
                  {sanitize(item?.context)}
                </li>
              </ul>
            </div>
          ))
        }
        <div
          className={`flex-col gap-3 flex transition-all ease-in-out duration-500 ${
            active2 == true
              ? "max-h-[1000px] overflow-y-hidden xm:overflow-y-scroll"
              : "max-h-16 overflow-hidden"
          }`}
        >
          <div
            className="px-5 py-2.5 bg-[#f2f3f6] rounded items-center gap-2.5 flex justify-between cursor-pointer"
            onClick={() => changeActive2()}
          >
            <p className=" text-[#0f1728] text-2xl font-semibold leading-9  sm:text-xl ">
              {t("terms")}
            </p>
            <img
              src="/icons/arrow-chevron.svg"
              className={`transition-all ease-in-out duration-500 delay-75 ${active2 ? "rotate-180" : ""}`}
            />
          </div>
          <div className="flex-col gap-3 flex">
            <div className="px-5 gap-2.5 flex">
              <h2 className=" text-[#344053] text-2xl font-semibold leading-9">
                {t("general")}
              </h2>
            </div>
            <ul className="text-[#98a1b2] text-2xl font-extralight leading-9 pl-10 sm:pl-2">
              <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
                {t("tax")}
              </li>
              <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
                {t("tickets2")}
              </li>
              <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
                {t("reschedule")}
              </li>
              <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
                {t("personal")}
              </li>
              {/* <li className="before:bg-[#0000005e] before:w-1 before:h-1 before:absolute before:top-5 relative pl-5 before:-left-0 before:rounded-full">
                Ticket sales can be stopped or started by us at any time in
                accordance with the policies of the island of Bali
              </li> */}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TravelOthers;
