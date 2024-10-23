import { useForm } from 'react-hook-form'
import ReactCardFlip from 'react-card-flip'
import { InputMask } from 'primereact/inputmask'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [recover, setRecover] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
        // setFocus,
        // setError,
        // reset
    } = useForm({
        mode: "onBlur",
    });
    const {
        register: register2,
        // formState: { errors: errors2 },
        handleSubmit: handleSubmit2,
        // reset: reset2
    } = useForm({
        mode: "onBlur",
    });

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const showrecover = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setRecover(true)
    }

    const onSubmit = ( data: any ) => {
        console.log(data)
    }

    const onSubmit2 = ( data: any ) => {
        console.log(data)
    }

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='relative w-1/3 xl:w-[60%] min-h-screen md:w-[70%] sm:w-full text-center flex items-center justify-center md:px-3'>
                {/* {loginfail ? <WrongInput msg={t("wrong")}/> : null } */}
                <ReactCardFlip flipDirection='vertical' isFlipped={recover}>
                    <div className='w-full'>
                        <h2 className='text-3xl w-full tracking-widest capitalize'>Login</h2>
                        <h3 className='text-xl w-full md:w-full text-center my-4'>Please enter your e-mail and password:</h3>
                        {/* onChange={() => dispatch(removeLoginFail())} */}
                        <form className='w-full flex flex-col items-center'  onSubmit={handleSubmit(onSubmit)}>
                            <input 
                                type="email" 
                                id="email1"
                                {...register("email", {
                                    required : true,
                                    validate: {
                                        format: value => /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value) || "wrong format"
                                    }
                                })}
                                placeholder="Your email" 
                                className='p-3 border-[1px] border-gray-300 focus:border-gray-500 rounded-sm outline-none form-input'
                            />
                            <p className='text-sm w-full text-start text-red-700'>
                                {typeof errors.email?.message === 'string' ? errors.email.message : ''}
                            </p>

                            <InputMask
                                type="phone" 
                                id="number1"
                                mask='+999(99)999 99 99'
                                {...register("phone_number", {
                                    required : {
                                        value : true,
                                        message : "required"
                                    },
                                })}
                                placeholder="your phone number"
                                className='p-3 border-[1px] border-gray-300 focus:border-gray-500 mt-4 rounded-sm outline-none form-input'
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
                                    placeholder="Enter your password" 
                                    className='p-3 mt-4  border-[1px] border-gray-300 focus:border-gray-500 rounded-sm outline-none form-input'
                                />
                                {isPasswordVisible 
                                    ? 
                                        <VisibilityIcon onClick={togglePasswordVisibility} className='absolute right-2 top-7 text-sm cursor-pointer'/> 
                                    : 
                                        <VisibilityOffIcon onClick={togglePasswordVisibility} className='absolute right-2 top-7 text-sm cursor-pointer'/>
                                }
                            </div>
                            <p className='text-sm w-full text-start mb-1 mt-1 text-red-700'>
                                {typeof errors.password?.message === 'string' ? errors.password.message : ''}
                            </p>
                        
                            <div className='w-full flex justify-start items-center'>
                                <button onClick={showrecover} className='py-2 mb-3 cursor-pointer text-start font-semibold'>Forgot your password</button>
                            </div>
                            
                            <button className='px-5 py-2 w-full bg-[#09132e] text-white font-semibold cursor-pointer'>Login</button>
                        </form>
                        <div className='w-full flex justify-center mt-4 items-center'>
                            <h3 className='mr-2 text-md text-gray-400'>Don't you have account?</h3>
                            <Link to='/register'>
                                <button className="p-2 font-semibold">Create one</button>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h2 className='text-3xl w-full tracking-widest capitalize'>Recover your email</h2>
                        <h3 className='text-xl w-full md:w-full text-center my-4'>Your email</h3>
                        {/* {instruction && <h3 className='text-md w-full md:w-full text-center text-green-700 my-4 p-1 bg-gray-300'>{t("instruction")}</h3>} */}
                        <form className='w-full flex flex-col' onSubmit={handleSubmit2(onSubmit2)}>
                            <input 
                                type="email" 
                                id="email11"
                                {...register2("email", {
                                    required: true,
                                    validate: {
                                        format: value => /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value) || "wrong format"
                                    }
                                })}
                                placeholder="your email"
                                className='p-3  border-[1px] border-gray-300 focus:border-gray-500 outline-none rounded-sm form-input'
                            />
                            <p className='text-sm w-full text-start text-red-700'>
                                {typeof errors.recoveringemail?.message === 'string' ? errors.recoveringemail.message : ''}
                            </p>

                            <button className='px-5 py-2 w-full bg-[#09132e] text-white font-semibold cursor-pointer mt-3'>Recover</button>
                        </form>
                        <div className='w-full flex justify-center mt-4'>
                            <button onClick={() => setRecover(false)} className='bg-transparent capitalize border-none cursor-pointer w-max text-gray-400 hover:text-gray-500'>Back</button>
                        </div>
                    </div> 
                </ReactCardFlip>
            </div>
        </div>
    )
}

export default Login