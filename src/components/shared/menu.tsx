import { RootState } from "../../store/store"
import Navbar from "./navbar"
import { useDispatch, useSelector } from "react-redux"
import { SigninBtn } from "../ui"
import CloseIcon from '@mui/icons-material/Close';
import { closeMenu } from "../../store/main-slice";
import 'animate.css';

const Menu = () => {
    const dispatch = useDispatch()
    const closeHandler: React.MouseEventHandler<HTMLDivElement> = () => {
        dispatch(closeMenu())
    }
    const state = useSelector((state: RootState) => state.main)
    const { menu } = state

    return (
        <div className={`w-[50%] sm:w-[80%] min-h-screen overflow-hidden bg-white fixed right-0 z-50 ${menu ? 'animate__animated animate__fadeInRight' : 'hidden animate__animated animate__fadeOutRight'}`}>
            <div onClick={closeHandler} className="w-full pt-5 pr-5 flex justify-end">
                <CloseIcon style={{ fontSize:32 }}/>
            </div>
            <div className="p-5">
                <Navbar/>
            </div>
            <div className="p-5 border-t-[1px] border-[#666666]">
                <SigninBtn/>
            </div>
        </div>
    )
}

export default Menu