import { Container } from "../ui";
import { useForm } from "react-hook-form"
import { Data } from '../../types'
import { InputMask } from "primereact/inputmask";

const ContactFormSection = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Data>({
    mode: "onBlur"
  })

  const onSubmit = (data: Data) => {
    console.log(data)
    reset()
  }

  return (
    <section className="mb-[90px] sm:mb-10">
      <Container className="flex gap-[127px] items-center flex-wrap lg:flex-col ">
        <div className="flex lg:flex-col justify-between lg:items-center w-full">
          <div className="flex-1 flex-col gap-11 inline-flex max-w-[527px] w-full xl:mr-4 lg:mr-0 lg:mb-5">
            <div className="flex-col gap-5 flex">
              <h2 className="text-[#0c141d] text-6xl font-semibold leading-[78px] sm:text-3xl">
                Let's connect and talk about your travel dreams
              </h2>
              <p className="max-w-[497px] text-[#98a1b2] text-lg font-semibold  leading-[27px]">
                Talk about and plan what your travel dreams are this year, and we
                will help you to make your dreams come true
              </p>
            </div>
            <div className="gap-8 inline-flex sm:flex-col">
              <div className="flex-col gap-6 inline-flex">
                <h2 className="text-[#0c141d] text-lg font-semibold  leading-[27px]">
                  Main branch
                </h2>
                <div className="h-max flex-col gap-4 flex">
                  <div className="gap-3.5 inline-flex">
                    <img
                      src="/icons/location.svg"
                      className="justify-center items-center flex h-[24px] w-[24px]"
                    />
                    <div className="text-[#85898e] text-lg font-semibold leading-[27px]">
                      24 Eastbourne Terrace Paddington, London
                      <br />
                      W2 6LA, UK{" "}
                    </div>
                  </div>
                  <div className="items-center gap-3 inline-flex">
                    <img
                      src="/icons/phone.svg"
                      className="h-[24px] w-[24px] justify-center items-center flex"
                    />
                    <div className="text-[#85898e] text-lg font-semibold  leading-[27px]">
                      +44 16 8765 1098
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col gap-6 inline-flex">
                <div className="text-[#0c141d] text-lg font-semibold leading-[27px]">
                  Second branch
                </div>
                <div className="flex-col gap-4 flex">
                  <div className="gap-3.5 inline-flex">
                    <img
                      src="/icons/location.svg"
                      className="h-[24px] w-[24px] justify-center items-center flex"
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
                      className="h-[24px] w-[24px]justify-center items-center flex"
                    />
                    <div className="text-[#85898e] text-lg font-semibold  leading-[27px]">
                      +33 12 1098 2867
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-[540px] xl:max-w-[450px] lg:max-w-[540px] w-full">
              <div>
                <h3 className="text-[18px] font-semibold mb-2">Name</h3>
                <input 
                  className="rounded-md p-3 text-md w-full mb-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                  {...register("name", {
                      required: {
                          value: true,
                          message: "please, enter your name"
                      }
                  })}
                  id="name" 
                  type="text" 
                  placeholder="Your name"
                />
                <p className="error">{errors.name?.message}</p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold mb-2">Phone number</h3>
                <InputMask
                  className="rounded-md p-3 text-md w-full mb-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                  {...register("phone", {
                      required : {
                        value: true,
                        message : "please, enter phone number"
                      },
                  })}
                  type="phone" 
                  id="phone"
                  mask='+999(99)999-99-99'
                  placeholder="+000(00)000-00-00"
                />
                <p className="error">{errors.phone?.message}</p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold mb-2">How can we help?</h3>
                <textarea 
                  id="dream"
                  placeholder="Tell us about your destination dream"
                  {...register("dream", {
                      required : {
                        value: true,
                        message : "Please, fill the area above"
                      },
                    })
                  }
                  className="rounded-md p-3 text-md w-full border-[1px] border-solid border-[#D0D5DD] outline-none max-h-[150px]"
                  >
                </textarea>
                <p className="error">{errors.dream?.message}</p>
              </div>
              <button type="submit" className="bg-[#635AFF] rounded-md p-3 w-full h4 mt-2">Send</button>
          </form>
        </div>
        {/* <form className="flex flex-col max-w-[540px] flex-1 gap-6 min-w-[320px]">
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
        </form> */}
      </Container>
    </section>
  );
};

export default ContactFormSection;
