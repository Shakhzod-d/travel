import { Container } from "./container";
import { FooterDataType, FooterIconsType } from "../../types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { FooterDatas } from "../../utils";
import { useScrollToTop } from "../../hooks";

const Footer = () => {
  const { t } = useTranslation()
  const { footerData1, footerData2, footerData3 } = FooterDatas()
  const {scrollToTop} = useScrollToTop()
  return (
    <footer className="bg-[#09132e] py-24">
      <Container className="flex flex-col items-center">
        <div className="flex gap-8 flex-wrap w-[90%] items-start sm:justify-start *:text-white justify-between mb-14">
          <button onClick={scrollToTop}>
            <img src="/welcome.png" alt="welcometoUzb" className="w-[187px] h-[44px]"/>
          </button>
          <div className="flex flex-wrap justify-between sm:justify-start gap-x-8 gap-y-5">
            <div className="sm:w-[90%]">
              <h2 className="mb-4 text-white text-lg font-medium capitilize">{t("learn")}</h2>
              <ul className="sm:flex sm:flex-wrap gap-3">
                {
                  footerData1.map((item : FooterDataType) => (
                    <li key={item.id} className="opacity-80 text-white text-sm font-bold leading-[30px] capitalize">
                      <Link to={item.path}>{item.data}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="sm:w-[90%]">
              <h2 className="mb-4 text-white text-lg font-medium">
                {t("booking")}
              </h2>
              <ul className="sm:flex sm:flex-wrap gap-3">
                {
                  footerData2.map((item: FooterDataType) => (
                    <li key={item.id} className="opacity-80 text-white text-sm font-bold leading-[30px]">
                      <Link to={item.path}>{item.data}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="sm:w-[90%]">
              <h2 className="mb-4 text-white text-lg font-medium capitalize">{t("contact")}</h2>
              <ul className="sm:flex sm:flex-wrap gap-3">
                <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
                  {t("hotel")} <b>:123-456-7890</b>
                </li>
                <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
                  {t("ticket")} <b>:123-456-7890</b>
                </li>
              </ul>
            </div>

          </div>
          <div>
            <h2 className="mb-4 text-white text-lg font-medium">{t("social")}</h2>
            <ul className="gap-7 flex">
              {
                footerData3.map((item: FooterIconsType) => (
                  <li key={item.id}>
                    <Link to={item.path}>
                      <img src={item.icon} alt={item.alt} />
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="pt-8 border-t border-[#ffffff28] w-[90%]">
          </div>
        </div>
        <p className="opacity-75 text-center text-white text-sm font-bold ">
          © {new Date().getFullYear()} Visit Uzbeksitan | All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;