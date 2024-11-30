import { useState } from "react"
import { useForm } from "react-hook-form"
import { Data } from '../../types'
import { InputMask } from 'primereact/inputmask'
import { Container } from "../ui"
import { Base_URL } from "../../api"
import { useNotify } from "../../hooks"
import { useTranslation } from "react-i18next"
import CircularProgress from '@mui/material/CircularProgress';
import Swal from "sweetalert2"
import axios from 'axios'


const Discount = () => {
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
        .catch(err => toastify(err.message, 'error'))
        reset()
        setIspending(false)
        
    }

    return (
        <Container className="w-full pt-8 pb-[100px] flex justify-center items-center">
            <div className="w-[80%] lg:w-full md:w-full flex justify-between items-end md:flex-col md:items-center">
                <div className="flex flex-col w-[50%] md:w-[90%] md:mb-4 sm:w-full">
                    <div className="bg-gray-700 rounded-sm p-1 w-max">
                        <h3 className="text-[18px] text-white font-[600] px-5 xm:px-1">{`#1 ${t("travelagent")}`}</h3>
                    </div>
                    <div className="my-3">
                        <h2 className="text-4xl font-semibold leading-[65.57px] lg:leading-10 text-white break-words">
                            {`${t("discount")} - 20%`}
                        </h2>
                    </div>
                    <h4 className="h4">{t("valid")}</h4>
                </div>
                <div className="w-[35%] md:w-[90%] sm:w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <input 
                            className="round p-3 text-[14px] text-black placeholder:text-[14px] placeholder:text-black w-full mb-2"
                            {...register("full_name", {
                                required: {
                                    value: true,
                                    message: t("namemessage")
                                }
                            })}
                            id="name" 
                            type="text" 
                            placeholder={t("name")}
                        />
                        <p className="error">{errors.full_name?.message}</p>
                        <InputMask
                            className="round p-3 text-md w-full mb-2 placeholder:text-[14px] placeholder:text-black"
                            {...register("phone", {
                                required : {
                                    value: true,
                                    message : t("numbermessage")
                                },
                            })}
                            type="phone" 
                            id="phone"
                            mask='+999(99)999-99-99'
                            placeholder="+999(99)999-99-99"
                        />
                        <p className="error">{errors.phone?.message}</p>
                        <button type="submit" className="bg-[#F56960] round p-3 w-full text-[14px] font-[500] text-white">{isPending ? <CircularProgress color="inherit"/> : t("book2")}</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Discount