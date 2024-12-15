/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { Map } from "../ui";
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
  lang,
}) => {
  const { t } = useTranslation();
  return (
    <div className=" bg-white rounded-md mt-7 p-6 sm:p-2" id="location">
      <div className=" bg-white rounded-md" />
      <h2 className=" text-[#112211] text-xl font-bold mb-4 capitalize">
        {t("location")}
      </h2>
      <div className=" items-center gap-3 flex mb-5">
        <img
          src="/icons/location.svg"
          className="w-5 h-5 px-[3.12px] py-[1.25px] justify-center items-center flex"
        />
        <p className="text-[#98a1b2] text-base font-semibold capitalize leading-normal">
          {country}, {city}
        </p>
      </div>
      <Map lot={lot} lang={lang} />
    </div>
  );
};

export default TravelLocation;
