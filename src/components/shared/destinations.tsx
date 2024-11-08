import { CartItems } from "../../types"
import { cartItems } from '../../utils'
import location from '../../assets/icons/location.png'
import { useSelector } from "react-redux"
import { CountryList } from "./"
import { RootState } from "../../store/store"
// import uz from '../../assets/images/uzb.png'
// import kaz from '../../assets/images/kaz.png'
// import kry from '../../assets/images/kry.png'
// import tad from '../../assets/images/tad.png'
// import tur from '../../assets/images/tur.png'

const Destinations = () => {
    const state = useSelector((state: RootState) => state.main)
    const { activeCountry } = state
    // const cartItems = [
    //     {
    //         id: uuidv4(),
    //         country: "Uzbekistan",
    //         city: "Samarkand",
    //         img: uz
    //     },
    //     {
    //         id: uuidv4(),
    //         country: "Kazakhstan",
    //         city: "Almaty",
    //         img: kaz
    //     },
    //     {
    //         id: uuidv4(),
    //         country: "Kyrgzstan",
    //         city: "Bishkek",
    //         img: kry
    //     },
    //     {
    //         id: uuidv4(),
    //         country: "Tadjikistan",
    //         city: "Dushanbe",
    //         img: tad
    //     },
    //     {
    //         id: uuidv4(),
    //         country: "Turkmenistan",
    //         city: "Ashgabat",
    //         img: tur
    //     }
    // ]
    return (
        <div className="py-11 flex flex-col items-center">
            <h2 className="h2 md:text-3xl sm:text-2xl">destinations</h2>
            <h4 className="text-[24px] sm:text-xl font-normal py-5 text-center sm:w-[90%]">Discover all five delightful destinations across Central Asia</h4>
            <CountryList/>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 xm:gap-1 template md:w-full">
                {
                    cartItems.map((item: CartItems) => (
                        item.country == activeCountry &&
                        <div 
                            key={item.id} 
                            style={{ backgroundImage: `url(${item.img})` }}
                            className="flex justify-start items-end p-4 rounded-xl w-[519px] xl:w-[450px] lg:w-[350px] md:w-full h-[314px] bg-center bg-cover bg-no-repeat">
                                <div className='w-full flex xm:flex-col justify-between'>
                                    <div >
                                        <h3 className="h3">{item.city}</h3>
                                        <div className='flex'>
                                            <img src={location} alt="location" className='w-[20px] h-[20px] mr-1'/>
                                            <h4 className="h4">{item.location}</h4>
                                        </div>
                                    </div>
                                    <h3 className='text-white text-[40px] font-semibold'>${item.price}</h3>
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Destinations