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
  
  let five = ranks.detail?.filter((item: DetailType) => item.rank == 5)[0]?.count;
  let four = ranks.detail?.filter((item: DetailType) => item.rank == 4)[0]?.count;
  let three = ranks.detail?.filter((item: DetailType) => item.rank == 3)[0]?.count;
  let two = ranks.detail?.filter((item: DetailType) => item.rank == 2)[0]?.count;
  let one = ranks.detail?.filter((item: DetailType) => item.rank == 1)[0]?.count;

  let arr = [five, four, three, two, one].filter((item) => item !== undefined)
  let sum = arr.reduce((a,b) => a + b, 0) 

  let fivePercent = sum !== 0 && five !== undefined ? Math.round((five / sum) * 100) : 0
  let fourPercent = sum !== 0 && four !== undefined ? Math.round((four / sum) * 100) : 0
  let threePercent = sum !== 0 && three !== undefined ? Math.round((three / sum) * 100) : 0
  let twoPercent = sum !== 0 && two !== undefined ? Math.round((two / sum) * 100) : 0
  let onePercent = sum !== 0 && one !== undefined ? Math.round((one / sum) * 100) : 0;

  return (
    <div className="w-full">
      <div className="flex justify-between sm:flex-col-reverse mb-5">
        <select
          name="review"
          id="review"
          className="outline-none px-5 py-1 font-normal sm:mb-3 rounded-sm"
          onChange={sortReviews}
        >
          <option value="false">{t("newest")}</option>
          <option value="true">{t("oldest")}</option>
        </select>
        <button
          onClick={modalHandler}
          className="px-9 py-2 sm:mb-8 bg-[#0D0C22] text-white rounded-3xl"
        >
          {t("writereview")}
        </button>
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
            <div>
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
              <div className="flex-1 w-full h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                {fivePercent > 0 && (
                  <div
                    className="h-[6px] rounded-full bg-[#E7B66B]"
                    style={{ width: `${fivePercent}%` }}
                  ></div>
                )}
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                {five ? five : 0}
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] font-medium">4 stars</p>
              <div className="flex-1 w-full h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                {fourPercent > 0 && (
                  <div
                    className="h-[6px] rounded-full bg-[#E7B66B]"
                    style={{ width: `${fourPercent}%` }}
                  ></div>
                )}
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                {four ? four : 0}
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] font-medium">3 stars</p>
              <div className="flex-1 w-full h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                {threePercent > 0 && (
                  <div
                    className="h-[6px] rounded-full bg-[#E7B66B]"
                    style={{ width: `${threePercent}%` }}
                  ></div>
                )}
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                {three ? three : 0}
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] font-medium">2 stars</p>
              <div className="flex-1 w-full h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                {twoPercent > 0 && (
                  <div
                    className="h-[6px] rounded-full bg-[#E7B66B]"
                    style={{ width: `${twoPercent}%` }}
                  ></div>
                )}
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                {two ? two : 0}
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] w-[31.672px] font-medium text-end">
                1 star
              </p>
              <div className="flex-1 w-full h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                {onePercent > 0 && (
                  <div
                    className="h-[6px] rounded-full bg-[#E7B66B]"
                    style={{ width: `${onePercent}%` }}
                  ></div>
                )}
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                {one ? one : 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelRating;
