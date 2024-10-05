
import { 
    Hero, 
    Destinations,
    Travelstyle, 
    Tour, 
    Discount, 
    Opinions, 
    Reasons ,
    Booking
} from "../components/shared"

import { v4 as uuidv4 } from "uuid";
import { CartItems } from "../types";
import uz from "../assets/images/uzb.png";
import kaz from "../assets/images/kaz.png";
import kry from "../assets/images/kry.png";
import tad from "../assets/images/tad.png";
import tur from "../assets/images/tur.png";


const Home = () => {
  const cartItems = [
    {
      id: uuidv4(),
      country: "Uzbekistan",
      city: "Samarkand",
      img: uz,
    },
    {
      id: uuidv4(),
      country: "Kazakhstan",
      city: "Almaty",
      img: kaz,
    },
    {
      id: uuidv4(),
      country: "Kyrgzstan",
      city: "Bishkek",
      img: kry,
    },
    {
      id: uuidv4(),
      country: "Tadjikistan",
      city: "Dushanbe",
      img: tad,
    },
    {
      id: uuidv4(),
      country: "Turkmenistan",
      city: "Ashgabat",
      img: tur,
    },
  ];
 
    return (
        <div>
            <Hero/>
            <div className="padding">
                <Destinations/>
            </div>
            <Travelstyle/>
            <div className="padding bg-gray-100">
                <Tour type='summer'/>
                <Tour type='winter'/>
            </div>
            <Discount/>
            <div className="padding pt-11 pb-[80px] sm:pb-[50px] bg-gray-100">
                <div className="mb-9">
                    <Opinions/>
                </div>
                <Reasons/>
            </div>
            <div className="w-full padding flex justify-center">
                <Booking/>
            </div>

        </div>
        <Discount />
      </div>
    </>
  );
};

export default Home;
