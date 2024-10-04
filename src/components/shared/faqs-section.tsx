import { useState } from "react";
import { faqsData } from "../../utils/constants";
import { Container } from "../ui";

const FAQsSection = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="py-[90px] bg-[#f5f9fa] max-[670px]:py-10">
      <Container className="flex-col  items-center gap-[60px] flex">
        <h2 className="text-[#0c141d] text-6xl font-semibold leading-[78px] max-[670px]:text-3xl">
          Frequently asked questions
        </h2>
        <div className="h-[370px] flex-col  gap-8 flex max-[740px]:h-full">
          {faqsData.map((item) => (
            <div
              className={`gap-7 flex  `}
              onClick={() => setActive(item.id)}
              key={item.id}
            >
              <p className="text-[#0c141d] text-[32px] font-semibold leading-[48px] max-[670px]:text-sm">
                {item.ind}
              </p>
              <div
                className={`flex-col  gap-3 flex  ${
                  active == item.id
                    ? "max-h-full max-[740px]:max-h-[100%] overflow-auto"
                    : "max-h-[48px] max-[520px]:max-h-[60px]"
                } overflow-hidden transition-all  duration-500`}
              >
                <div className=" items-center flex ">
                  <h2 className="text-[#0c141d] text-2xl font-semibold leading-9 flex-1 max-[670px]:text-lg">
                    {item.title}
                  </h2>
                  <div
                    className={`relative w-5 h-[2px] bg-[#0C141D] before:absolute before:w-[2px] before:h-5 before:bg-[#0c141d] before:-top-[9px] before:left-[9px] transition-all duration-700 ${
                      active == item.id ? "rotate-180 before:opacity-0 " : ""
                    }  `}
                  />
                </div>
                <div className="pr-3  gap-2.5 flex">
                  <p className="text-[#667084] text-lg font-semibold leading-[27px] text-[12px]">
                    {item.desc}
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