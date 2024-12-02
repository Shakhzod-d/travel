/* eslint-disable @typescript-eslint/no-empty-object-type */
import { type FC } from "react";
import { openModal } from '../../store/main-slice';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { ReviewsType, RanksType, DetailType } from "../../types";
import Rating  from "../ui/rating";

interface TravelRatingProps {
  overall: number,
  reviews: ReviewsType[],
  sortReviews: () => void,
  ranks: RanksType
}

const TravelRating: FC<TravelRatingProps> = ({
  overall,
  reviews,
  sortReviews,
  ranks
}) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const modalHandler = () => {
    dispatch(openModal())
  }

  let five = ranks.detail?.filter((item: DetailType) => item.rank == 5).length
  let four = ranks.detail?.filter((item: DetailType) => item.rank == 4).length
  let three = ranks.detail?.filter((item: DetailType) => item.rank == 3).length
  let two = ranks.detail?.filter((item: DetailType) => item.rank == 2).length
  let one = ranks.detail?.filter((item: DetailType) => item.rank == 1).length

  let arr = [five, four, three, two, one]
  let sum = arr.reduce((a,b) => a + b, 0) 

  let fivePercent = sum !== 0 ? Math.round((five / sum) * 100) : 0
  let fourPercent = sum !== 0 ? Math.round((four / sum) * 100) : 0
  let threePercent = sum !== 0 ? Math.round((three / sum) * 100) : 0
  let twoPercent = sum !== 0 ? Math.round((two / sum) * 100) : 0
  let onePercent = sum !== 0 ? Math.round((one / sum) * 100) : 0

  

  return (
    <div className="w-full">
      <div className="flex justify-between sm:flex-col-reverse mb-5">
        <select 
          name="review" 
          id="review"
          className="outline-none px-5 py-1 font-normal sm:mb-3 rounded-sm"
          onChange={sortReviews}
        >
          <option value="true">{t("newest")}</option>
          <option value="false">{t("oldest")}</option>
        </select>
        <button onClick={modalHandler} className="px-9 py-2 sm:mb-8 bg-[#0D0C22] text-white rounded-3xl">{t("writereview")}</button>
      </div>
      <div className="bg-white mb-4 py-4 px-10 sm:px-2">
        <div className="flex w-full justify-between items-center sm:flex-col sm:gap-5">
          <div className=" flex-col justify-start items-start gap-4 flex  sm:items-center">
            <h3 className="text-[#0d0c22] text-sm font-medium capitalize">
              {t("employeereviews")}
            </h3>
            <h2 className="text-center text-black text-[40px] font-bold leading-tight">
              {overall}
            </h2>
            <div className="">
              <Rating rating={overall} />
            </div>
            <div className="text-[#858585] text-xs font-medium flex">
              <p className="mr-1">{`(${reviews?.length}`}</p>
              <p>{`${reviews?.length > 1 ? t("reviews") : t("review")})`}</p>
            </div>
          </div>

          <div className="flex-col justify-start items-end gap-[7px] flex w-full max-w-[443px]">
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] font-medium">5 stars</p>
              <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                <div className={`${fivePercent == 0 ? 'w-0' : `w-[${fivePercent}%]`} h-[6px] rounded-full bg-[#E7B66B]`}></div>
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                {five}
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] font-medium">4 stars</p>
              <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                <div className={`${fourPercent == 0 ? 'w-0' : `w-[${fourPercent}%]`} h-[6px] rounded-full bg-[#E7B66B]`}></div>
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                {four}
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] font-medium">3 stars</p>
              <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                <div className={`${threePercent == 0 ? 'w-0' : `w-[${threePercent}%]`} h-[6px] rounded-full bg-[#E7B66B]`}></div>
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                {three}
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] font-medium">2 stars</p>
              <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                <div className={`${twoPercent == 0 ? 'w-0' : `w-[${twoPercent}%]`} h-[6px] rounded-full bg-[#E7B66B]`}></div>
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                {two}
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] w-[31.672px] font-medium text-end">1 star</p>
              <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                <div className={`${onePercent == 0 ? 'w-0' : `w-[${onePercent}%]`} h-[6px] rounded-full bg-[#E7B66B]`}></div>
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                {one}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelRating;
