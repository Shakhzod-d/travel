import { useEffect } from "react"
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
import { Carousel } from 'nuka-carousel';
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

    return (
        <div className="py-11 flex flex-col items-center" id="destinations">
            <h2 className="md:text-3xl sm:text-2xl chaptertitle">{t("destinations")}</h2>
            <h4 className="text-[24px] sm:text-xl font-[600px] text-[#444444] py-5 text-center sm:w-[90%]">{t("discover")}</h4>
            <CountryList/>
            
            <div className="w-full">
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
                        <Carousel 
                            scrollDistance="slide" 
                            wrapMode="wrap" 
                            swiping={true}
                            showArrows={filteredTravelData?.length > 2 ? true : false}
                        >
                            {
                                filteredTravelData?.map((item: TravelType) => (
                                    <Link to={"/tours"} key={item.id} className="mr-4">
                                        <button 
                                            onClick={() => {
                                                dispatch(changeCountry(item.country.title))
                                                dispatch(handleCategory(item.category.title))
                                                dispatch(handleDistrict(item.district.title))
                                            }} 
                                            style={{ backgroundImage: `url(${item.category.image})`}}
                                            className="flex justify-start items-end p-4 rounded-xl w-[519px] xl:w-[450px] sm:w-[350px] h-[314px] bg-center bg-cover bg-no-repeat">
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
                }
            </div>
        </div>
    )
}

export default Destinations