/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { FacilitiesType } from "../../types";
import { Container, Loading } from "../ui";
// import { travelOverviewData } from "../../utils/constants";
import { useFetchData } from "../../hooks";
import { useQuery } from "react-query";

interface TravelOverviewProps {}

const TravelOverview: FC<TravelOverviewProps> = () => {
  const { fetchdata } = useFetchData("/api/tour/v1/availabilities");
  const { data, isLoading, error } = useQuery({
    queryKey: ["facilities"],
    queryFn: fetchdata,
  });

  return (
    <section
      className="bg-white mb-[75px] px-8 py-5 rounded-sm sm:px-0"
      id="overview"
    >
      <Container className="border-b w-full max-w-full mb-7 pb-7 rounded-md">
        <div>
          <div className="text-[#112211] text-xl font-bold ">
            Top facilities
          </div>
        </div>
        <div className="px-[1.83px] py-0.5 justify-center items-center inline-flex">
          <div className="w-[18.34px] h-[17.99px]"></div>
        </div>
        <div className="text-[#4e4e4e] text-base font-normal leading-snug tracking-tight">
          Featuring free WiFi throughout the property, Lakeside Motel Waterfront
          offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free
          private parking is available on site.
          <br />
          <br />
          Each room at this motel is air conditioned and comes with a
          flat-screen TV. You will find a kettle, toaster and a microwave in the
          room. Each room is fitted with a private bathroom. Guests have access
          to barbecue facilities and a lovely large lawn area. Metung is 6.8 mi
          from Lakeside Motel Waterfront, while Paynesville is 14 mi from the
          property.
          <br />
          <br />
          Couples in particular like the location – they rated it 9.2 for a
          two-person trip.
        </div>
      </Container>
      <Container>
        <h2 className="text-[#112211] text-xl font-bold mb-5">
          Top facilities
        </h2>
        <ul className="grid grid-cols-2 max-w-[600px] sm:grid-cols-1">
          {isLoading ? (
            <Loading />
          ) : error instanceof Error ? (
            <div>Error: {error.message}</div>
          ) : (
            data?.results?.map((item: FacilitiesType) => (
              <li key={item.id} className="flex mb-3 gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[22px] h-[22px]"
                />
                <p>{item.title}</p>
              </li>
            ))
          )}
        </ul>
      </Container>
    </section>
  );
};

export default TravelOverview;
