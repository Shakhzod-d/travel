/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useFetchData } from "../../hooks";
import { useParams } from "react-router";
import {
  handleStart,
  openTourModal,
  handleDays
} from "../../store/main-slice";
import { RootState } from "../../store/store";
import { useQuery } from "react-query";
import { Loading } from "../ui";


const TravelSummary = () => {
  const {id} = useParams();
  const { fetchdata } = useFetchData(`/api/tour/v1/detail/${id}`);
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchDetail"],
    queryFn: fetchdata
  })

  const { 
    price, 
    end_date, 
    start_date, 
    days, 
    nights, 
    overall 
  } = data || {};

  const state = useSelector((state: RootState) => state.main);
  const { days1 } = state
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (start_date && end_date ) {
      const startDate = new Date(start_date);
      const endDate = new Date(end_date);
      const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
      const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
      dispatch(handleDays(differenceInDays));
    }
  }, [start_date, end_date, days1]);

  useEffect(() => {
    if (start_date !== null) {
      dispatch(handleStart(start_date));
    }
  }, [start_date]);

  const book = () => {
    dispatch(openTourModal());
  };

  if(isLoading){
    return <Loading/>
  }

  if(error instanceof Error){
    return <div className="error w-full h-screen flex justify-center items-center">Error: {error.message}</div>;
  }

  return (
    <div className="max-w-[443px] w-full h-max px-4 pt-4 pb-5 bg-white sticky top-10 rounded border flex-col justify-start items-start gap-[38px] inline-flex lg:max-w-full sm:max-h-full">
      <div className=" border border-[#eaeaea] w-full p-5 xm:text-center">
        <h2 className=" text-[#112211] text-xl font-bold mb-2">
          {t("totalsummary")}
        </h2>
        <div className="flex xm:flex-col sm:items-center mb-5">
          <div className="flex-1 flex flex-wrap gap-4 xm:w-full xm:justify-center xm:mb-3">
            <p className=" text-neutral-700 text-sm font-bold flex items-center g-1">
              <span className="w-1 h-1 bg-neutral-700 rounded-full inline-block" />
              <span className="  inline-block pl-2">
                {start_date !== null ? t("group") : t("single")}
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
        <div className="pb-5 border-b border-[#D9D9D9] mb-5">
          <div className="flex gap-9  flex-wrap sm:justify-center">
            <div>
              <div className=" text-[#949494] text-xs font-bold mb-2">
                CHECK IN
              </div>
              <div className="text-[#222222] text-xs font-bold">
                {start_date ? start_date : "-"}
              </div>
            </div>
            <div>
              <div className=" text-[#949494] text-xs font-bold mb-2">
                CHECK-OUT
              </div>
              <div className="text-[#222222] text-xs font-bold">
                {end_date ? end_date : "-"}
              </div>
            </div>
            <div>
              <div className=" text-[#949494] text-xs font-bold mb-2">
                {t("length")}
              </div>
              <div className="text-[#222222] text-xs font-bold">
                {start_date ? days1 : days ? days : '-'} {t("days")},{" "}
                {start_date ? days1 - 1 : nights ? nights : '-'} {t("nights")}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-[30px]">
          <div>
            <span className="text-black text-[28px] font-bold">{`$${Number(
              price
            ).toFixed(2)}`}</span>
          </div>
        </div>
        <div className="max-w-[423px] w-[100%] h-10 ]">
          <button
            className="max-w-[371px] w-[100%] h-10  bg-[#ffce52]"
            onClick={book}
          >
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
