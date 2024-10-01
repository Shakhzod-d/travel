import ContactSection from "../components/shared/contact-section";
import ExperienceSection from "../components/shared/experiencse-section";
import HeaderAbout from "../components/shared/header-about";
import TeamSection from "../components/shared/team-section";

const About = () => {
  return (
    <main>
      <HeaderAbout
        className="bg-[url('/about-header-bg.jpg')] pb-[100px] bg-center bg-cover bg-no-repeat mb-20"
        route={"About us"}
        title={"About us"}
        desc={"Provide the best travel experience for you!"}
      />
      <ExperienceSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
};

export default About;
