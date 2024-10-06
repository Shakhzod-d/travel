import { SeasonCart } from "../../types"
import clock from '../../assets/icons/clock.png'
import people from '../../assets/icons/people.png'
import locationicon from '../../assets/icons/location.png'
import yellowstar from '../../assets/icons/yellow-star.png'
import star from '../../assets/icons/star.png'

const Cart = ({ 
    id,
    price,
    time,
    size,
    location,
    special,
    reviews,
    def,
    img
 }: SeasonCart) => {
    return (
        <div key={id} className="flex flex-col items-start justify-between w-[350px] xl:w-[300px] md:w-full rounded-3xl shadow-2xl">
            <div className="relative">
                <div className="relative min-h-[272px] flex flex-col items-center">
                    <div style={{ backgroundImage: `url(${img})` }} className="bg-cover bg-no-repeat w-full h-[272px] rounded-3xl"></div>
                    <div className="w-full flex justify-end">
                        <div className="absolute top-8 rounded-tl-[200px] rounded-bl-[200px] bg-[#F56960] z-20 pl-1 py-[1px]">
                            <div className="flex items-center p-1">
                                <h3 className="h3 text-xl">{`$${price}`}</h3>
                                <h4 className="h4">/per person</h4>
                            </div>
                        </div>
                    </div>
                    <div className="absolute rounded-3xl -bottom-5 xm:-bottom-3 z-30 p-3 sm:p-3 sm:px-8 xm:p-1 flex sm:flex-wrap sm:justify-center bg-white shadow-lg">
                        <div className="mr-1 border-r-[1px] border-[#3F3F3F] flex items-center pr-1">
                            <img src={clock} alt="clock-icon" className="w-[19.5px] h-[19.5px] sm:w-[13px] sm:h-[13px] mr-2 sm:mr-[5px]"/>
                            <h4 className="h4 text-black sm:text-[13px]">{time}</h4>
                        </div>
                        <div className="mr-1 border-r-[1px] border-[#3F3F3F] flex justify-between items-center pr-1">
                            <img src={people} alt="people-icon" className="w-[19.5px] h-[19.5px] sm:w-[13px] sm:h-[13px] sm:mr-0 mr-2"/>
                            <h4 className="h4 text-black sm:text-[13px]">{size}</h4>
                        </div>
                        <div className="flex sm:flex items-center">
                            <img src={locationicon} alt="location-icon" className="w-[19.5px] h-[19.5px] sm:w-[13px] sm:h-[13px] sm:mr-0 mr-2"/>
                            <h4 className="h4 text-black sm:text-[13px]">{location}</h4>
                        </div>
                    </div>
                </div>
                <div className="p-4 pt-6">
                    <h3 className="h3 text-start text-[#444444]">{special}</h3>
                    <div className="flex">
                        <div className="my-3 flex">
                            <h5 className="text-sm text-[#6C6C6C] mr-4">{`${reviews} reviews`}</h5>
                            <img src={yellowstar} alt="star" className="mr-2"/>
                            <img src={star} alt="star" />
                        </div>
                    </div>
                    <h4 className="h4 text-[#6C6C6C]">{def}</h4>
                </div>
            </div>
        </div>
    )
}

export default Cart