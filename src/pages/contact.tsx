import ContactFormSection from "../components/shared/contact-form-section";
import FAQsSection from "../components/shared/faqs-section";
import HeaderAbout from "../components/shared/header-about";
import { useTranslation } from "react-i18next"
import { Tabtitle } from "../hooks";

const Contact = () => {
  const { t } = useTranslation()
  Tabtitle(t("contact"))
  return (
    <main>
      <HeaderAbout
        className={
          "bg-[url('/contact-header-bg.jpg')] pb-[100px] relative bg-center bg-cover bg-no-repeat mb-24 sm:mb-11"
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
