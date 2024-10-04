import {
  Hero,
  Travelstyle,
  Tour,
  Discount,
  Header,
} from "../components/shared";
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
    <>
      <Header />
      <div>
        <Hero />
        <div className="padding py-11 flex flex-col items-center sm:px-0">
          <h2 className="h2 md:text-3xl sm:text-2xl">destinations</h2>
          <h4 className="text-2xl sm:text-xl font-normal py-5 text-center sm:w-[90%]">
            Discover all five delightful destinations across Central Asia
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-2 gap-4 xm:gap-1 template">
            {cartItems.map((item: CartItems) => (
              <div
                key={item.id}
                style={{ backgroundImage: `url(${item.img})` }}
                className="flex flex-col justify-between items-start p-4 rounded-xl w-[350px] xl:w-[300px] lg:w-[210px] sm:w-[150px] sm:h-[300px] h-[460px] xl:h-[410px] lg:h-[320px] bg-center bg-cover bg-no-repeat xm:scale-90"
              >
                <div className="round bg-gray-500 text-white p-3">
                  {item.country}
                </div>
                <div>
                  <h3 className="h3">{item.city}</h3>
                  <h4 className="h4">10 Popular places</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Travelstyle />
        <div className="padding bg-gray-200">
          <Tour type="summer" />
          <Tour type="winter" />
        </div>
        <Discount />
      </div>
    </>
  );
};

export default Home;
