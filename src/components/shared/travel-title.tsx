/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { Container } from "../ui";
import { useState } from "react";
import { useNotify } from "../../hooks";
import { useTranslation } from "react-i18next";
import { ReviewsType } from "../../types"
import CheckIcon from '@mui/icons-material/Check';

interface TravelTitleProps {
  title: string,
  country: string,
  city: string,
  reviews: ReviewsType[]
}


const TravelTitle: FC<TravelTitleProps> = ({
  title,
  country,
  city,
  reviews
}) => {
  const { t } = useTranslation()
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
            {title}
          </h2>
          <div className="  gap-6 flex sm:flex-col">
            <div className="items-center gap-3 flex">
              <img src="/icons/Icon.png" />
              <p className="text-[#98a1b2] text-lg font-semibold capitalize leading-[27px]">
                {country}, {city}
              </p>
            </div>
            <div className="items-center gap-3 flex">
              <img src="/icons/star.svg" />
              <div className="flex">
                <p className="text-[#98a1b2] text-lg font-semibold leading-[27px]">
                  {reviews.length}
                </p>
                <p className="text-[#98a1b2] text-lg font-semibold lowercase ml-1 leading-[27px]">
                  {`(${t("review")})`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:mt-3">
          {copied && <div className="flex">
            <h4 className="font-semibold mb-2 mr-1">{t("copied")}</h4>
            <CheckIcon style={{ fontSize: 20, color: 'black' }}/>
          </div>}
          <button onClick={copyToClipboard} className='cursor-pointer pl-3.5 pr-4 py-2.5 rounded-[200px] border border-[#98a1b2] items-center gap-3 flex sm:p-1'>
            <img src="/icons/share.svg" />
            <div className="text-[#0c141d] capitalize text-lg font-semibold  leading-[27px] grow shrink-0">
              {t("share")}
            </div>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default TravelTitle;
