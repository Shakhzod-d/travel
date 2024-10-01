import { Container } from "../ui";

const ContactFormSection = () => {
  return (
    <section className="mb-[90px] max-[670px]:mb-10">
      <Container className="flex gap-[127px] items-center flex-wrap max-[1045px]:flex-col">
        <div className="flex-1 flex-col gap-11 inline-flex min-w-[350px]">
          <div className="flex-col gap-5 flex">
            <h2 className="text-[#0c141d] text-6xl font-semibold  leading-[78px] max-[670px]:text-3xl">
              Let's connect and talk about your travel dreams
            </h2>
            <p className="max-w-[497px] text-[#98a1b2] text-lg font-semibold  leading-[27px]">
              Talk about and plan what your travel dreams are this year, and we
              will help you to make your dreams come true
            </p>
          </div>
          <div className="gap-8 inline-flex max-[540px]:flex-col">
            <div className="flex-col gap-6 inline-flex">
              <h2 className="text-[#0c141d] text-lg font-semibold  leading-[27px]">
                Main branch
              </h2>
              <div className="h-[124px] flex-col gap-4 flex">
                <div className="gap-3.5 inline-flex">
                  <img
                    src="/icons/location.svg"
                    className="px-[3.75px] py-[1.50px] justify-center items-center flex"
                  />
                  <div className="text-[#85898e] text-lg font-semibold  leading-[27px]">
                    24 Eastbourne Terrace Paddington, London
                    <br />
                    W2 6LA, UK{" "}
                  </div>
                </div>
                <div className="items-center gap-3 inline-flex">
                  <img
                    src="/icons/phone.svg"
                    className="pl-[3px] pr-[2.25px] pt-[2.25px] pb-[3px] justify-center items-center flex"
                  />
                  <div className="text-[#85898e] text-lg font-semibold  leading-[27px]">
                    +44 16 8765 1098
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col gap-6 inline-flex">
              <div className="text-[#0c141d] text-lg font-semibold  leading-[27px]">
                Second branch
              </div>
              <div className="h-[124px] flex-col gap-4 flex">
                <div className="gap-3.5 inline-flex">
                  <img
                    src="/icons/location.svg"
                    className="px-[3.75px] py-[1.50px] justify-center items-center flex"
                  />
                  <div className="text-[#85898e] text-lg font-semibold  leading-[27px]">
                    224 Place Earnest Granier Montpellier, France
                    <br />
                    G1 6LA, FC{" "}
                  </div>
                </div>
                <div className="items-center gap-3 inline-flex">
                  <img
                    src="/icons/phone.svg"
                    className="pl-[3px] pr-[2.25px] pt-[2.25px] pb-[3px] justify-center items-center flex"
                  />
                  <div className="text-[#85898e] text-lg font-semibold  leading-[27px]">
                    +33 12 1098 2867
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="flex flex-col max-w-[540px] flex-1 gap-6 min-w-[350px]">
          <label>
            <p className="text-[#0c141d] text-lg font-semibold  leading-[27px] mb-2">
              Name
            </p>

            <input
              type="text"
              placeholder="Your name"
              className="text-[#050505] text-lg font-semibold  leading-[27px]  px-4 py-3 rounded border border-[#cfd4dc] outline-none w-full"
            />
          </label>
          <label>
            <p className="text-[#0c141d] text-lg font-semibold  leading-[27px] mb-2">
              Email
            </p>

            <input
              type="email"
              placeholder="Your email"
              className="text-[#070707] text-lg font-semibold  leading-[27px]  px-4 py-3 rounded border border-[#cfd4dc] outline-none w-full"
            />
          </label>
          <label>
            <p className="text-[#0c141d] text-lg font-semibold  leading-[27px] mb-2">
              How can we help?
            </p>

            <textarea
              placeholder="Tell us a little about your destination dream"
              className="text-[#030303] text-lg font-semibold  leading-[27px]  px-4 py-3 rounded border border-[#cfd4dc] outline-none w-full resize-y h-[166px]"
            />
          </label>

          <button className=" px-5 py-2 bg-[#635aff] rounded-sm text-white text-lg font-semibold leading-[27px]">
            Send
          </button>
        </form>
      </Container>
    </section>
  );
};

export default ContactFormSection;
