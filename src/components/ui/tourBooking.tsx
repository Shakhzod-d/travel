import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { BookingTourData, PreferredTimeType } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { closeBookingModal, closeTourModal } from "../../store/main-slice";
import { Base_URL } from "../../api";
import { Container } from "./container";
import { useNotify, useFetchData } from "../../hooks";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { InputMask } from "primereact/inputmask";
import axios from "axios";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";
import "react-phone-number-input/style.css";
import Loading from "./loader";


const TourBooking = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.main);
  const { tourModal, id1, tourSlug } = state;
  const { t } = useTranslation();
  const [isPending, setIspending] = useState(false);
  const { toastify } = useNotify();
  const { fetchdata } = useFetchData(`/api/tour/v1/detail/${tourSlug}`);
  const { data, isLoading, error } = useQuery({
    queryKey: ["tour-booking"],
    queryFn: fetchdata,
  });
  const { fetchdata: fetchdata1 } = useFetchData(`/api/booking/v1/preferred-time/`);
  const { data: data1, isLoading: isLoading1, error: error1 } = useQuery({
    queryKey: ["preferred-time"],
    queryFn: fetchdata1,
  });

  const { fetchdata: fetchdata2 } = useFetchData(
    `/api/booking/v1/residence-country/`
  );
  const {
    data: data2,
    isLoading: isLoading2,
    error: error2,
  } = useQuery({
    queryKey: ["country-list"],
    queryFn: fetchdata2,
  });

  const { title, start_date, end_date, days } = data || {};
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingTourData>({
    mode: "onBlur",
  });
  const [start, setStart] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [countryErr, setCountryErr] = useState(false);
  const [selectedTime, setSelectedTime] = useState(0);

  const handleChangeStart = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStart(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(Number(event.target.value));
  };

  const handleChangeTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(Number(event.target.value));
  };

  const [phone, setPhone] = useState("");

  function addDaysToDate(dateStr: string, numDays: number) {
    // Convert the string date to a Date object
    const date = new Date(dateStr);

    // Add the specified number of days to the date
    date.setDate(date.getDate() + numDays);

    // Return the new date in 'YYYY-MM-DD' format
    const newDate = date.toISOString().split("T")[0];

    return newDate;
  }
  const onSubmit = async (data: BookingTourData) => {
    if(selectedCountry == 0){
      setCountryErr(true)
      return
    }
    if (start_date) {
      data.start_date = start_date;
    }

    if(end_date){
      data.end_date = end_date
    }

    if(!start_date && days){
      let endDate = addDaysToDate(start, days);
      data.end_date = endDate
    }

    if (!start_date && !days) {
      data.end_date = null;
    }
    if(selectedTime !== 0) data.preferred_time = selectedTime;
    setIspending(true);
    try {
      await axios
        .post(`${Base_URL}/api/booking/v1/tour/${id1}/`, data)
        .then((_) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: t("successfullyBooked"),
            showConfirmButton: false,
            showCloseButton: true,
          });
          dispatch(closeBookingModal());
        })
        .catch((err) => {
          toastify(err.message, "error");
        });
    } finally {
      setPhone("");
      setSelectedCountry(0);
      setSelectedTime(0);
    }
    setIspending(false);
    setCountryErr(false)
    reset();
  };

  const closeHandler = () => {
    dispatch(closeBookingModal());
    dispatch(closeTourModal());
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error instanceof Error) {
    return <p className="error">{error.message}</p>;
  }
  return (
    <div
      className={`w-full animate__animated animate__zoomIn fixed justify-center items-center z-50 pointer-events-none break-words ${
        tourModal ? "flex" : "animate__animated animate__zoomOut"
      }`}
    >
      <div className="flex justify-center items-center 3xl:items-start w-full h-screen overflow-y-scroll pointer-events-none">
        <div className="bg-white w-full">
          <Container className="pointer-events-auto h-max w-full py-11 2xl:py-7 sm:py-3">
            <div className="w-full flex sm:flex-col-reverse sm:items-end justify-between items-center gap-x-9 border-b-[1px] border-[#E5E5E5]">
              <div className="text-[32px] md:text-[24px] mb-3 font-[600] text-[#98A2B3] inline">
                <h3 className="inline">{title}</h3>
                <h3 className="text-black inline">/{t("request")}</h3>
              </div>
              <div
                onClick={closeHandler}
                className="h-full flex justify-center items-center"
              >
                <HighlightOffIcon
                  style={{ fontSize: 40 }}
                  className="cursor-pointer text-[#DADADA]"
                />
              </div>
            </div>
            <form
              action="booking tour"
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mt-3"
            >
              <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-y-3 gap-x-5 mb-3">
                <div>
                  <div className="inline text-[18px]">
                    <h3 className=" font-semibold mb-2 inline">{t("name")}</h3>
                    <span className="text-red-500 ml-1">*</span>
                  </div>
                  <input
                    className="rounded-md p-3 text-[#98A2B3] text-md w-full my-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                    {...register("full_name", {
                      required: {
                        value: true,
                        message: t("namemessage"),
                      },
                    })}
                    id="name"
                    type="text"
                    placeholder={t("yourname")}
                  />
                  <p className="error">{errors.full_name?.message}</p>
                </div>
                <div>
                  <div className="inline text-[18px]">
                    <h3 className=" font-semibold mb-2 inline">
                      {t("residence")}
                    </h3>
                    <span className="text-red-500 ml-1">*</span>
                  </div>
                  {isLoading2 ? (
                    <Loading className="h-max" />
                  ) : error2 instanceof Error ? (
                    <p className="error">{error2.message}</p>
                  ) : (
                    <select
                      className="rounded-md p-3 text-[18px] text-[#98A2B3] w-full my-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                      {...register("residence_country", {
                        required: {
                          value: true,
                          message: t("residencemessage"),
                        },
                      })}
                      id="residence"
                      value={Number(selectedCountry)}
                      onChange={handleChange}
                    >
                      <option value={0} disabled>
                        {t("selectcountry")}
                      </option>
                      {data2?.results?.map(
                        (item: { id: number; title: string }) => (
                          <option key={item.id} value={item.id}>
                            {item.title}
                          </option>
                        )
                      )}
                    </select>
                  )}
                  {countryErr && (
                    <p className="error">{t("residencemessage")}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-y-3 gap-x-5 mb-3">
                <div>
                  <div className="inline text-[18px]">
                    <h3 className=" font-semibold mb-2 inline">{t("email")}</h3>
                    <span className="text-red-500 ml-1">*</span>
                  </div>
                  <div className="relative">
                    <input
                      className="rounded-md p-3 pl-9 text-[#98A2B3] relative text-md w-full my-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                      {...register("email", {
                        required: {
                          value: true,
                          message: t("emailmessage"),
                        },
                      })}
                      id="email"
                      type="email"
                      placeholder={t("email")}
                    />
                    <div className="w-[19px] h-[15px] pointer-events-none absolute top-[25px] left-3 bg-[url('/email.png')] bg-cover bg-no-repeat"></div>
                  </div>
                  <p className="error">{errors.email?.message}</p>
                </div>
                <div>
                  <div className="inline text-[18px]">
                    <h3 className=" font-semibold inline">{t("callback")}</h3>
                  </div>
                  <div className="relative">
                    {isLoading1 ? (
                      <Loading className="h-max" />
                    ) : error1 instanceof Error ? (
                      <p className="error">{error1.message}</p>
                    ) : (
                      <select
                        id="callback"
                        value={selectedTime}
                        className="rounded-md text-[#98A2B3] p-3 relative text-md w-full my-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                        {...register("preferred_time", {
                          required: {
                            value: false,
                            message: "",
                          },
                        })}
                        onChange={handleChangeTime}
                        defaultValue=''
                      >
                        <option value=''></option>
                        {data1?.results?.map((item: PreferredTimeType) => (
                          <option value={item.id} key={item.id}>
                            {item.title}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-y-3 gap-x-5 mb-3">
                <div>
                  <div className="inline text-[18px]">
                    <h3 className=" font-semibold mb-2 inline">
                      {t("number")}
                    </h3>
                    <span className="text-red-500 ml-1">*</span>
                  </div>
                  <div className="relative">
                    <Controller
                      name="phone"
                      control={control}
                      defaultValue={phone}
                      rules={{
                        required: {
                          value: true,
                          message: t("numbermessage"),
                        },
                      }}
                      render={() => {
                        return (
                          <>
                            <InputMask
                              className="rounded-md p-3 text-md w-full mb-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                              {...register("phone", {
                                required: {
                                  value: true,
                                  message: t("numbermessage"),
                                },
                              })}
                              type="phone"
                              id="phone"
                              mask="+999(99)999-99-99"
                              placeholder="+000(00)000-00-00"
                            />
                          </>
                        );
                      }}
                    />
                    <p className="error">{errors.phone?.message}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="inline text-[18px]">
                      <h3 className=" font-semibold mb-2 inline">
                        {t("departure")}
                      </h3>
                      <span className="text-red-500 ml-1">*</span>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      className="rounded-md p-3 relative text-md w-full my-2 border-[1px] border-solid text-[#98A2B3] border-[#D0D5DD] outline-none"
                      {...register("start_date", {
                        required: {
                          value: !start_date && true,
                          message: t("choosedate"),
                        },
                      })}
                      id="arrival"
                      type="date"
                      value={start_date && start_date}
                      onChange={handleChangeStart}
                      disabled={start_date && end_date ? true : false}
                    />
                    <p className="error">{errors.start_date?.message}</p>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <h3 className="text-[24px] font-[600] text-[#0C141D] mb-3">
                  {t("travellers")}
                </h3>
                <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-3 gap-x-5 mb-3">
                  <div>
                    <div className="inline text-[18px]">
                      <h3 className=" font-semibold mb-2 inline">
                        {t("adults")}
                      </h3>
                      <span className="text-red-500 ml-1">*</span>
                    </div>
                    <input
                      className="rounded-md p-3 text-[#98A2B3] text-md w-full my-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                      {...register("adults", {
                        required: {
                          value: true,
                          message: t("enternumber"),
                        },
                      })}
                      id="adults"
                      type="number"
                      placeholder={t("enternumber")}
                    />
                    <p className="error">{errors.adults?.message}</p>
                  </div>
                  <div>
                    <div className="inline text-[18px]">
                      <h3 className=" font-semibold mb-2 inline">
                        {t("youth")}
                      </h3>
                    </div>
                    <input
                      className="rounded-md text-[#98A2B3] p-3 text-md w-full my-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                      {...register("youth", {
                        required: {
                          value: false,
                          message: "",
                        },
                      })}
                      id="youth"
                      type="number"
                      defaultValue={0}
                      placeholder={t("enternumber")}
                    />
                  </div>
                  <div>
                    <div className="inline text-[18px]">
                      <h3 className=" font-semibold mb-2 inline">
                        {t("children")}
                      </h3>
                    </div>
                    <input
                      className="rounded-md text-[#98A2B3] p-3 text-md w-full my-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                      {...register("children", {
                        required: {
                          value: false,
                          message: "",
                        },
                      })}
                      id="children"
                      type="number"
                      defaultValue={0}
                      placeholder={t("enternumber")}
                    />
                  </div>
                  <div>
                    <div className="inline text-[18px]">
                      <h3 className=" font-semibold mb-2 inline">
                        {t("infants")}
                      </h3>
                    </div>
                    <input
                      className="rounded-md p-3 text-[#98A2B3] text-md w-full my-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                      {...register("infants", {
                        required: {
                          value: false,
                          message: "",
                        },
                      })}
                      id="infants"
                      type="number"
                      defaultValue={0}
                      placeholder={t("enternumber")}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="text-[24px] font-[600] text-[#0C141D] mb-3">
                  {t("moredetail")}
                </h3>
                <textarea
                  id="message"
                  placeholder={t("little")}
                  className="w-full min-h-[150px] text-[#98A2B3] text-[18px] border-[1px] border-solid border-[#D0D5DD] outline-none rounded-md p-3 text-md"
                  {...register("content", {
                    required: {
                      value: false,
                      message: "",
                    },
                  })}
                ></textarea>
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="max-w-[628px] w-full brak-words bg-[#635AFF] py-3 text-white text-[18px] font-[600]"
                >
                  {isPending ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    t("tourbtn")
                  )}
                </button>
              </div>
            </form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TourBooking;
