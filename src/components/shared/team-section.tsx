// import { teamData } from "../../utils";
import { Container, Loading } from "../ui";
import { TeamType } from "../../types";
import { useQuery } from "react-query";
import { useFetchData } from "../../hooks";
import { useTranslation } from "react-i18next"

const TeamSection = () => {
  const { t } = useTranslation()
  const { fetchdata } = useFetchData('/api/main/v1/teams')
  const { data, error, isLoading } = useQuery({
    queryKey: ["team"],
    queryFn: fetchdata
  })

  return (
    <section>
      <Container>
        <div className="flex justify-center mb-8 max-w-screen">
          <div className="flex-col justify-start items-center gap-4 inline-flex">
            <div className="px-5 py-2.5 bg-[#eaecf9] rounded justify-start items-center gap-2.5 inline-flex">
              <p className="text-[#635aff] text-xl font-semibold uppercase leading-normal tracking-widest sm:text-sm">
                {t("ourteam")}
              </p>
            </div>
            <div className="flex-col justify-center items-center gap-5 flex max-w-[80%] mx-auto ">
              <h2 className="text-center text-[#0c141d] text-6xl font-semibold leading-[78px] max-w-[696px] sm:text-2xl w-full">
                {t("experienced")}
              </h2>
              <p className=" text-center text-[#667084] text-lg font-semibold leading-[27px] sm:text-lg">
                {t("consist")}
              </p>
            </div>
          </div>
        </div>
        {
          isLoading ? (
            <Loading/>
          ) : error instanceof Error ? (
            <div>Error: {error.message}</div>
          )
          :
            data?.results && <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5">
              {data.results.map((item: TeamType) => (
                <div key={item.id} className="card w-[100%] max-w-[100%]">
                  <img
                    src={item.image}
                    alt={item.full_name}
                    className="w-full"
                  />

                  <div className="card-content">
                    <h3 className="text-white text-[32px] font-semibold leading-[48px]">
                      {item.full_name}
                    </h3>
                    <p className="text-[#98a1b2] text-xl font-semibold leading-[30px] mb-5">
                      {item.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        }
      </Container>
    </section>
  );
};

export default TeamSection;
