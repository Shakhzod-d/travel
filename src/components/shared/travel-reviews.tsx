/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import ReviewCard from "../ui/review-card";
import { Container } from "../ui";

interface TravelReviewsProps {}

const TravelReviews: FC<TravelReviewsProps> = () => {
  return (
    <section
      className=" bg-white rounded-lg py-6 px-7 sm:px-2 sm:py-2"
      id="review"
    >
      <Container className="p-0">
        <h2 className=" text-[#112211] text-xl font-bold mb-7">Review</h2>
        <div className="flex-col justify-start items-start gap-8 inline-flex px-8 sm:px-2 sm:py-2">
          <ReviewCard />
        </div>
      </Container>
    </section>
  );
};

export default TravelReviews;
