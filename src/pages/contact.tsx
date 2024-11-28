import ContactFormSection from "../components/shared/contact-form-section";
import FAQsSection from "../components/shared/faqs-section";
import HeaderAbout from "../components/shared/header-about";
import { useTranslation } from "react-i18next"

const Contact = () => {
  const { t } = useTranslation()
  return (
    <main>
      <HeaderAbout
        className={
          "bg-[url('/contact-header-bg.jpg')] pb-[100px] bg-center bg-cover bg-no-repeat mb-24 sm:mb-11"
        }
        route={t("contact")}
        title={t("contact")}
        desc={t("explore")}
      />
      <ContactFormSection/>
      <FAQsSection />
    </main>
  );
};

export default Contact;
