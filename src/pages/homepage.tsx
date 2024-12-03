import {
  Destinations,
  Travelstyle,
  Tour,
  Discount,
  Opinions,
  Reasons,
  Booking,
  HeaderMain,
  Services
} from "../components/shared";
import { Container } from "../components/ui"
import video from '../../src/assets/video/uzb.mp4'

const Home = () => {
  
  return (
    <div>
      <div className="w-full h-screen overflow-hidden relative bg-cover bg-no-repeat bg-center">
        <video src={video} className="h-screen  object-cover absolute w-full " autoPlay loop muted></video>
        <HeaderMain/>
      </div>
      <div>
        <Container className="sectionpadding sm:pt-9">
          <Destinations/>
        </Container>
        <div className="bg-gray-100 w-full flex justify-center sectionpadding sm:pt-9">
          <Tour type="summer"/>
        </div>
        <div className="py-11">
          <Travelstyle />
        </div>
        <div className="bg-gray-100 sectionpadding sm:pt-9 w-full flex flex-col items-center">
          <Container className="w-full">
            <Services/>
          </Container>
        </div>
        <Container className="sectionpadding sm:pt-9">
          <Tour type="winter" />
        </Container>
        <div className="w-full flex justify-center bg-[#030626]">
          <Discount />
        </div>
        <div className="flex flex-col items-center pb-[80px] sm:pb-[50px] bg-gray-100 w-full">
          <Container className="sectionpadding sm:py-9 w-full">
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
