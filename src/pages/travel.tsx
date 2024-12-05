import { useEffect, useState } from "react";
import { Header } from "../components/shared";
import { Container } from "../components/ui";
import { useParams } from 'react-router-dom'
import { useFetchData } from "../hooks";
import { useQuery } from "react-query";
import { Loading } from "../components/ui";
import { handleId } from "../store/main-slice";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch()
  const { id: slug } = useParams()
  const [isNew, setIsNew] = useState(false);
  const sortReviews = () => {
    setIsNew(!isNew)
  }
  const { fetchdata } = useFetchData(`/api/tour/v1/detail/${slug}`)
  const { data, isLoading, error } = useQuery({
    queryKey: ['details'],
    queryFn: fetchdata
  })


  const {
    id = 0,
    title = '',
    context = '',
    ranks = [],
    price = '',
    start_date = '',
    end_date = '',
    days = 0,
    nights = 0,
    lot = null,
    lang = null,
    others = []
  } = data || {}
  
  let country, city, reviews, images, facilities, overall
  if(data){
    country = data?.district?.country.title
    city = data?.district?.title
    reviews = data?.reviews
    facilities = data?.availabilities
    overall = data?.ranks?.overall
    images = data?.images
  }

  useEffect(() => {
    if(id !== 0){
      dispatch(handleId(id))
    }
  }, [id])

  


  
  return (
    <main className="bg-[#F4F4F4]">
      <Header/>
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
              reviews={reviews}
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
                    reviews={reviews}
                    ranks={ranks}
                    sortReviews={sortReviews}
                  />
                  <TravelReviews 
                    reviews={reviews}
                    isNew={isNew}
                  />
                  <TravelLocation 
                    country={country}
                    city={city}
                    lot={lot}
                    lang={lang}
                  />
                </div>
                <TravelSummary 
                  price={price}
                  start_date={start_date}
                  end_date={end_date}
                  days={days}
                  nights={nights}
                  overall={overall}
                />
              </div>
            </Container>
            <TravelOthers 
              others={others}
            />
          </>
        )
        
      }
    </main>
  );
};

export default Travel;
