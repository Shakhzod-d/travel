import {
  Destinations,
  Travelstyle,
  Tour,
  Discount,
  Opinions,
  Reasons,
  Booking,
  HeaderMain,
  Menu
} from "../components/shared";

const Home = () => {

  return (
    <div>
      <Menu/>
      <div className="w-full">
        <HeaderMain/>
      </div>
      <div>
        <div className="padding">
          <Destinations />
        </div>
        <Travelstyle />
        <div className="padding bg-gray-100">
          <Tour type="summer" />
          <Tour type="winter" />
        </div>
        <Discount />
        <div className="padding pt-11 pb-[80px] sm:pb-[50px] bg-gray-100">
          <div className="mb-9">
            <Opinions />
          </div>
          <Reasons />
        </div>
        <div className="w-full padding flex justify-center">
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default Home;
