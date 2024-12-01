import { useState } from "react";
import { useForm } from "react-hook-form"
import { Data, BookingTourData } from '../../types'
import { InputMask } from "primereact/inputmask";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { closeBookingModal, closeTourModal } from "../../store/main-slice";
import { Base_URL } from "../../api";
import { useNotify } from '../../hooks'
import { useTranslation } from "react-i18next"
import axios from "axios";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Swal from 'sweetalert2'
import CircularProgress from '@mui/material/CircularProgress';

const   ContactFormSection = () => {
    const { t } = useTranslation()
    const [isPending, setIspending] = useState(false)
    const { toastify } = useNotify()
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.main)
    const { bookingModal, serviceId, tourModal, id1, start, end, persons } = state
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
        await axios.post(`${Base_URL}/api/booking/v1/service/${serviceId}/`, data)
        .then(_ => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: t("successful"),
                showConfirmButton: false,
                showCloseButton: true,
            });
            dispatch(closeBookingModal())
        })
        .catch(err => {
            toastify(err.message, 'error')
        })
        reset()
        setIspending(false)
    }

    const onSubmit2 = async (data: Data) => {
        const bookingTourData: BookingTourData = {
            ...data,
            start_date: start,
            end_date: end,
            persons: persons,
            id: id1
        }
        setIspending(true)
        await axios.post(`${Base_URL}/api/booking/v1/tour/${id1}/`, data)
        .then(_ => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: t("successful"),
                showConfirmButton: false,
                showCloseButton: true,
            });
            dispatch(closeBookingModal())
        })
        .catch(err => {
            toastify(err.message, 'error')
        })
        console.log(bookingTourData)
        reset()
        setIspending(false)
    }

    const closeHandler = () => {
        dispatch(closeBookingModal())
        dispatch(closeTourModal())
    }

    return (
        <div className={`w-full animate__animated animate__zoomIn h-screen fixed justify-center items-center z-50 pointer-events-none break-words ${bookingModal ? 'flex' : 'animate__animated animate__zoomOut'}`}>
            <div className="flex justify-center items-center w-full h-screen pointer-events-none">
                <div className="pointer-events-auto rounded-2xl shadow-lg bg-white h-max p-5 max-w-[400px] w-full">
                    <div className="w-full flex justify-end">
                        <div onClick={closeHandler}>
                            <HighlightOffIcon style={{ fontSize: 30 }} className="cursor-pointer"/>
                        </div>
                    </div>
                    <form onSubmit={tourModal ? handleSubmit((data) => onSubmit2(data as BookingTourData)) : handleSubmit(onSubmit)} className="p-2 max-w-[540px] xl:max-w-[450px] lg:max-w-[540px] w-full bg-white">
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
                            <h3 className="text-[18px] font-semibold mb-2">{tourModal ? t("comment") : t("whathelp")}</h3>
                            <textarea 
                            id="content"
                            placeholder={tourModal ? t("comment") : t("telldream")}
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
                        <button type="submit" className="bg-[#635AFF] cursor-pointer rounded-md p-3 w-full h4 mt-2">{isPending ? <CircularProgress size={24} color="inherit"/> : t("send")}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;
