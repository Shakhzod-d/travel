import { Container } from "../ui";

const ContactSection = () => {
  return (
    <section className="bg-[#f5f9fa] pt-20 pb-24">
      <Container className="flex gap-10 lg:flex-col items-end sm:flex-col">
        <div className="flex-col justify-start gap-4 flex">
          <div className="px-5 py-2.5 bg-[#eaecf9] rounded justify-start items-center gap-2.5 inline-flex mb-4 max-w-[183px] w-[max-content]">
            <p className="text-[#635aff] text-xl font-semibold uppercase leading-normal tracking-widest sm:text-sm">
              CONTACT US
            </p>
          </div>
          <div className="flex-col justify-center gap-5 flex">
            <div className="self-stretch text-[#0c141d] text-6xl font-semibold leading-[78px] mb-5 sm:text-3xl">
              We are always ready to help and answer your questions
            </div>
            <div className="self-stretch text-[#667084] text-lg font-semibold leading-[27px]">
              Don't hesitate to contact us, we will be happy to help you.
            </div>
          </div>
        </div>
        <img src="/icons/arrow.svg" alt="" className="lg:hidden" />
        <div className="flex items-center relative ">
          <div className="w-[125px] h-[125px] left-[13px] top-[43.92px] absolute bg-[#0c141d]/20 rounded-[100px] blur-[60px]" />

          <div className="w-[152px] h-[152px] p-2.5  bg-[#0a142f] rounded-[100px] justify-center items-center gap-2.5 flex">
            <p className="text-white text-2xl font-semibold leading-9">
              Contact Us
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
