import { useState } from "react";
import { TravelType } from "../../types";
import { Cart, Loading } from "../ui";
import { useFetchTravelData } from "../../hooks";
import { useQuery } from "react-query";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

type Props = {
  clas: string;
  type: string;
};

const Pagination = ({ clas, type }: Props) => {
  const { t } = useTranslation();
  const state = useSelector((state: RootState) => state.main);
  const { activeCountry, category } = state;
  const { fetchTraveldata } = useFetchTravelData();
  const { data, error, isLoading } = useQuery({
    queryKey: ["traveldata"],
    queryFn: fetchTraveldata,
  });
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  let filteredItems = data?.results;

  if (category !== t("all")) {
    filteredItems = filteredItems?.filter(
      (item: TravelType) => item.category.title === category
    );
  }

  if (activeCountry !== t("all")) {
    filteredItems = filteredItems?.filter(
      (item: TravelType) => item.country.title === activeCountry
    );
  }

  if (clas !== t("all")) {
    switch (clas) {
      case "budget":
        filteredItems = filteredItems?.filter(
          (item: TravelType) => item.tour_class === 1
        );
        break;
      case "standard":
        filteredItems = filteredItems?.filter(
          (item: TravelType) => item.tour_class === 2
        );
        break;
      case "luxury":
        filteredItems = filteredItems?.filter(
          (item: TravelType) => item.tour_class === 3
        );
        break;
    }
  }

  if (type !== t("all")) {
    switch (type) {
      case "individual":
        filteredItems = filteredItems?.filter(
          (item: TravelType) => item.tour_type === 1
        );
        break;
      case "group":
        filteredItems = filteredItems?.filter(
          (item: TravelType) => item.tour_type === 2
        );
        break;
      case "daily":
        filteredItems = filteredItems?.filter(
          (item: TravelType) => item.tour_type === 3
        );
        break;
    }
  }


  if (
    category == t("all") &&
    activeCountry == t("all") &&
    clas == t("all") &&
    type == t("all")
  ) {
    filteredItems = data?.results;
  }

  const currentItems = filteredItems?.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full grid grid-cols-3 xl:grid-cols-2 md:flex md:flex-col md:items-center gap-x-7 gap-y-11">
        {currentItems?.length == 0 ? (
          <h2 className="h2 text-xl text-red-500 font-normal lowercase">
            {t("nomatching")}
          </h2>
        ) : (
          currentItems?.map((item: TravelType) => (
            <Cart
              key={item.id}
              id={item.id}
              price={item.price}
              title={item.title}
              days={item.days}
              nights={item.nights}
              duration={item.duration}
              country={item.country.title}
              def={item.context}
              img={item.image}
              slug={item.slug}
              overall_rank={item.overall_rank}
            />
          ))
        )}
      </div>
      <div className="w-full flex justify-end">
        <ReactPaginate
          previousLabel={<ChevronLeftIcon />}
          nextLabel={<ChevronRightIcon />}
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
  );
};

export default Pagination;
