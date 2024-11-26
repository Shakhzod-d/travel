// import { summerFeature, winterFeature } from '../../utils'
import { TourProps, TravelType } from '../../types'
import { Cart, Container, Loading } from '../ui'
import { useFetchTravelData } from '../../hooks'
import { useQuery } from 'react-query'



const Tour = ({ type }: TourProps) => {
    const { fetchTraveldata } = useFetchTravelData()
    const {  data, error, isLoading } = useQuery({
        queryKey: ['traveldata'],
        queryFn: fetchTraveldata
    })
    
    let filteredData = data?.results.filter((item: TravelType) => item.category.title == type)
    
    return (
        <Container className="flex flex-col box items-center py-11">
            <h2 className="h2">{`most popular ${type == 'summer' ? 'summer' : 'winter'} tours`}</h2>
            <h3 className="h3 text-center font-semibold text-[#666666] mb-9">Discover the heart of Asia as you explore the historical, cultural, and scenic highlights of Uzbekistan, Kyrgyzstan, Kazakhstan, Tajikistan, and Turkmenistan in the company of other travellers from all over the world</h3>
            {
                <div className="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-5">
                {
                    isLoading ? (
                        <Loading/>
                    ) : error instanceof Error ? (
                        <div>Error: {error.message}</div>
                    ) : (
                    type == 'summer'
                    ?
                        filteredData?.map((item: TravelType) => (
                            <Cart
                                key={item.id}
                                id={item.id}
                                price={item.price} 
                                title={item.title}
                                days={item.days} 
                                nights={item.nights} 
                                country={item.country.title} 
                                def={item.context}
                                img={item.image}
                                slug={item.slug}
                                category={item.category.title}
                                district={item.district.title}
                            />
                        ))
                    :
                        filteredData?.map((item: TravelType) => (
                            <Cart
                                key={item.id}
                                id={item.id}
                                price={item.price} 
                                title={item.title}
                                days={item.days} 
                                nights={item.nights} 
                                country={item.country.title} 
                                def={item.context}
                                img={item.image}
                                slug={item.slug}
                                category={item.category.title}
                                district={item.district.title}
                            />
                        ))
                    )
                }
            </div>}
        </Container>
    )
}

export default Tour