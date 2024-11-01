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
import { Container } from "../components/ui"
// import hero from '../../src/assets/images/hero.png'
import video from '../../src/assets/video/sea.mp4'


const Home = () => {
  
  return (
    <div>
      <div className="w-full min-h-[800px] md:min-h-[500px] relative bg-cover bg-no-repeat bg-center">
        <video src={video} className="object-cover absolute w-full h-full" autoPlay loop muted></video>
          <HeaderMain/>
      </div>
      <div>
        <Container>
          <Destinations />
        </Container>
        <Travelstyle />
        <div className="bg-gray-100 w-full flex flex-col items-center">
          <Tour type="summer" />
          <Tour type="winter" />
        </div>
        <div className="w-full flex justify-center bg-[#030626]">
          <Discount />
        </div>
        <div className="pt-11 flex flex-col items-center pb-[80px] sm:pb-[50px] bg-gray-100 w-full">
          <Container className="mb-9 box">
            <Opinions />
          </Container>
          <Container>
            <Reasons />
          </Container>
        </div>
        <div className="w-full padding flex justify-center">
          <Container>
            <Booking />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
