import { useRef } from "react";
import { useFetchData } from "../../hooks"
import { CountriesType } from "../../types"
import { useQuery } from 'react-query';
import { Loading } from "../ui";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { changeCountry, handleDistrict } from "../../store/main-slice";
import { useTranslation } from "react-i18next";
import { Carousel, SlideHandle } from 'nuka-carousel';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const CountryList = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.main)
    const { activeCountry } = state
    const { fetchdata } = useFetchData('/api/main/v1/countries')
    const { data, error, isLoading } = useQuery({
        queryKey: ['countries'], 
        queryFn: fetchdata
    });
    
     const ref = useRef<SlideHandle>(null);

    const goBack = () => {
        if (ref.current) {
            ref.current.goBack();
        }
    };

    const goForward = () => {
        if (ref.current) {
            ref.current.goForward();
        }
    };

    if (isLoading) {
        return <Loading/>;
    }

    if (error instanceof Error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='w-full text-[24px] sm:text-[16px] flex flex-wrap gap-x-11 font-[500px] gap-y-5 justify-center lg:justify-start mb-5'>
            <Carousel 
                ref={ref} 
                scrollDistance={400}
                swiping
                wrapMode="wrap"
                className="px-11 relative"
            >
                <ChevronLeftIcon onClick={goBack} className="text-black hidden 2xl:block cursor-pointer absolute top-[33%] -left-11"/>
                <ChevronRightIcon onClick={goForward} className="text-black hidden 2xl:block cursor-pointer absolute top-[33%] -right-11"/>
                <button 
                    onClick={_ => {
                        dispatch(changeCountry(t("all")))
                        dispatch(handleDistrict(t("all")))
                    }}
                    className={`btn px-[24px] py-[12px] mr-3 ${ activeCountry == t("all")? 'bg-[#F56960] text-white' : 'text-black bg-[#F5F5F5]' }`}>
                        {t("all")}
                </button>
                {
                    data?.results?.map((item: CountriesType) => (
                        <button 
                            onClick={(e) => dispatch(changeCountry(e.currentTarget.id))}
                            key={item.id} 
                            id={item.title} 
                            className={`btn px-[24px] py-[12px] mr-3 ${ item.title == activeCountry ? 'bg-[#F56960] text-white' : 'text-black bg-[#F5F5F5]' }`}>
                                {item.title}
                        </button>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default CountryList