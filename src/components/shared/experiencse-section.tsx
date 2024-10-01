import { Container } from "../ui";

const ExperienceSection = () => {
  return (
    <section className="mb-[90px]">
      <Container>
        <div className="flex items-center flex-col gap-5 mb-12">
          <div className="h-11 px-5 py-2.5 bg-[#eaecf9] rounded  items-center gap-2.5 inline-flex">
            <p className="text-[#635aff] text-xl font-semibold  uppercase leading-normal tracking-widest max-[740px]:text-sm">
              THIS IS US
            </p>
          </div>
          <h2 className="max-w-[736px] text-center text-black text-5xl font-bold  uppercase max-[740px]:text-3xl">
            Provide the best travel experience for you
          </h2>
          <p className="max-w-[998px] text-center text-[#666666] text-2xl font-normal max-[740px]:text-lg ">
            We are a team of professionals with a deep passion for travel. We
            believe that travel is a window to adventure, cultural discovery and
            personal growth.
          </p>
        </div>

        <div className="flex flex-wrap max-[740px]:flex-col max-[740px]:items-center ">
          <div className="max-w-[574px] h-[191px] pl-6 pr-5 pt-5 pb-6 bg-white rounded flex-col  gap-2.5 inline-flex flex-1 max-[540px]:p-0">
            <div className=" gap-7 inline-flex items-start">
              <img
                src="/icons/vision.svg"
                className="pl-[4.88px] pr-[1.62px] pt-[8.12px] pb-[4.87px] justify-center items-center flex"
              />
              <div className="grow shrink basis-0 flex-col  gap-3 inline-flex">
                <div className="text-[#0c141d] text-4xl font-semibold leading-[54px]">
                  Our Vision
                </div>
                <div className="text-[#667084] text-lg font-semibold leading-[27px]">
                  Our vision is to become a leading travel agency company that
                  provides high-quality services and inspiration for our
                  customers.
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[574px] h-[191px] pl-6 pr-5 pt-5 pb-6 bg-white rounded flex-col  gap-2.5 inline-flex flex-1 max-[540px]:p-0">
            <div className=" gap-7 inline-flex items-start">
              <img
                src="/icons/mission.svg"
                className="w-[52px] pl-[6.50px] pr-[3.24px] pt-[11.38px] pb-[11.37px] justify-center items-center flex"
              />
              <div className="max-w-[450px] flex-col  gap-3 inline-flex">
                <div className="text-[#0c141d] text-4xl font-semibold leading-[54px]">
                  Our Mission
                </div>
                <div className="text-[#667084] text-lg font-semibold leading-[27px]">
                  Our mission is to provide travel packages that are unique,
                  personalized, and cater to individual wants and needs.
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
