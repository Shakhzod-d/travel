/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useState, type FC } from "react";
import { openModal } from '../../store/main-slice';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { ReviewsType } from "../../types";
import Rating  from "../ui/rating";

interface TravelRatingProps {
  overall: number,
  reviews: ReviewsType[] 
}

const TravelRating: FC<TravelRatingProps> = ({
  overall,
  reviews
}) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [isNew, setIsNew] = useState(true);
  
  const sortReviews = () => {
    setIsNew(!isNew)
  }

  const modalHandler = () => {
    dispatch(openModal())
  }

  return (
    <div className="w-full">
      <div className="flex justify-between sm:flex-col mb-5">
        <select 
          name="review" 
          id="review"
          className="outline-none px-5 py-1 font-normal sm:mb-3 rounded-sm"
          onChange={sortReviews}
        >
          <option value="Sort by newest review">Sort by newest review</option>
          <option value="Sort by oldest review">Sort by oldest review</option>
        </select>
        <button onClick={modalHandler} className="px-9 py-2 bg-[#0D0C22] text-white rounded-3xl">Write a Review</button>
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
              <p className="mr-1">{`(${reviews.length}`}</p>
              <p>{`${reviews.length > 1 ? t("reviews") : t("review")})`}</p>
            </div>
          </div>

          <div className="flex-col justify-start items-end gap-[7px] flex w-full max-w-[443px]">
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] font-medium">5 stars</p>
              <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                <div className="h-[6px] rounded-full bg-[#E7B66B] w-[90%]"></div>
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                488
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] font-medium">5 stars</p>
              <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                <div className="h-[6px] rounded-full bg-[#E7B66B] w-[70%]"></div>
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                488
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] font-medium">5 stars</p>
              <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                <div className="h-[6px] rounded-full bg-[#E7B66B] w-[50%]"></div>
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                488
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] font-medium">5 stars</p>
              <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                <div className="h-[6px] rounded-full bg-[#E7B66B] w-[20%]"></div>
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                488
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-[9px] ">
              <p className="text-black text-[10px] font-medium">5 stars</p>
              <div className="flex-1 h-[6px] rounded-full bg-[#F2F6FB] overflow-hidden">
                <div className="h-[6px] rounded-full bg-[#E7B66B] w-[90%]"></div>
              </div>
              <p className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
                488
              </p>
            </div>
          </div>
          {/* <div className="flex-col justify-center items-start gap-1 inline-flex">
            <div className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
              74
            </div>
            <div className="text-center text-[#0d0c22] text-[10px] font-medium leading-[18px]">
              14
            </div>
            <div className="text-center text-[#858585] text-[10px] font-medium leading-[18px]">
              0
            </div>
            <div className="text-center text-[#858585] text-[10px] font-medium leading-[18px]">
              0
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TravelRating;
