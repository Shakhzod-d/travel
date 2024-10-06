import ContactFormSection from "../components/shared/contact-form-section";
import FAQsSection from "../components/shared/faqs-section";
import HeaderAbout from "../components/shared/header-about";

const Contact = () => {
  return (
    <main>
      <HeaderAbout
        className={
          "bg-[url('/contact-header-bg.jpg')] pb-[100px] bg-center bg-cover bg-no-repeat mb-24 sm:mb-11"
        }
        route={"Contact us"}
        title={"Contact us"}
        desc={"Explore the various interesting content that we present"}
      />
      <ContactFormSection />
      <FAQsSection />
    </main>
  );
};

export default Contact;
