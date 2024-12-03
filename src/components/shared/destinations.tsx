import { useEffect, useRef } from "react"
import { TravelType } from "../../types"
import { useSelector, useDispatch } from "react-redux"
import { CountryList } from "./"
import { RootState } from "../../store/store"
import { useFetchData, useFetchTravelData } from "../../hooks"
import { useQuery } from "react-query"
import { Loading } from "../ui"
import { changeCountry, handleCategory, handleDistrict } from "../../store/main-slice"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { Carousel, SlideHandle } from 'nuka-carousel';
import location from '../../assets/icons/location.png'


const Destinations = () => {


    const { t } = useTranslation()
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.main)
    const { activeCountry } = state
    const { fetchTraveldata } = useFetchTravelData()
    const { data: travelData, isLoading, error } = useQuery({
        queryKey: ['traveldata'], 
        queryFn: fetchTraveldata
    })
    const { fetchdata } = useFetchData('/api/main/v1/countries')
    const { data: countriesData, isLoading: isLoading2 } = useQuery({
        queryKey: ['countries'], 
        queryFn: fetchdata
    });

    useEffect(() => {
        if(countriesData?.results?.length > 0){
            dispatch(changeCountry(t("all")))
        }
    }, [countriesData])

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


    let filteredTravelData = [];
    if (activeCountry && activeCountry !== t("all")) {
        filteredTravelData = travelData?.results?.filter(
            (item: TravelType) => item.country.title === activeCountry
    )}
    if(activeCountry == t("all")){
        filteredTravelData = travelData?.results
    }

    if(isLoading2){
        return <Loading/>
    }

    let slidedistance = document.querySelector('.styleLink')?.clientWidth

    return (
        <div className="flex flex-col items-center" id="destinations">
            <h2 className="md:text-3xl sm:text-2xl chaptertitle">{t("destinations")}</h2>
            <h4 className="text-[24px] sm:text-xl font-[600px] text-[#444444] py-5 text-center sm:w-[90%]">{t("discover")}</h4>
            <CountryList/>
            <div className="w-full mt-5">
                {
                    isLoading ? (
                        <Loading/>
                    ) : error instanceof Error ? (
                        <p className="text-red-500 text-xl">Error: {error.message}</p>
                    ) : filteredTravelData?.length === 0 ? (
                        <div className="w-full flex justify-center my-3">
                            <p className="text-red-500 text-xl break-words">{travelData?.results?.length === 0 ? t("notexistall") : t("notexist")}</p>
                        </div>
                    ) :
                    <div>
                        <Carousel 
                            ref={ref} 
                            swiping={true}
                            className="relative"
                            scrollDistance={slidedistance}
                            wrapMode="wrap"
                        >
                            <button onClick={goBack} className='w-[30px] h-[30px] border-[2px] border-gray-500 flex justify-center items-center text-xl text-white text-semibold bg-white rounded-full absolute left-3 top-[45%]'>
                                {<GrFormPreviousLink style={{ fontSize: 22, fontWeight: 600 }} className="text-gray-500 pointer-events-none"/>}
                            </button>
                            <button onClick={goForward} className='w-[30px] h-[30px] border-[2px] border-gray-500 flex justify-center items-center text-xl  text-white text-semibold bg-white rounded-full absolute right-5 top-[45%]'>
                                {<GrFormNextLink style={{ fontSize: 22, fontWeight: 600}} className="text-gray-500"/>}
                            </button>
                            {
                                filteredTravelData?.map((item: TravelType) => (
                                    <Link to={"/tours"} key={item.id} className="mr-4 styleLink">
                                        <button 
                                            onClick={() => {
                                                dispatch(changeCountry(item.country.title))
                                                dispatch(handleCategory(item.category.title))
                                                dispatch(handleDistrict(item.district.title))
                                            }} 
                                            style={{ backgroundImage: `url(${item.category.image})`}}
                                            className="flex justify-start items-end p-4 rounded-xl w-[519px] xl:w-[450px] lg:w-[350px] h-[314px] bg-center bg-cover bg-no-repeat">
                                                <div className='w-full flex xm:flex-col xm:items-start justify-between'>
                                                    <div >
                                                        <h3 className="h3">{item.district.title}</h3>
                                                        <div className='flex'>
                                                            <img src={location} alt="location" className='w-[20px] h-[20px] mr-1'/>
                                                            <h4 className="h4">{item.country.title}</h4>
                                                        </div>
                                                    </div>
                                                    <h3 className='text-white text-[40px] font-semibold'>${Math.round(item.price)}</h3>
                                                </div>
                                        </button>
                                    </Link>
                                ))
                            }
                        </Carousel>
                    </div>
                }
            </div>
        </div>
    )
}

export default Destinations