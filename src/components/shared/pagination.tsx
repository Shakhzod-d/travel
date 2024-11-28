import { useState } from "react"
import { TravelType } from "../../types"
import { Cart, Loading } from "../ui"
import { useFetchTravelData } from "../../hooks"
import { useQuery } from "react-query"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import ReactPaginate from 'react-paginate';


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
    let filteredItems = data?.results?.filter((item: TravelType) => item.country.title == activeCountry && item.category.title == category && item.district.title == district);
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

    // console.log(activeCountry, district, category)


    return (
        <div className="flex flex-col items-center">
            <div className={`grid lg:grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-11 ${currentItems?.length == 0 ? "grid-cols-1" : "grid-cols-3"}`}>
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
                            category={item.category.title}
                            district={item.district.title}
                        />
                    ))
                }
            </div>
            <div className="w-full flex justify-end">
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
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