import { Container } from "../ui";
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollToTop";

const ContactSection = () => {
  const { scrollToTop } = useScrollTop()
  const { t } = useTranslation()
  return (
    <section className="bg-[#f5f9fa] pt-20 pb-24">
      <Container className="flex gap-10 lg:flex-col items-end sm:flex-col">
        <div className="flex-col justify-start gap-4 flex">
          <div className="px-5 py-2.5 bg-[#eaecf9] rounded justify-start items-center gap-2.5 inline-flex mb-4 w-[max-content]">
            <p className="text-[#635aff] text-[20px] font-[600] uppercase leading-normal tracking-[2px] sm:text-sm">
              {t("contact")}
            </p>
          </div>
          <div className="flex-col justify-center gap-5 flex">
            <div className="self-stretch text-[#0c141d] text-[60px] font-[600] leading-[78px] mb-5 sm:text-3xl">
              {t("alwaysready")}
            </div>
            <div className="self-stretch text-[#667084] text-[18px] font-[600] leading-[27px]">
              {t("hesitate")}
            </div>
          </div>
        </div>
        <img src="/icons/arrow.svg" alt="" className="lg:hidden" />
        <Link to={'/contact'} onClick={scrollToTop} className="flex items-center relative cursor-pointer">
          <div className="w-[125px] h-[125px] left-[13px] top-[43.92px] absolute bg-[#0c141d]/20 rounded-[100px] blur-[60px]" />
          <div   className="w-[152px] h-[152px] p-2.5 bg-[#0a142f] rounded-[100px] justify-center items-center gap-2.5 flex">
            <p className="text-white text-2xl font-semibold leading-9 capitalize">
              {t("contact")}
            </p>
          </div>
        </Link>
      </Container>
    </section>
  );
};

export default ContactSection;
