import { Header } from "../components/shared";
import { Container } from "../components/ui";
import { useParams } from 'react-router-dom'
import { useFetchData } from "../hooks";
import { useQuery } from "react-query";
import { Loading } from "../components/ui";
import { TravelType } from "../types";
import TravelLocation from "../components/shared/travel-location";
import TravelMenu from "../components/shared/travel-menu";
import TravelOthers from "../components/shared/travel-others";
import TravelOverview from "../components/shared/travel-overview";
import TravelPictures from "../components/shared/travel-pictures";
import TravelRating from "../components/shared/travel-rating";
import TravelReviews from "../components/shared/travel-reviews";
import TravelSummary from "../components/shared/travel-summary";
import TravelTitle from "../components/shared/travel-title";


const   Travel = () => {
  const { id } = useParams()

  const { fetchdata } = useFetchData(`/api/tour/v1/detail/${id}`)
  const { data, isLoading, error } = useQuery({
    queryKey: ['details'],
    queryFn: fetchdata
  })
  console.log(data)


  const {
    title = '',
    context = ''
  } = data || {}
  
  let country, city, reviews_count, images, facilities, overall
  if(data){
    country = data?.district?.country.title
    city = data?.district?.title
    reviews_count = data?.reviews
    facilities = data?.availabilities
    overall = data?.ranks?.overall
    images = data?.images?.map((item: TravelType) => item.image)
  }


  
  return (
    <main className="bg-[#F4F4F4]">
      <Header navBorder="black"/>
      {
        isLoading ? (
          <Loading />
        ) : error instanceof Error ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            <TravelTitle 
              title={title}
              country={country}
              city={city}
              reviews={reviews_count}
            />
            <TravelPictures images={images} title={title}/>
            <TravelMenu />
            <Container>
              <div className="flex justify-between gap-7 py-10 lg:flex-col">
                <div>
                  <TravelOverview 
                    facilities={facilities}
                    context={context}
                  />
                  <TravelRating 
                    overall={overall}
                    reviews={reviews_count}
                  />
                  <TravelReviews />
                  <TravelLocation />
                </div>
                <TravelSummary />
              </div>
            </Container>
            <TravelOthers />
          </>
        )
        
      }
    </main>
  );
};

export default Travel;
