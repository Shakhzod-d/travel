/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { FacilitiesType } from "../../types";
import { Container } from "../ui";
import { useTranslation } from "react-i18next";
import { useSanitize } from "../../hooks";

interface TravelOverviewProps {
  facilities: FacilitiesType[]
  context: string
}

const TravelOverview: FC<TravelOverviewProps> = ({
  facilities,
  context
}) => {
  const { t } = useTranslation()
  const { sanitize } = useSanitize()

  return (
    <section
      className="bg-white mb-[75px] px-8 py-5 rounded-sm sm:px-0 min-w-[700px] max-w-[740px] xl:min-w-[500px] md:min-w-[400px] sm:min-w-[250px] sm:w-full w-full"
      id="overview"
    >
      <Container className="border-b w-full max-w-full mb-7 pb-7 rounded-md">
        <div>
          <div className="text-[#112211] text-xl font-bold capitalize">
            {t("overview")}
          </div>
        </div>
        <div className="px-[1.83px] py-0.5 justify-center items-center inline-flex">
          <div className="w-[18.34px] h-[17.99px]"></div>
        </div>
        <div className="text-[#4e4e4e] text-base font-normal leading-snug tracking-tight">
          {sanitize(context)}
        </div>
      </Container>
      <Container>
        <h2 className="text-[#112211] text-xl font-bold mb-5 capitalize">
          {t("facilities")}
        </h2>
        <ul className={`grid max-w-[600px] sm:grid-cols-1 ${facilities?.length > 3 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {
            facilities?.map((item: FacilitiesType) => (
              <li key={item.id} className="flex mb-3 gap-3">
                <img src={item.image} alt={item.title} className="w-[22px] h-[22px]"/>
                <p>{item.title}</p>
              </li>
            )
          )}
        </ul>
      </Container>
    </section>
  );
};

export default TravelOverview;
