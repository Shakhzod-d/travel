import { Container } from "../ui";
import { useTranslation } from "react-i18next"

const ExperienceSection = () => {
  const { t } = useTranslation()
  return (
    <section className="mb-[90px] sm:mb-[40px]">
      <Container>
        <div className="flex items-center flex-col gap-5 mb-12">
          <div className="h-11 px-5 py-2.5 bg-[#eaecf9] rounded  items-center gap-2.5 inline-flex">
            <p className="text-[#635aff] text-[20px] font-[600] uppercase leading-normal tracking-[2px] md:text-sm">
              {t("thisis")}
            </p>
          </div>
          <h2 className="max-w-[736px] text-center text-black text-[48px] font-[800] leading-[56px] uppercase md:text-3xl">
            {t("provide")}
          </h2>
          <p className="max-w-[998px] text-center text-[#666666] text-[24px] font-[500] md:text-lg ">
            {t("team")}
          </p>
        </div>

        <div className="flex flex-wrap md:flex-col md:items-center ">
          <div className="max-w-[574px] h-[191px] pl-6 pr-5 pt-5 pb-6 bg-white rounded flex-col  gap-2.5 inline-flex flex-1 sm:p-0">
            <div className="gap-7 flex items-start sm:flex-col sm:items-center sm:text-center sm:mb-5">
              <img
                src="/icons/vision.svg"
                className="pl-[4.88px] pr-[1.62px] pt-[8.12px] pb-[4.87px] justify-center items-center flex"
              />
              <div className="grow shrink basis-0 flex-col gap-3 inline-flex">
                <div className="text-[#0c141d] capitalize text-4xl font-semibold leading-[54px] sm:leading-[26px]">
                  {t("vision")}
                </div>
                <div className="text-[#667084] text-lg font-semibold leading-[27px]">
                  {t("visiondef")}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[574px] h-[191px] pl-6 pr-5 pt-5 pb-6 bg-white rounded flex-col  gap-2.5 inline-flex flex-1 sm:p-0">
            <div className=" gap-7 flex items-start sm:flex-col sm:items-center sm:text-center">
              <img
                src="/icons/mission.svg"
                className="w-[52px] pl-[6.50px] pr-[3.24px] pt-[11.38px] pb-[11.37px] justify-center items-center flex"
              />
              <div className="max-w-[450px] flex-col  gap-3 inline-flex">
                <div className="text-[#0c141d] capitalize text-4xl font-semibold leading-[54px] sm:leading-[26px]">
                  {t("mission")}
                </div>
                <div className="text-[#667084] text-lg font-semibold leading-[27px]">
                  {t("missiondef")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
