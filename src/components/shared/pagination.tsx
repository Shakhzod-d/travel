import { useState } from "react"
import { TravelType } from "../../types"
import { Cart, Loading } from "../ui"
import { useFetchTravelData } from "../../hooks"
import { useQuery } from "react-query"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import ReactPaginate from 'react-paginate';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const Pagination = () => {
    const { t } = useTranslation()
    const state = useSelector((state: RootState) => state.main)
    const { activeCountry, district, category } = state
    const { fetchTraveldata } = useFetchTravelData()
    const {  data, error, isLoading } = useQuery({
        queryKey: ['traveldata'],
        queryFn: fetchTraveldata
    })
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    
    let filteredItems = data?.results
    
    if (category !== t("all")) {
        filteredItems = filteredItems?.filter((item: TravelType) => item.category.title === category);
    }

    if (activeCountry !== t("all")) {
        filteredItems = filteredItems?.filter((item: TravelType) => item.country.title === activeCountry);
    }

    if (district !== t("all")) {
        filteredItems = filteredItems?.filter((item: TravelType) => item.district.title === district);
    }
    
    if(activeCountry == t("all")) filteredItems = data?.results
    
    const currentItems = filteredItems?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    
    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };
    
    if(isLoading){
        return <Loading/>
    }

    if(error instanceof Error){
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="flex flex-col items-center">
            <div className={`grid xl:grid-cols-2 md:flex md:flex-col md:w-full md:items-center gap-x-5 gap-y-11 ${currentItems?.length == 0 ? "grid-cols-1" : "grid-cols-3"}`}>
                {
                    currentItems?.length == 0 ? <h2 className="h2 text-xl text-red-500 font-normal lowercase">{t("nomatching")}</h2> :
                    currentItems?.map((item: TravelType) => (
                        <Cart
                            key={item.id}
                            id={item.id}
                            price={item.price} 
                            title={item.title}
                            days={item.days} 
                            nights={item.nights} 
                            country={item.country.title} 
                            def={item.context}
                            img={item.image}
                            slug={item.slug}
                            overall_rank={item.overall_rank}
                        />
                    ))
                }
            </div>
            <div className="w-full flex justify-end">
                <ReactPaginate
                    previousLabel={<ChevronLeftIcon/>}
                    nextLabel={<ChevronRightIcon/>}
                    breakLabel={"..."}
                    pageCount={Math.ceil(filteredItems?.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination xm:flex-col xm:gap-y-7"}
                    activeClassName={"active"}
                    previousClassName={"previous"}
                    nextClassName={"next"}
                    pageClassName={"page"}
                />
            </div>
        </div>
    )
}

export default Pagination