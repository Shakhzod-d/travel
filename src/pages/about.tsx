import ContactSection from "../components/shared/contact-section";
import ExperienceSection from "../components/shared/experiencse-section";
import HeaderAbout from "../components/shared/header-about";
import TeamSection from "../components/shared/team-section";
import { useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation()
  return (
    <main>
      <HeaderAbout
        className="bg-[url('/about-header-bg.jpg')] pb-[100px] relative bg-center bg-cover bg-no-repeat mb-20"
        route={t("about")}
        title={t("about")}
        desc={t("provide")}
      />
      <ExperienceSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
};

export default About;
