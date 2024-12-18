import { TravelType } from "../../types";
import { Pagination } from "../shared";
import { Cart } from "../ui";
import { useTranslation } from "react-i18next";

type Props = {
  currentItems: TravelType[];
  filteredItems: TravelType[];
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
}

const TourCarts = ({
  currentItems,
  filteredItems,
  itemsPerPage,
  setCurrentPage,
} : Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full grid grid-cols-3 xl:grid-cols-2 md:flex md:flex-col md:items-center gap-x-7 gap-y-11">
        {currentItems.length === 0 ? (
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
      <Pagination
        totalItems={filteredItems?.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TourCarts;
