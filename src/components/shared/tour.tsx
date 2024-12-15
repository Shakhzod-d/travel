// import { summerFeature, winterFeature } from '../../utils'
import { TourProps, TravelType } from '../../types'
import { Cart, Container, Loading } from '../ui'
import { useFetchTravelData } from '../../hooks'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'



const Tour = ({ type }: TourProps) => {
    const { t } = useTranslation()
    const { fetchTraveldata } = useFetchTravelData()
    const {  data, error, isLoading } = useQuery({
        queryKey: ['traveldata'],
        queryFn: fetchTraveldata
    })
    
    let filteredSummerData = data?.results?.filter((item: TravelType) => item.is_summer == true && item.is_popular == true)
    let filteredWinterData = data?.results?.filter((item: TravelType) => item.is_winter == true && item.is_popular == true)
    return (
      <Container className="flex flex-col w-full items-center">
        <h2 className="chaptertitle mb-7">{`${
          type == "summer" ? t("summertours") : t("wintertours")
        }`}</h2>
        <h3 className="h3 font-[500px] text-center text-[#666666] mb-11">{`${
          type == "summer" ? t("summerdef") : t("winterdef")
        }`}</h3>
        <div className="w-full flex justify-center">
          {
            <div className="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-6 w-full md:flex md:flex-col md:items-center">
              {isLoading ? (
                <Loading />
              ) : error instanceof Error ? (
                <div>Error: {error.message}</div>
              ) : data?.results?.length == 0 ? (
                <p className="text-red-500 text-xl">{t("notours")}</p>
              ) : type == "summer" ? (
                filteredSummerData?.map((item: TravelType) => (
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
                    duration={item.duration}
                    overall_rank={item.overall_rank}
                  />
                ))
              ) : (
                filteredWinterData?.map((item: TravelType) => (
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
                    duration={item.duration}
                    overall_rank={item.overall_rank}
                  />
                ))
              )}
            </div>
          }
        </div>
      </Container>
    );
}

export default Tour