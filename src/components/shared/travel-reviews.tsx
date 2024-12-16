/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useEffect, useState, type FC } from "react";
import { Container, Loading } from "../ui";
import { useTranslation } from "react-i18next";
import { ReviewsType } from "../../types";
import ReviewCard from "../ui/review-card";
import { useFetchData } from "../../hooks";
import { useQuery } from "react-query";
import { useParams } from "react-router";

interface TravelReviewsProps {
  isNew?: boolean;
}

const TravelReviews: FC<TravelReviewsProps> = ({ isNew }) => {
  const { t } = useTranslation();
  const { id: slug } = useParams();

  const { fetchdata } = useFetchData(`/api/tour/v1/detail/${slug}`);
  const { data, isLoading, error } = useQuery({
    queryKey: ["details"],
    queryFn: fetchdata,
  });

  let { reviews } = data || {};
  const [currentItems, setCurrentItems] = useState<ReviewsType[]>(reviews);

  useEffect(() => {
    setCurrentItems(reviews)
  }, [reviews, data])

  useEffect(() => {
    setCurrentItems((prev) => [...prev].reverse());
  }, [isNew]);

  if (isLoading) {
    return <Loading />;
  }

  if(error instanceof Error){
    return <p className="error">Error: {error.message}</p>
  }

  return (
    <section className="bg-white rounded-lg p-6 sm:p-2" id="review">
      <Container className="p-0">
        <h2 className=" text-[#112211] text-xl font-bold mb-7 capitalize">
          {t("reviews")}
        </h2>
        <div className="flex-col justify-start items-start gap-8 inline-flex px-8 sm:px-2 sm:py-2">
          {reviews?.length == 0 ? (
            <p className="text-lg font-semibold">{t("noreviews")}</p>
          ) : (
            currentItems?.map((item: ReviewsType) => (
              <ReviewCard key={item.id} reviews={item} />
            ))
          )}
        </div>
      </Container>
    </section>
  );
};

export default TravelReviews;
