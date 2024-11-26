import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Loading } from "../components/ui";
import { CountryList, Pagination } from "../components/shared";
import { useFetchData } from "../hooks";
import { useQuery } from "react-query";
import { CategoryType, CountriesType, DistrictType } from "../types";
import HeaderAbout from "../components/shared/header-about"
import ContactSection from "../components/shared/contact-section";
import { RootState } from "../store/store";
import { changeCountry, handleDistrict, handleCategory } from "../store/main-slice";


const Tours = () => {
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

    useEffect(() => {
        if(countriesData?.results?.length > 0){
            dispatch(changeCountry(countriesData?.results[0].title))
        }
    }, [countriesData])

    let uniqueCategory = [...new Set(categoriesData?.results.map((item: CategoryType) => item.title ))];

    let uniqueDistricts = [...new Set(districtsData?.results.map((item: DistrictType) => item.title ))];
    
    let availableDistrict = []
    availableDistrict = districtsData?.results.filter((item: DistrictType) => item.country.title == activeCountry).map((item: { title: any; }) => item.title)
    
    const { fetchdata: fetchdata2 } = useFetchData('/api/main/v1/distiricts')
    const { data:data2, isLoading: isLoading2 } = useQuery({
        queryKey: ['distiricts'], 
        queryFn: fetchdata2
    });

    let active = null
    useEffect(() => {
        if(data2){
        active = data2?.results?.find((item: CountriesType) => item.title == district)
        if(active){
        dispatch(changeCountry(active?.country.title))}}
    },[district, data2])


    useEffect(() => {
        if(countriesData?.results?.length > 0){
            const selectTag = document.getElementById('district') as HTMLSelectElement
            if(selectTag){
                selectTag.value = districtsData?.results.filter((item: DistrictType) => item.country.title == activeCountry).map((item: { title: any; }) => item.title)[0]
                dispatch(handleDistrict(selectTag.value))
            }

        }
    }, [activeCountry, countriesData])

    if(isLoading2 || !data2){
        return <Loading/>
    }

    return ( 
        <div>
            <HeaderAbout
                className="bg-[url('/Tour.png')] pb-[100px] bg-center bg-cover bg-no-repeat mb-20"
                route={"tours"}
                title={"Tours"}
                desc={"Provide the best travel experience for you!"}
            />
            <Container>
                <div className="flex flex-col items-center">
                    <div className="px-5 py-2.5 bg-[#eaecf9] rounded justify-start items-center gap-2.5 inline-flex mb-4 max-w-[183px] w-[max-content]">
                        <p className="text-[#635aff] text-xl font-semibold uppercase leading-normal tracking-widest sm:text-sm">
                            best tours
                        </p>
                    </div>
                    <h2 className="h2">Provide the best travel experience for you</h2>
                    <h3 className="h3 font-normal text-center mt-5 px-7 sm:px-0 text-[#666666]">Discover the heart of Asia as you explore the historical, cultural, and scenic highlights of Uzbekistan, Kyrgyzstan, Kazakhstan, Tajikistan, and Turkmenistan in the company of other travellers from all over the world</h3>
                </div>
                    <div className="w-full flex sm:flex-col justify-between">
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
                                    className="max-w-[600px] w-full rounded-lg px-2 py-4 outline-none bg-[#F5F5F5] font-semibold sm:mr-0 sm:mb-5 mr-2">
                                    {
                                        uniqueCategory.map((item:any) => (
                                            <option 
                                                key={item}
                                                value={item}
                                            >
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
                                    onChange={(e) => dispatch(handleDistrict(e.target.value))}
                                    className="max-w-[600px] w-full rounded-lg px-2 py-4 outline-none bg-[#F5F5F5] font-semibold">
                                    {
                                        uniqueDistricts.map((item:any) => (
                                            <option 
                                                key={item}
                                                value={item}
                                                disabled={!availableDistrict.includes(item)}
                                            >
                                                {item}
                                            </option>
                                        ))
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

