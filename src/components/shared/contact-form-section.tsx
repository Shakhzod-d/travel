import { useState } from "react";
import { Container } from "../ui";
import { useForm } from "react-hook-form"
import { Data } from '../../types'
import { InputMask } from "primereact/inputmask";
import { Base_URL } from "../../api";
import { useNotify } from "../../hooks";
import { useTranslation } from "react-i18next"
import Swal from "sweetalert2";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const ContactFormSection = () => {
  const { t } = useTranslation()
  const [isPending, setIspending] = useState(false)
  const { toastify } = useNotify()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Data>({
    mode: "onBlur"
  })

  const onSubmit = async (data: Data) => {
    setIspending(true)
    await axios.post(`${Base_URL}/api/main/v1/contacts/`, data)
    .then(_ => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: t("successful"),
        showConfirmButton: false,
        showCloseButton: true,
      });
    })
    .catch(err => {
      toastify(err.message, 'error')
    })
    setIspending(false)
    reset()
  }

  return (
    <section className="mb-[90px] sm:mb-10">
      <Container className="flex gap-[127px] items-center flex-wrap lg:flex-col ">
        <div className="flex lg:flex-col justify-between lg:items-center w-full">
          <div className="flex-1 flex-col gap-11 inline-flex max-w-[527px] w-full xl:mr-4 lg:mr-0 lg:mb-5">
            <div className="flex-col gap-5 flex">
              <h2 className="text-[#0c141d] text-[60px] font-[600] leading-[78px] sm:text-3xl">
                {t("lets")}
              </h2>
              <p className="max-w-[497px] text-[#98a1b2] text-[18px] font-[600] leading-[27px]">
                {t("talk")}
              </p>
            </div>
            <div className="gap-8 inline-flex sm:flex-col">
              <div className="flex-col gap-6 inline-flex">
                <h2 className="text-[#0c141d] text-[18px] font-[600] leading-[27px]">
                  {t("main")}
                </h2>
                <div className="h-max flex-col gap-4 flex">
                  <div className="gap-3.5 inline-flex">
                    <img
                      src="/icons/location.svg"
                      className="justify-center items-center flex h-[24px] w-[24px]"
                    />
                    <div className="text-[#85898e] text-[18px] font-[600] leading-[27px]">
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
                    <div className="text-[#85898e] text-[18px] font-[600] leading-[27px]">
                      +44 16 8765 1098
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col gap-6 inline-flex">
                <div className="text-[#0c141d] text-lg font-semibold leading-[27px]">
                  {t("second")}
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
                <h3 className="text-[18px] font-semibold mb-2">{t("name")}</h3>
                <input 
                  className="rounded-md p-3 text-md w-full mb-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                  {...register("full_name", {
                      required: {
                        value: true,
                        message: t("namemessage")
                      }
                  })}
                  id="name" 
                  type="text" 
                  placeholder={t("yourname")}
                />
                <p className="error">{errors.full_name?.message}</p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold mb-2">{t("number")}</h3>
                <InputMask
                  className="rounded-md p-3 text-md w-full mb-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                  {...register("phone", {
                      required : {
                        value: true,
                        message : t("numbermessage")
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
                <h3 className="text-[18px] font-semibold mb-2">{t("whathelp")}</h3>
                <textarea 
                  id="dream"
                  placeholder={t("telldream")}
                  {...register("content", {
                      required : {
                        value: false,
                        message : t("dreammessage")
                      },
                    })
                  }
                  className="rounded-md p-3 text-md w-full border-[1px] border-solid border-[#D0D5DD] outline-none max-h-[150px]"
                  >
                </textarea>
                <p className="error">{errors.content?.message}</p>
              </div>
              <button type="submit" className="bg-[#635AFF] rounded-md p-3 w-full h4 mt-2">{isPending ? <CircularProgress size={24} color="inherit"/> : t("send")}</button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactFormSection;
