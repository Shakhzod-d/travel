import { useForm } from "react-hook-form"
import { Data } from '../../types'
import { InputMask } from 'primereact/inputmask'
import { Container } from "../ui"


const Discount = () => {
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
        <Container className="w-full pt-8 pb-[100px] flex justify-center items-center">
            <div className="w-[80%] lg:w-full md:w-full flex items-end md:flex-col md:items-center">
                <div className="flex flex-col w-[60%] md:w-[90%] md:mb-4 sm:w-full">
                    <div className="bg-gray-700 rounded-sm p-1 w-max">
                        <h3 className="text-[18px] text-white font-[600] px-5 xm:px-1">#1 Best travel agent</h3>
                    </div>
                    <div className="my-5">
                        <h2 className="text-4xl font-semibold leading-[65.57px] lg:leading-10 text-white break-words">
                            Get a guaranteed discount <br /> - 20% for the entire tour
                        </h2>
                    </div>
                    <h4 className="h4">The discount is valid for early booking participants until May 1</h4>
                </div>
                <div className="w-[35%] md:w-[90%] sm:w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <input 
                            className="round p-3 text-md w-full mb-2"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "please, enter your name"
                                }
                            })}
                            id="name" 
                            type="text" 
                            placeholder="Name"/>
                        <p className="error">{errors.name?.message}</p>
                        <InputMask
                            className="round p-3 text-md w-full mb-2"
                            {...register("phone", {
                                required : {
                                    value: true,
                                    message : "please, enter your phone number"
                                },
                            })}
                            type="phone" 
                            id="phone"
                            mask='+999(99)999-99-99'
                            placeholder="+999(99)999-99-99"
                        />
                        <p className="error">{errors.phone?.message}</p>
                        <button type="submit" className="bg-[#F56960] round p-3 w-full h4">Book</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Discount