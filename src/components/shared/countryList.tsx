import { useChangeActiveCountry, useFetchData } from "../../hooks";
import { CountriesType } from "../../types";
import { useQuery } from "react-query";
import { Loading } from "../ui";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CountryList = () => {
  const state = useSelector((state: RootState) => state.main);
  const { activeCountry } = state;
  const { changeActiveCountry } = useChangeActiveCountry();
  const { fetchdata } = useFetchData("/api/main/v1/countries");
  const { data, error, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchdata,
  });
  if (isLoading) {
    return <Loading />;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="w-full flex flex-wrap gap-x-11 gap-y-5 justify-center lg:justify-start mb-5">
      {data?.results?.map((item: CountriesType) => (
        <button
          onClick={changeActiveCountry}
          key={item.id}
          id={item.title}
          className={`btn px-[24px] py-[12px] ${
            activeCountry.length !== 0
              ? item.title == activeCountry
                ? "bg-[#F56960] text-white"
                : "text-black bg-[#F5F5F5]"
              : data.results.indexOf(item) == 0 && "bg-[#F56960] text-white"
          }`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default CountryList;
