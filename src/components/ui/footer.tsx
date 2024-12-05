import { Container } from "./container";
import { FooterDataType } from "../../types";
import { useTranslation } from "react-i18next"
import { useScrollToTop } from "../../hooks";
import { useFetchData, useSanitize } from "../../hooks";
import { useQuery } from "react-query";
import { Base_URL } from "../../api";
import CircularProgress from '@mui/material/CircularProgress';

const Footer = () => {
  const { t } = useTranslation()
  const { sanitize } = useSanitize()
  const { scrollToTop } = useScrollToTop()
  const { fetchdata } = useFetchData('/api/main/v1/footers')
  const { data, isLoading, error } = useQuery({
    queryKey: ['footer'],
    queryFn: fetchdata
  })

  let learnSection = data?.filter((item: FooterDataType) => item.type == 1)
  let bookingSection = data?.filter((item: FooterDataType) => item.type == 2)
  let contactSection = data?.filter((item: FooterDataType) => item.type == 3)
  let mediaSection = data?.filter((item: FooterDataType) => item.type == 4)

  return (
    <footer className="bg-[#09132e] py-24">
      <Container className="flex flex-col items-center">
        {
          isLoading ? (
            <CircularProgress size={40}/>
          ) : error instanceof Error ? (
            <div>Error: {error.message}</div>
          ) : (
            <div>
              <div className="flex gap-8 flex-wrap w-full items-start sm:justify-start *:text-white justify-between mb-14">
                <button onClick={scrollToTop}>
                  <img src="/welcome.png" alt="welcometoUzb" className="w-[187px] h-[44px]"/>
                </button>
                <div className="capitalize flex flex-wrap justify-between sm:justify-start gap-x-8 gap-y-5">
                  <div className="sm:w-[90%]">
                    <h2 className="mb-4 text-white text-lg font-medium capitilize">{t("learn")}</h2>
                    <ul className="sm:flex sm:flex-wrap gap-3">
                      {
                        learnSection?.map((item : FooterDataType) => (
                          <li key={item.id} className="opacity-80 text-white text-sm font-bold leading-[30px] capitalize">
                            <div>{sanitize(item.content)}</div>
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
                        bookingSection?.map((item: FooterDataType) => (
                          <li key={item.id} className="opacity-80 text-white text-sm font-bold leading-[30px]">
                            <div>{sanitize(item.content)}</div>
                          </li>
                        ))
                      }
                    </ul>
                  </div>

                  <div className="sm:w-[90%]">
                    <h2 className="mb-4 text-white text-lg font-medium capitalize">{t("contact")}</h2>
                    <ul className="sm:flex sm:flex-wrap gap-3">
                      {
                        contactSection?.map((item: FooterDataType) => (
                          <li key={item.id} className="opacity-80 text-white text-sm font-bold leading-[30px]">
                            <div>{sanitize(item.content)}</div>
                          </li>
                        ))
                      }
                    </ul>
                  </div>

                </div>
                <div>
                  <h2 className="mb-4 text-white text-lg font-medium">{t("social")}</h2>
                  <ul className="gap-7 flex">
                    {
                      mediaSection?.map((item: FooterDataType) => (
                        <li key={item.id}>
                          <img src={item?.image.includes('media') ? item.image : `${Base_URL}/media/${item.image}`} alt={item.content}/>
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
            </div>
          )
            
        }
      </Container>
    </footer>
  );
};

export default Footer;