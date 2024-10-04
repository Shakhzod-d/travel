import { summerFeature, winterFeature } from '../../utils'
import { SeasonCart, TourProps } from '../../types'
import { Cart } from '../ui'



const Tour = ({ type }: TourProps) => {
    return (
        <div className="flex flex-col items-center py-11">
            <h2 className="h2">{`most popular ${type == 'summer' ? 'summer' : 'winter'} tours`}</h2>
            <h3 className="h3 text-center text-[#666666] mb-9">Discover the heart of Asia as you explore the historical, cultural, and scenic highlights of Uzbekistan, Kyrgyzstan, Kazakhstan, Tajikistan, and Turkmenistan in the company of other travellers from all over the world</h3>
            <div className="grid grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 gap-5">
                {
                    type == 'summer'
                    ?
                        summerFeature.map((item: SeasonCart) => (
                            <Cart
                                key={item.id}
                                id={item.id}
                                price={item.price} 
                                time={item.time} 
                                size={item.size} 
                                location={item.location} 
                                special={item.special} 
                                reviews={item.reviews} 
                                stars={item.stars} 
                                def={item.def}
                                img={item.img}
                            />
                        ))
                    :
                        winterFeature.map((item: SeasonCart) => (
                            <Cart
                                id={item.id}
                                price={item.price} 
                                time={item.time} 
                                size={item.size} 
                                location={item.location} 
                                special={item.special} 
                                reviews={item.reviews} 
                                stars={item.stars} 
                                def={item.def}
                                img={item.img}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default Tour