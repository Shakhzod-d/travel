import { useFetchData } from "../../hooks"
import { CountriesType } from "../../types"
import { useQuery } from 'react-query';
import { Loading } from "../ui";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { changeCountry, handleDistrict } from "../../store/main-slice";
import { useTranslation } from "react-i18next";
import { Carousel } from 'nuka-carousel';
import useEmblaCarousel from 'embla-carousel-react'
import React, { useEffect } from "react";

const CountryList = () => {
    const [emblaRef] = useEmblaCarousel()
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.main)
    const { activeCountry } = state
    const { fetchdata } = useFetchData('/api/main/v1/countries')
    const { data, error, isLoading } = useQuery({
        queryKey: ['countries'], 
        queryFn: fetchdata
    });

    useEffect(() => {
        if(activeCountry == ''){
            dispatch(changeCountry(t("all")))
        }
    }, [])

    const changeEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(handleDistrict(t("all")))
        dispatch(changeCountry(e.currentTarget.id))
    }
    

    if (isLoading) {
        return <Loading/>;
    }

    if (error instanceof Error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='w-full text-[24px] sm:text-[16px] flex flex-wrap gap-x-11 font-[500px] gap-y-5 justify-start mb-5'>
            <Carousel 
                swiping
                wrapMode="wrap"
                className="relative hidden md:block"
            >
                <button 
                    onClick={_ => {
                        dispatch(changeCountry(t("all")))
                        dispatch(handleDistrict(t("all")))
                    }}
                    className={`btn px-[24px] py-[12px] mr-3 ${ activeCountry == t("all")? 'bg-[#F56960] text-white' : 'text-black bg-[#F5F5F5]' }`}>
                        {t("all")}
                </button>
                {
                    data?.map((item: CountriesType) => (
                        <button 
                            onClick={changeEvent}
                            key={item.id} 
                            id={item.title} 
                            className={`btn px-[24px] py-[12px] mr-3 ${ item.title == activeCountry ? 'bg-[#F56960] text-white' : 'text-black bg-[#F5F5F5]' }`}>
                                {item.title}
                        </button>
                    ))
                }
            </Carousel>
            <div className="overflow-hidden md:hidden" ref={emblaRef}>
                <div className="flex touch-pan-y">
                    <button 
                        onClick={_ => {
                            dispatch(changeCountry(t("all")))
                            dispatch(handleDistrict(t("all")))
                        }}
                        className={`btn px-[24px] py-[12px] mr-3 ${ activeCountry == t("all")? 'bg-[#F56960] text-white' : 'text-black bg-[#F5F5F5]' }`}>
                            {t("all")}
                    </button>
                    {
                        data?.map((item: CountriesType) => (
                            <button 
                                onClick={changeEvent}
                                key={item.id} 
                                id={item.title} 
                                className={`btn px-[24px] py-[12px] mr-3 ${ item.title == activeCountry ? 'bg-[#F56960] text-white' : 'text-black bg-[#F5F5F5]' }`}>
                                    {item.title}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CountryList