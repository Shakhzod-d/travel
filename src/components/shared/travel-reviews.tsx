/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useEffect,useState,type FC } from "react";
import { Container, Loading } from "../ui";
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
  const [loading, setLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState<ReviewsType[]>(reviews);
 
  useEffect(() => {
    setCurrentItems(prev => [...prev].reverse());
  }, [isNew])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if(loading) {
    return <Loading/>
  }
  return (
    <section
      className="bg-white rounded-lg py-6 px-7 sm:px-2 sm:py-2"
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
      </Container>
    </section>
  );
};

export default TravelReviews;
