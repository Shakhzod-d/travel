import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { closeMenu } from '../../store/main-slice';
import { useDispatch } from 'react-redux';

const Overlay = () => {

    const state = useSelector((state: RootState) => state.main)
    const { menu } = state
    const dispatch = useDispatch()
    const closeHandler: React.MouseEventHandler<HTMLDivElement> = () => {
        dispatch(closeMenu())
    }

    return (
        <div onClick={closeHandler} className={`w-full fixed z-40 h-screen bg-black opacity-50 overflow-hidden ${menu ? 'flex' : 'hidden'}`}></div>
    )
}

export default Overlay