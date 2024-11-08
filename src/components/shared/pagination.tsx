import { useState } from "react"
import { SeasonCart } from "../../types"
import { summerFeature } from "../../utils"
import { Cart } from "../ui"
import ReactPaginate from 'react-paginate';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 1;
    const currentItems = summerFeature.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <div>
            <div>
                {
                    currentItems.map((item: SeasonCart) => (
                        <Cart
                            key={item.id}
                            id={item.id}
                            price={item.price} 
                            time={item.time} 
                            size={item.size} 
                            location={item.location} 
                            special={item.special} 
                            reviews={item.reviews} 
                            stars={item.stars} 
                            def={item.def}
                            img={item.img}
                        />
                    ))
                }
            </div>
            <div className="w-full flex justify-end">
                <ReactPaginate
                    previousLabel={"< Back"}
                    nextLabel={"Next >"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(summerFeature.length / itemsPerPage)}
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