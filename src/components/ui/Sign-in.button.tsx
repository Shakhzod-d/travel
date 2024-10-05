import { Link } from "react-router-dom"
import { closeMenu } from '../../store/main-slice';
import { useDispatch } from 'react-redux';

const SigninBtn = () => {
    const dispatch = useDispatch()
    const closeHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(closeMenu())
    }

    return (
        <Link to={'/sign-in'}>
            <button  onClick={closeHandler} type='button' className='bg-[#F56960] round px-4 py-2 text-white font-semibold text-[16px]'>Sign in</button>
        </Link>
    )
}

export default SigninBtn