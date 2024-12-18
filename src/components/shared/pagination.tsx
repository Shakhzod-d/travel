import ReactPaginate from "react-paginate";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

type Props = {
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: (number: number) => void;
};

const Pagination = ({ totalItems, itemsPerPage, setCurrentPage }: Props) => {
  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };
  

  return (
    <div className="w-full flex justify-end">
      <ReactPaginate
        previousLabel={<ChevronLeftIcon />}
        nextLabel={<ChevronRightIcon />}
        breakLabel={"..."}
        pageCount={Math.ceil(totalItems / itemsPerPage)}
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
  );
};

export default Pagination
