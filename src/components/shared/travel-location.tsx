/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { Map } from '../ui'
import { useTranslation } from "react-i18next";

interface TravelLocationProps {
  country: string;
  city: string;
  lot: string | null;
  lang: string | null;
}

const TravelLocation: FC<TravelLocationProps> = ({
  country,
  city,
  lot,
  lang
}) => {
  const { t } = useTranslation()
  return (
    <div
      className=" bg-white rounded-md mt-10 py-6 px-8 sm:px-2 sm:py-2"
      id="location"
    >
      <div className=" bg-white rounded-md" />
      <h2 className=" text-[#112211] text-xl font-bold mb-4 capitalize">{t("location")}</h2>
      <div className=" items-center gap-3 flex mb-5">
        <img
          src="/icons/location.svg"
          className="w-5 h-5 px-[3.12px] py-[1.25px] justify-center items-center flex"
        />
        <p className="text-[#98a1b2] text-base font-semibold capitalize leading-normal">
          {country}, {city}
        </p>
      </div>
      <Map 
        lot={lot}
        lang={lang}
      />
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.770861737593!2d66.97304127505188!3d39.65487110165763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d18b7c2e59337%3A0x532c8e039ecc92af!2z0J_Qu9C-0YnQsNC00YwgItCg0LXQs9C40YHRgtC-0L0nJw!5e0!3m2!1sru!2s!4v1727949269534!5m2!1sru!2s"
        allowFullScreen={false}
        referrerPolicy="no-referrer-when-downgrade"
        className="max-w-[750px] w-full h-[350px]"
        loading="lazy"
      ></iframe> */}
    </div>
  );
};

export default TravelLocation;
