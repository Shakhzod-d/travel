import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { InputMask } from 'primereact/inputmask'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Register = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
        // reset
    } = useForm({
        mode: "onBlur",
    });

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const onSubmit = ( data: any ) => {
        console.log(data)
    }
    
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='relative w-1/3 xl:w-[60%] min-h-screen md:w-[70%] sm:w-[90%] text-center pt-[40px] pb-[80px] px-11 md:px-3'>
                {/* {failed ? <WrongInput msg={t("exist")}/> : null } */}
                <div className='w-full'>
                    <h2 className='text-3xl w-full  tracking-widest capitalize'>Register</h2>
                    <h3 className='text-xl w-full md:w-full text-center my-4'>Please,fill the form below</h3>
                    <form className='w-full flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            type="text" 
                            id="first_name"
                            {...register("first_name", {
                                required : true,
                                validate: {
                                    format: value => /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value) || "wrong format"
                                }
                            })}
                            placeholder="enter your firstname" 
                            className='p-3 w-full border-[1px] border-gray-300 focus:border-gray-500'
                        />
                        <p className='text-sm w-full text-start text-red-700'>
                            {typeof errors.first_name?.message === 'string' ? errors.first_name.message : ''}
                        </p>

                        <input 
                            type="text" 
                            id="last_name"
                            {...register("last_name", {
                                required : true,
                                validate: {
                                    format: value => /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value) || "wrong format"
                                }
                            })}
                            placeholder="enter your lastname" 
                            className='p-3 w-full border-[1px] border-gray-300 focus:border-gray-500 my-4'
                        />
                        <p className='text-sm w-full text-start text-red-700'>
                            {typeof errors.last_name?.message === 'string' ? errors.last_name.message : ''}
                        </p>

                        <input 
                            type="email" 
                            id="email"
                            {...register("email", {
                                required : true,
                                validate: {
                                    format: value => /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value) || "wrong format"
                                }
                            })}
                            placeholder="enter your email"
                            className='p-3 w-full border-[1px] border-gray-300 focus:border-gray-500'
                        />
                        <p className='text-sm w-full text-start text-red-700'>
                            {typeof errors.email?.message === 'string' ? errors.email.message : ''}
                        </p>

                        <InputMask
                            type="phone" 
                            id="number"
                            mask='+999(99)999 99 99'
                            {...register("phone_number", {
                                required : {
                                    value : true,
                                    message : "required"
                                },
                            })}
                            placeholder="phone" 
                            className='p-3 sm:pl-1 w-full border-[1px] border-gray-300 focus:border-gray-500 my-4'
                        />
                        <p className='text-sm w-full text-start text-red-700'>
                            {typeof errors.number?.message === 'string' ? errors.number.message : ''}
                        </p>

                        <div className='relative'>
                            <input 
                            type={isPasswordVisible ? 'text' : 'password'}
                                id="password"
                                {...register("password", {
                                    required : true,
                                    validate: {
                                        format: value => /^[A-Za-z0-9]{4,20}$/.test(value) || "wrong format"
                                    }
                                })}
                                placeholder="password"
                                className='p-3 w-full sm:pl-1 border-[1px] border-gray-300 focus:border-gray-500'
                            />
                            {isPasswordVisible 
                                    ? 
                                        <VisibilityIcon onClick={togglePasswordVisibility} className='absolute right-2 top-3 text-sm cursor-pointer'/> 
                                    : 
                                        <VisibilityOffIcon onClick={togglePasswordVisibility} className='absolute right-2 top-3 text-sm cursor-pointer'/>
                                }
                        </div>
                        <p className='text-sm w-full text-start mb-4 mt-1 text-red-700'>
                            {typeof errors.password?.message === 'string' ? errors.password.message : ''}
                        </p>

                        <button className='px-5 py-2 w-full bg-[#09132e] text-white font-semibold cursor-pointer'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register