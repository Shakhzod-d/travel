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
      <div className="w-full min-h-[800px] md:min-h-[550px] relative bg-cover bg-no-repeat bg-center">
        <video src={video} className="min-h-[800px] md:min-h-[500px] object-cover absolute w-full h-full" autoPlay loop muted></video>
        <HeaderMain/>
      </div>
      <div>
        <Container className="sectionpadding">
          <Destinations/>
        </Container>
        <div className="bg-gray-100 w-full flex justify-center sectionpadding">
          <Tour type="summer"/>
        </div>
        <div className="py-11">
          <Travelstyle />
        </div>
        <div className="bg-gray-100 sectionpadding w-full flex flex-col items-center">
          <Container>
            <Services/>
          </Container>
        </div>
        <Container className="sectionpadding">
          <Tour type="winter" />
        </Container>
        <div className="w-full flex justify-center bg-[#030626]">
          <Discount />
        </div>
        <div className="flex flex-col items-center pb-[80px] sm:pb-[50px] bg-gray-100 w-full">
          <Container className="sectionpadding">
            <Opinions />
          </Container>
          <Container className="">
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
