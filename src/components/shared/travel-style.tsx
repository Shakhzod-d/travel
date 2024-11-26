import { TravelStyles } from "../../types";
import { Link } from "react-router-dom";
import { Container, Loading } from "../ui";
import { useFetchData } from "../../hooks";
import { useQuery } from "react-query";

const Travelstyle = () => {
  const { fetchdata } = useFetchData("/api/tour/v1/categories");
  const { data, isLoading, error } = useQuery({
    queryKey: ["styles"],
    queryFn: fetchdata,
  });
  return (
    <div className="w-full flex justify-center">
      <Container className="flex flex-col items-center py-3 box">
        <h2 className="h2 md:text-3xl sm:text-2xl mb-8">
          STYLES TO TRAVEL IN CENTRAL ASIA
        </h2>
        <div className="flex flex-wrap justify-center">
          {isLoading ? (
            <Loading />
          ) : error instanceof Error ? (
            <div>Error: {error.message}</div>
          ) : (
            data?.results?.map((item: TravelStyles) => (
              <div
                key={item.id}
                style={{ backgroundImage: `url(${item.image})` }}
                className="bg-cover bg-center bg-no-repeat flex flex-col mr-5 mb-5 lg:mr-0 xl:even:mr-0 justify-between p-4 rounded-3xl h-[280px] w-[450px] lg:w-[500px] md:w-full"
              >
                <div>
                  <h3 className="h3 uppercase">{item.title}</h3>
                  <h4 className="h4">{"item.definition"}</h4>
                </div>
                <Link
                  to="#"
                  target="_blank"
                  className="h4 text-yellow-400 w-max"
                >
                  {"item.link"}
                </Link>
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default Travelstyle;
