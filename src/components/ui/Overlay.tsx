import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { closeMenu, closeModal } from '../../store/main-slice';
import { useDispatch } from 'react-redux';

const Overlay = () => {

    const state = useSelector((state: RootState) => state.main)
    const { menu, modal, bookingModal, picturesModal, picturesGallery } = state
    const dispatch = useDispatch()
    const closeHandler: React.MouseEventHandler<HTMLDivElement> = () => {
        dispatch(closeMenu())
        dispatch(closeModal())
    }

    return (
        <div 
            onClick={closeHandler} 
            className={`w-full fixed z-40 h-screen bg-black opacity-50 overflow-hidden ${menu || modal || bookingModal || picturesModal || picturesGallery ? 'flex' : 'hidden'}`}>
        </div>
    )
}

export default Overlay