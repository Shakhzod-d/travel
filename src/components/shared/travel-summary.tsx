/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { useEffect, type FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { handlePersons, handleStart, handleEnd, openTourModal, openBookingModal } from "../../store/main-slice";
import { RootState } from "../../store/store";

interface TravelSummaryProps {
  price: string,
  start_date: string | null,
  end_date: string | null,
  days: number
  nights: number,
  overall: number
}

const TravelSummary: FC<TravelSummaryProps> = ({
  price,
  end_date,
  start_date,
  days,
  nights,
  overall
}) => {
  const state = useSelector((state: RootState) => state.main)
  const { persons, start } = state
  const { t } = useTranslation()
  const dispatch = useDispatch()

  function addDaysToDate(dateStr: string, numDays: number) {
    // Convert the string date to a Date object
    const date = new Date(dateStr);
    
    // Add the specified number of days to the date
    date.setDate(date.getDate() + numDays);
    
    // Return the new date in 'YYYY-MM-DD' format
    const newDate = date.toISOString().split('T')[0];
    
    return newDate;
  }


  const changePersons = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(handlePersons(Number(e.currentTarget.value)))
  }

  const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleStart(e.currentTarget.value))
  }

  useEffect(() => {
    if(start_date !== null){
      dispatch(handleStart(start_date))
    }
  }, [start_date])

  

  useEffect(() => {
    if(start && !end_date){
      let end = addDaysToDate(start, days) 
      dispatch(handleEnd(end))
    }else{
      dispatch(handleEnd(end_date))
    }
  }, [start, end_date, days])

  const book = () => {
    dispatch(openTourModal())
    dispatch(openBookingModal())
  }
  
  return (
    <div className="max-w-[443px] w-full h-max px-4 pt-4 pb-5 bg-white sticky top-10 rounded border flex-col justify-start items-start gap-[38px] inline-flex lg:max-w-full sm:max-h-full">
      <div className=" border border-[#eaeaea] w-full px-5 py-7 xm:text-center">
        <h2 className=" text-[#112211] text-xl font-bold mb-2">
          {t("totalsummary")}
        </h2>
        <div className="flex xm:flex-col sm:items-center mb-5">
          <div className="flex-1 flex flex-wrap gap-4 xm:w-full xm:justify-center xm:mb-3">
            <p className=" text-neutral-700 text-sm font-bold ">Urungach lake</p>
            <p className=" text-neutral-700 text-sm font-bold flex items-center g-1">
              <span className="w-1 h-1 bg-neutral-700 rounded-full inline-block" />
              <span className="  inline-block pl-2">
                {
                  start_date !== null 
                    ? t("group")
                    : t("single")
                }
              </span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <img
              src="/icons/star.svg"
              className="w-4 h-4 px-[1.33px] pt-[1.33px] pb-0.5 left justify-center items-center inline-flex"
            />
            <p className="text-black text-sm font-medium">{overall}</p>
          </div>
        </div>
        <div className="flex gap-9 pb-5 border-b border-[#D9D9D9] mb-5 flex-wrap sm:justify-center">
          <div className="">
            <div className=" text-[#949494] text-xs font-bold mb-2">
              CHECK IN
            </div>
            <div className="text-[#222222] text-xs font-bold">{start_date ? start_date : '-'}</div>
          </div>
          <div className="">
            <div className=" text-[#949494] text-xs font-bold mb-2">
              CHECK-OUT
            </div>
            <div className="text-[#222222] text-xs font-bold">{end_date ? end_date : '-'}</div>
          </div>
          <div className="">
            <div className=" text-[#949494] text-xs font-bold mb-2">
              {t("length")}
            </div>
            <div className="text-[#222222] text-xs font-bold">
              {days} {t("days")}, {nights} {t("nights")}
            </div>
          </div>
          {start_date !== null ?
            <div>
              <div className=" text-[#949494] text-xs font-bold mb-2">
                {t("persons")}
              </div>
              <div className="text-[#222222] text-xs font-bold">
                <select 
                  name="persons" 
                  id="persons" 
                  className="w-[100px] outline-none border-[1px] border-[#aaa6a6] rounded-sm"
                  onChange={changePersons}
                  value={persons}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            : <div>
              <div className=" text-[#949494] text-xs font-bold mb-2">
                {t("start")}
              </div>
              <div className="text-[#222222] text-xs font-bold">
                <input type="date" onChange={changeDate} className="w-[200px] outline-none px-5 py-2 border-[1px] border-[#aaa6a6] rounded-sm"/>
              </div>
            </div>
          }
        </div>

        <div className="mb-[30px]">
          <div>
            <span className="text-black text-[28px] font-bold">${Math.round(Number(price))}</span>
            {/* <span className="text-[#949494] text-base font-medium">
              /insted of $1100
            </span> */}
          </div>
          <div className="">
            <span className="text-[#949494] text-xs font-bold">
              Trip Code:{" "}
            </span>
            <span className="text-[#3c3c3c] text-xs font-bold">GS314F</span>
          </div>
        </div>
        <div className="max-w-[423px] w-[100%] h-10 ]">
          <button className="max-w-[371px] w-[100%] h-10  bg-[#ffce52]" onClick={book}>
            <p className=" text-black text-base font-medium leading-snug tracking-tight">
              {t("booktrip")}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelSummary;
