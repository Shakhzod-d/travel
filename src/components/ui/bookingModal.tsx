import { useForm } from "react-hook-form"
import { Data } from '../../types'
import { InputMask } from "primereact/inputmask";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { closeBookingModal } from "../../store/main-slice";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Swal from 'sweetalert2'

const   ContactFormSection = () => {
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.main)
    const { bookingModal } = state
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
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent successfully",
            showConfirmButton: false,
            showCloseButton: true,
        });
        dispatch(closeBookingModal())
    }

    return (
        <div className={`w-full animate__animated animate__zoomIn h-screen fixed justify-center items-center z-50 pointer-events-none break-words ${bookingModal ? 'flex' : 'animate__animated animate__zoomOut'}`}>
            <div className="flex justify-center items-center w-full h-screen pointer-events-none">
                <div className="pointer-events-auto rounded-2xl shadow-lg bg-white h-max p-5 max-w-[400px] w-full">
                    <div className="w-full flex justify-end">
                        <div onClick={() => dispatch(closeBookingModal())}>
                            <HighlightOffIcon style={{ fontSize: 30 }} className="cursor-pointer"/>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-2 max-w-[540px] xl:max-w-[450px] lg:max-w-[540px] w-full bg-white">
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
                        <button type="submit" className="bg-[#635AFF] cursor-pointer rounded-md p-3 w-full h4 mt-2">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;
