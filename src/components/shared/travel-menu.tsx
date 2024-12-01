/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useState, type FC } from "react";
import { Container } from "../ui";
import { TravelMenuDatas } from "../../utils/constants";

interface TravelMenuProps {}

const TravelMenu: FC<TravelMenuProps> = () => {
  const { travelMenuData } = TravelMenuDatas()
  const [active, setActive] = useState(1);
  return (
    <section className="bg-white pb-10 capitalize">
      <Container className="sm:w-full">
        <div className="justify-start items-start flex flex-wrap">
          {travelMenuData?.map((item) => (
            <div
              className={`px-5 py-2 bg-white rounded-tl-sm rounded-tr-sm border-b ${
                active == item.id
                  ? "border-[#2f80ed] border-b"
                  : "border-[#98a1b2]"
              } items-center gap-2.5 flex xm:w-full`}
              key={item.id}
              onClick={() => setActive(item.id)}
            >
              <a
                className={`text-center ${
                  active == item.id ? "text-[#2f80ed]" : "text-[#667084]"
                } text-xl font-semibold leading-[30px] w-full`}
                href={item.to}
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TravelMenu;
