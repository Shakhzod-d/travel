import { useForm } from "react-hook-form"
import { ModalDataType } from "../../types"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import Rating from "./rating"
import 'animate.css';

const Modal = () => {
    const state = useSelector((state: RootState) => state.main)
    const { modal, userRate } = state
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ModalDataType>({
        mode: "onBlur"
    })

    const onSubmit = (data: ModalDataType) => {
        data.rank = userRate
        console.log(data)
        reset()
    }
    return (
        <div className={`w-full animate__animated animate__zoomIn h-screen fixed justify-center items-center z-50 pointer-events-none break-words ${modal ? 'flex' : 'animate__animated animate__zoomOut'}`}>
            <div className="flex justify-center items-center w-full h-screen pointer-events-none">
                <div className="pointer-events-auto rounded-2xl shadow-lg bg-white h-max p-5 max-w-[400px] w-full">
                    <div className="w-full flex justify-end"></div>
                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[540px] w-full">
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
                            <h3 className="text-[18px] font-semibold mb-2">Job</h3>
                            <input 
                            className="rounded-md p-3 text-md w-full mb-2 border-[1px] border-solid border-[#D0D5DD] outline-none"
                            {...register("job", {
                                required: {
                                    value: true,
                                    message: "please, enter your job"
                                }
                            })}
                            id="name" 
                            type="text" 
                            placeholder="Your job"
                            />
                            <p className="error">{errors.job?.message}</p>
                        </div>

                        <div>
                            <h3 className="text-[18px] font-semibold mb-2">Share about your thoughts</h3>
                            <textarea 
                            id="dream"
                            placeholder="Tell everybody about our service"
                            {...register("review", {
                                required : {
                                    value: true,
                                    message : "Please, fill the area above"
                                },
                                })
                            }
                            className="rounded-md p-3 text-md w-full border-[1px] border-solid border-[#D0D5DD] outline-none max-h-[150px]"
                            >
                            </textarea>
                            <p className="error">{errors.review?.message}</p>
                        </div>

                        <div className="my-2">
                            <h3 className="text-[18px] mb-1 font-semibold">Please, rate our work</h3>
                            <Rating rating={userRate}/>
                        </div>

                        <button type="submit" className="bg-[#0A142F] rounded-md p-3 w-full h4 mt-2">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal