import {
  Destinations,
  Travelstyle,
  Tour,
  Discount,
  Opinions,
  Reasons,
  Booking,
  HeaderMain
} from "../components/shared";
import hero from '../../src/assets/images/hero.png'


const Home = () => {
  
  return (
    <div>
      <div className="w-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${hero})`}}>
        <HeaderMain/>
      </div>
      <div>
        <div className="padding">
          <Destinations />
        </div>
        <Travelstyle />
        <div className="padding bg-gray-100 w-full flex flex-col items-center">
          <Tour type="summer" />
          <Tour type="winter" />
        </div>
        <div className="w-full flex justify-center bg-[#030626]">
          <Discount />
        </div>
        <div className="padding pt-11 flex flex-col items-center pb-[80px] sm:pb-[50px] bg-gray-100 w-full">
          <div className="mb-9 box">
            <Opinions />
          </div>
          <div className="box">
            <Reasons />
          </div>
        </div>
        <div className="w-full padding flex justify-center">
          <div className="box">
            <Booking />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
