import { useState } from "react"
import { useForm } from "react-hook-form"
import { ModalDataType } from "../../types"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store/store"
import { closeModal } from "../../store/main-slice"
import { useTranslation } from "react-i18next"
import { useNotify } from "../../hooks"
import Swal from "sweetalert2";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Rating from "./rating"
import 'animate.css';
import { Base_URL } from "../../api"

const Modal = () => {
    const { t } = useTranslation()
    const [isPending, setIspending] = useState(false)
    const { toastify } = useNotify()
    const state = useSelector((state: RootState) => state.main)
    const dispatch = useDispatch()
    const closeHandler = () => {
        dispatch(closeModal())
    }
    const { modal, userRate } = state
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ModalDataType>({
        mode: "onBlur"
    })

    const onSubmit = async (data: ModalDataType) => {
        data.rank = userRate
        setIspending(true)
        await axios.post(`${Base_URL}/api/tour/v1/review/create/`, data)
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
        <div className={`w-full animate__animated animate__zoomIn h-screen fixed justify-center items-center z-50 pointer-events-none break-words ${modal ? 'flex' : 'animate__animated animate__zoomOut'}`}>
            <div className="flex justify-center items-center w-full h-screen pointer-events-none">
                <div className="pointer-events-auto rounded-2xl shadow-lg bg-white h-max p-5 max-w-[400px] w-full">
                    <div className="w-full flex justify-end">
                        <div onClick={closeHandler}>
                            <HighlightOffIcon style={{ fontSize: 30 }} className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="w-full flex justify-end"></div>
                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[540px] w-full">
                        <div>
                            <h3 className="text-[18px] font-semibold mb-2 capitalize">{t("name")}</h3>
                            <input 
                            className="rounded-md p-3 text-md w-full mb-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                            {...register("full_name", {
                                required: {
                                    value: true,
                                    message: t("namemessage")
                                }
                            })}
                            id="full_name" 
                            type="text" 
                            placeholder={t("yourname")}
                            />
                            <p className="error">{errors.full_name?.message}</p>
                        </div>

                        <div>
                            <h3 className="text-[18px] font-semibold mb-2">{t("position")}</h3>
                            <input 
                            className="rounded-md p-3 text-md w-full mb-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                                {...register("position", {
                                    required: {
                                        value: true,
                                        message: t("positionmessage")
                                    }
                                })}
                            id="position" 
                            type="text" 
                            placeholder={t("yourposition")}
                            />
                            <p className="error">{errors.position?.message}</p>
                        </div>

                        <div>
                            <h3 className="text-[18px] font-semibold mb-2">{t("image")}</h3>
                            <input 
                            className="rounded-md p-3 text-md w-full mb-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                                {...register("image", {
                                    required: {
                                        value: false,
                                        message: "please, enter your image"
                                    }
                                })}
                            id="image" 
                            type="file"
                            />
                            {/* { errors.image && <p className="error">{errors.image.message}</p>} */}
                        </div>

                        <div>
                            <h3 className="text-[18px] font-semibold mb-2">{t("thoughts")}</h3>
                            <textarea 
                            id="content"
                            placeholder={t("tellevery")}
                            {...register("content", {
                                required : {
                                    value: false,
                                    message : "Please, fill the area above"
                                },
                                })
                            }
                            className="rounded-md p-3 text-md w-full border-[1px] border-solid border-[#D0D5DD] outline-none max-h-[150px]"
                            >
                            </textarea>
                            <p className="error">{errors.content?.message}</p>
                        </div>

                        <div className="my-2">
                            <h3 className="text-[18px] mb-1 font-semibold">{t("rate")}</h3>
                            <Rating rating={userRate}/>
                        </div>

                        <button type="submit" className="bg-[#0A142F] rounded-md p-3 w-full h4 mt-2">{isPending ? <CircularProgress size={24} color="inherit"/> : t("send")}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal