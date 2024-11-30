import { useState } from "react";
import { Container, Loading } from "../ui";
import { useFetchData, useSanitize } from "../../hooks";
import { useQuery } from "react-query";
import { FaqType } from "../../types";
import { useTranslation } from "react-i18next"

const FAQsSection = () => {
  const { t } = useTranslation()
  const [active, setActive] = useState(0);
  const changeActive = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetId = e.currentTarget.id;
    if(Number(targetId) == active){
      setActive(0)
    }else{
      setActive(Number(targetId))
    }
  }
  const { sanitize } = useSanitize()
  const { fetchdata } = useFetchData('/api/main/v1/faq')
  const { data, error, isLoading } = useQuery({
    queryKey: ['faqs'], 
    queryFn: fetchdata
  });

  if (isLoading) {
    return <Loading/>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="py-[90px] bg-[#f5f9fa] sm:py-10">
      <Container className="flex-col  items-center gap-[60px] flex">
        <h2 className="text-[#0c141d] text-[60px] font-[600] leading-[78px] sm:text-3xl">
          {t("faqs")}
        </h2>
        <div className="h-[370px] flex-col  gap-8 flex md:h-full">
          {data?.results?.map((item: FaqType) => (
            <div
              className={`gap-7 flex cursor-pointer`}
              onClick={changeActive}
              key={item.id}
              id={item.id.toString()}
            >
              <p className="text-[#0c141d] w-11 text-[32px] font-semibold leading-[48px] sm:text-sm sm:pt-1 pointer-events-none">
                {data.results.indexOf(item) < 8 ? '0'+(data.results.indexOf(item) + 1) : data.results.indexOf(item)}
              </p>
              <div
                className={`gap-3 flex flex-col pt-2 ${
                  active == item.id
                    ? "max-h-full md:max-h-[100%] overflow-auto"
                    : "max-h-[48px] sm:max-h-[60px]"
                } overflow-hidden transition-all ease-in-out duration-500 pointer-events-none`}
              >
                <div className=" items-start flex">
                  <h2 className="text-[#0c141d] text-[24px] font-[600] leading-9 flex-1 sm:text-lg">
                    {item.title}
                  </h2>
                  <div className="pr-3 pt-5">
                    <div
                      className={`relative w-5 h-[2px] bg-[#0C141D] before:absolute before:w-[2px] before:h-5 before:bg-[#0c141d] before:-top-[9px] before:left-[9px] transition-all duration-700 ${
                        active == item.id ? "rotate-180 before:opacity-0" : ""
                      }  `}
                      />
                    </div>
                  </div>
                <div className="pr-3  gap-2.5 flex pointer-events-none">
                  <p className="text-[#667084] text-[18px] font-[600] leading-[27px]">
                    {sanitize(item.content)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQsSection;
