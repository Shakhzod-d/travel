/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useEffect,useState,type FC } from "react";
import { Container } from "../ui";
import { useTranslation } from "react-i18next";
import { ReviewsType } from "../../types";
import ReviewCard from "../ui/review-card";

interface TravelReviewsProps {
  reviews: ReviewsType[],
  isNew?: boolean
}

const TravelReviews: FC<TravelReviewsProps> = ({
  reviews,
  isNew
}) => {
  const { t } = useTranslation();
  // const [currentPage, setCurrentPage] = useState(0);
  // const itemsPerPage = 1;
  const [currentItems, setCurrentItems] = useState<ReviewsType[]>(reviews);
  // const handlePageChange = (selectedPage: { selected: number }) => {
  //   setCurrentPage(selectedPage.selected);
  // };
  
  useEffect(() => {
    setCurrentItems(prev => [...prev].reverse());
  }, [isNew, ])

  return (
    <section
      className=" bg-white rounded-lg py-6 px-7 sm:px-2 sm:py-2"
      id="review"
    >
      <Container className="p-0">
        <h2 className=" text-[#112211] text-xl font-bold mb-7 capitalize">{t("reviews")}</h2>
        <div className="flex-col justify-start items-start gap-8 inline-flex px-8 sm:px-2 sm:py-2">
          {
            reviews?.length == 0 ? (
              <p className="text-lg font-semibold">{t("noreviews")}</p>
            ) : 
            currentItems?.map((item: ReviewsType) => (
              <ReviewCard 
                key={item.id} 
                reviews={item} 
              />
            ))
          }
        </div>
        {/* <div className="w-full flex justify-end">
          <ReactPaginate
              previousLabel={<ChevronLeftIcon/>}
              nextLabel={<ChevronRightIcon/>}
              breakLabel={"..."}
              pageCount={Math.ceil(reviews?.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination xm:flex-col xm:gap-y-7"}
              activeClassName={"active"}
              previousClassName={"previous"}
              nextClassName={"next"}
              pageClassName={"page"}
          />
        </div> */}
      </Container>
    </section>
  );
};

export default TravelReviews;
