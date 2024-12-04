import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Loading } from "../components/ui";
import { CountryList, Pagination } from "../components/shared";
import { useFetchData } from "../hooks";
import { useQuery } from "react-query";
import { CategoryType, CountriesType, DistrictType } from "../types";
import { RootState } from "../store/store";
import { changeCountry, handleDistrict, handleCategory } from "../store/main-slice";
import { useTranslation } from "react-i18next"
import HeaderAbout from "../components/shared/header-about"
import ContactSection from "../components/shared/contact-section";


const Tours = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.main)
    const { activeCountry, category, district } = state
    const { fetchdata: fetchCategories } = useFetchData("api/tour/v1/categories")
    const { data: categoriesData, error: categoriesError, isLoading: categoriesLoading } = useQuery({
        queryKey: ['getCategories'],
        queryFn: fetchCategories
    })

    const { fetchdata: fetchDistricts } = useFetchData("api/main/v1/distiricts")
    const { data: districtsData, error: districtsError, isLoading: districtsLoading } = useQuery({
        queryKey: ['getDistricts'],
        queryFn: fetchDistricts
    })

    const { fetchdata } = useFetchData('/api/main/v1/countries')
    const { data: countriesData } = useQuery({
        queryKey: ['countries'], 
        queryFn: fetchdata
    });

    const { fetchdata: fetchdata2 } = useFetchData('/api/main/v1/distiricts')
    const { data:data2, isLoading: isLoading2 } = useQuery({
        queryKey: ['distiricts'], 
        queryFn: fetchdata2
    });

    let uniqueCategory = [t("all"),...new Set(categoriesData?.results.map((item: CategoryType) => item.title ))];

    let uniqueDistricts = [t("all"),...new Set(districtsData?.results.map((item: DistrictType) => item.title ))];
    

    let availableDistrict = []
    availableDistrict = districtsData?.results.filter((item: DistrictType) => item.country.title == activeCountry).map((item: { title: any; }) => item.title)
    

    //default category
    useEffect(() => {
        if(category == ''){
            dispatch(handleCategory(uniqueCategory[0]))
        }
    },[categoriesData])

    //default district
    useEffect(() => {
        dispatch(handleDistrict(uniqueDistricts[0]))
    },[districtsData])
    

    //default country
    useEffect(() => {
        if(countriesData?.results?.length > 0){
            dispatch(changeCountry(t("all")))
        }
    }, [countriesData])


    //changing country
    useEffect(() => {
        if(data2){
            let active = data2?.results?.find((item: CountriesType) => item.title == district)
            if(active){
                dispatch(changeCountry(active.country.title))
            }
        }
    },[data2])

    //changing district selection due to country
    useEffect(() => {
        if(countriesData?.results?.length > 0){
            const selectTag = document.getElementById('district') as HTMLSelectElement
            if(selectTag){
                selectTag.value = districtsData?.results?.filter((item: DistrictType) => item.country.title == activeCountry).map((item: { title: any; }) => item.title)[0]
                dispatch(handleDistrict(districtsData?.results?.filter((item: DistrictType) => item.country.title == activeCountry).map((item: { title: any; }) => item.title)[0]))
            }
        }
    }, [activeCountry, countriesData])

    const handleChangeDistrict = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(handleDistrict(e.currentTarget.value))
        let active = districtsData?.results?.filter((item: DistrictType) => item.title == e.currentTarget.value)[0]
        if(active){
            dispatch(changeCountry(active.country.title)) 
        }
    }

    if(isLoading2){
        return <Loading/>
    }

    return ( 
        <div>
            <HeaderAbout
                className="bg-[url('/Tour.png')] relative pb-[100px] bg-center bg-cover bg-no-repeat mb-20"
                route={"tours"}
                title={t("populartours")}
                desc={t("provide")}
            />
            <Container>
                <div className="flex flex-col items-center">
                    <div className="px-5 py-2.5 bg-[#eaecf9] rounded justify-start items-center gap-2.5 inline-flex mb-4 w-max">
                        <p className="text-[#635aff] text-[20px] font-[600] uppercase leading-[18px] tracking-[2px] sm:text-sm">
                            {t("besttours")}
                        </p>
                    </div>
                    <h2 className="chaptertitle">{t("provide")}</h2>
                    <h3 className="h3 font-[500] text-[24px] leading-[32.78px] text-center mt-5 px-7 sm:px-0 text-[#666666]">
                        {t("summerdef")}
                    </h3>
                </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-1 gap-5 mt-7 sm:mt-4 text-[#202430]">
                        {
                            categoriesLoading ? (
                                <Loading/>
                            ) : categoriesError instanceof Error ? (
                                <p className="text-red-500 text-xl">Error: {categoriesError.message}</p>
                            ) : categoriesData?.results && (
                                <select 
                                    name="categoryOptions" 
                                    id="category"
                                    value={category} 
                                    onChange={(e) => dispatch(handleCategory(e.target.value))}
                                    className="w-full rounded-lg px-2 py-4 outline-none bg-[#F5F5F5] font-semibold sm:mr-0 sm:mb-5 mr-2">
                                    {uniqueCategory.map((item: any) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                        ))
                                    }
                                </select>
                            )
                        }
                        {
                            districtsLoading || !activeCountry ? (
                                <Loading/>
                            ) : districtsError instanceof Error ? (
                                <div>Error: {districtsError.message}</div>
                            ) : districtsData?.results && (
                                <select 
                                    name="districtOptions" 
                                    id="district" 
                                    value={district}
                                    onChange={handleChangeDistrict}
                                    className=" w-full rounded-lg px-2 py-4 outline-none bg-[#F5F5F5] font-semibold">
                                    {
                                        activeCountry == 'all' ? (
                                            uniqueDistricts.map((item:any) => (
                                                <option 
                                                    key={item}
                                                    value={item}
                                                    disabled={activeCountry == t("all") ? false : !availableDistrict.includes(item)}
                                                >
                                                    {item}
                                                </option>
                                            ))
                                        ) : (
                                            [t("all"), ...uniqueDistricts.filter((item: any) => availableDistrict.includes(item))].map((item:any) => (
                                                <option 
                                                    key={item}
                                                    value={item}
                                                    disabled={activeCountry == t("all") || item == t("all") ? false : !availableDistrict.includes(item)}
                                                >
                                                    {item}
                                                </option>
                                            ))
                                        )
                                    }
                                </select>
                            )
                        }
                    </div>
                <div className="my-11 sm:my-5">
                    <CountryList/>
                </div>
                <div className="pb-[50px] sm:pb-5">
                    <Pagination/>
                </div>
            </Container>
            <ContactSection/>
        </div>
    )
}

export default Tours