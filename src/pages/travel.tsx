import { Header } from "../components/shared";
import TravelLocation from "../components/shared/travel-location";
import TravelMenu from "../components/shared/travel-menu";
import TravelOthers from "../components/shared/travel-others";
import TravelOverview from "../components/shared/travel-overview";
import TravelPictures from "../components/shared/travel-pictures";
import TravelRating from "../components/shared/travel-rating";
import TravelReviews from "../components/shared/travel-reviews";
import TravelSummary from "../components/shared/travel-summary";
import TravelTitle from "../components/shared/travel-title";
import { Container } from "../components/ui";

const   Travel = () => {
  return (
    <main className="bg-[#F4F4F4]">
      <Header navBorder="black"/>
      <TravelTitle />
      <TravelPictures />
      <TravelMenu />
      <Container>
        <div className="flex justify-between gap-7 py-10 lg:flex-col">
          <div>
            <TravelOverview />
            <TravelRating />
            <TravelReviews />
            <TravelLocation />
          </div>
          <TravelSummary />
        </div>
      </Container>
      <TravelOthers />
    </main>
  );
};

export default Travel;
