import { useFetchData } from "../../hooks"
import { CountriesType } from "../../types"
import { useQuery } from 'react-query';
import { Loading } from "../ui";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { changeCountry, handleDistrict } from "../../store/main-slice";
import { useTranslation } from "react-i18next";

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
    

    if (isLoading) {
        return <Loading/>;
    }

    if (error instanceof Error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='w-full text-[24px] flex flex-wrap gap-x-11 font-[500px] gap-y-5 justify-center lg:justify-start mb-5'>
            <button 
                onClick={_ => {
                    dispatch(changeCountry(t("all")))
                    dispatch(handleDistrict(t("all")))
                }}
                className={`btn px-[24px] py-[12px] ${ activeCountry == t("all")? 'bg-[#F56960] text-white' : 'text-black bg-[#F5F5F5]' }`}>
                    {t("all")}
            </button>
            {
                data?.results?.map((item: CountriesType) => (
                    <button 
                        onClick={(e) => dispatch(changeCountry(e.currentTarget.id))}
                        key={item.id} 
                        id={item.title} 
                        className={`btn px-[24px] py-[12px] ${ item.title == activeCountry ? 'bg-[#F56960] text-white' : 'text-black bg-[#F5F5F5]' }`}>
                            {item.title}
                    </button>
                ))
            }
        </div>
    )
}

export default CountryList