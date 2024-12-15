import { useSanitize, useScrollToTop } from "../../hooks";
import { Base_URL } from "../../api";
import { Link } from "react-router-dom";
import Rating from "./rating";
import clock from "../../assets/icons/clock.png";
import people from "../../assets/icons/people.png";
import locationicon from "../../assets/icons/location.png";

interface Props {
  id: number;
  price: string;
  title: string;
  days: number | null;
  nights: number | null;
  duration: string;
  country: string;
  def: string;
  img: string;
  slug: string;
  overall_rank: number;
}

const Cart = ({
  id,
  price,
  days,
  nights,
  duration,
  title,
  country,
  def,
  img,
  slug,
  overall_rank
}: Props) => {
  const { sanitize } = useSanitize();
  const { scrollToTop } = useScrollToTop();
  const redirectToTour = () => {
    scrollToTop();
  };



  return (
    <Link
      to={`/tours/${slug}`}
      className="w-full md:w-[70%] sm:w-full flex flex-col items-start h-[547px] pb-3 overflow-y-hidden justify-between rounded-3xl shadow-2xl"
    >
      <div onClick={redirectToTour} key={id} className="w-full">
        <div className="relative">
          <div className="relative min-h-[272px] flex flex-col items-center">
            {img && (
              <img
                src={img.includes("media") ? img : `${Base_URL}/media/${img}`}
                alt={title}
                className="w-full h-[272px] rounded-3xl"
              ></img>
            )}
            <div className="w-full flex justify-end">
              <div className="absolute top-8 rounded-tl-[200px] rounded-bl-[200px] bg-[#F56960] z-20 pl-1 py-[1px]">
                <div className="flex items-center p-1">
                  <h3 className="h3 text-xl">{`$${Math.round(Number(price))}`}</h3>
                  <h4 className="h4">/per person</h4>
                </div>
              </div>
            </div>
            <div className="absolute rounded-3xl text-[#3F3F3F] -bottom-5 xm:-bottom-3 z-30 p-3 sm:p-3 sm:px-8 xm:p-1 flex sm:flex-wrap sm:justify-center bg-white shadow-md">
              <div className="mr-1 border-r-[1px] border-[#3F3F3F] flex items-center pr-1">
                <img
                  src={clock}
                  alt="clock-icon"
                  className="w-[19.5px] h-[19.5px] sm:w-[13px] sm:h-[13px] mr-2 sm:mr-[5px]"
                />
                <h4 className="h4 sm:text-[13px] text-[#3F3F3F]">{days && nights ? `${days}D/${nights}N` : duration}</h4>
              </div>
              <div className="mr-1 border-r-[1px] border-[#3F3F3F] flex justify-between items-center pr-1">
                <img
                  src={people}
                  alt="people-icon"
                  className="w-[19.5px] h-[19.5px] sm:w-[13px] sm:h-[13px] sm:mr-0 mr-2"
                />
                <h4 className="h4 sm:text-[13px] text-[#3F3F3F]">{14}</h4>
              </div>
              <div className="flex sm:flex items-center">
                <img
                  src={locationicon}
                  alt="location-icon"
                  className="w-[19.5px] h-[19.5px] sm:w-[13px] sm:h-[13px] sm:mr-0 mr-2"
                />
                <h4 className="h4 sm:text-[13px] text-[#3F3F3F]">{country}</h4>
              </div>
            </div>
          </div>
          <div className="p-4 pt-6 text-start">
            <h3 className="h3 text-[24px] text-start cartdefinition text-[#444444] font-[700]">
              {title}
            </h3>
            <div className="flex">
              <div className="my-3 flex">
                <h5 className="text-[14px] text-[#6C6C6C] mr-4">{`${overall_rank} reviews`}</h5>
                <Rating rating={overall_rank} />
              </div>
            </div>
            <h4 className="cartdefinition text-[#3F3F3F] font-[400px]">
              {sanitize(def)}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cart;
