import { RootState } from "../../store/store"
import Navbar from "./navbar"
import { useDispatch, useSelector } from "react-redux"
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
        <div className={`lg:w-1/2 sm:w-[80%] min-h-screen overflow-hidden transition-all ease-in-out duration-500 bg-gray-50 fixed right-0 ${menu ? 'in z-50' : 'out bg-gray-50'}`}>
            <div onClick={closeHandler} className="w-full pt-5 pr-5 flex justify-end">
                <CloseIcon style={{ fontSize:32 }}/>
            </div>
            <div className="p-5">
                <Navbar borderColor='black'/>
            </div>
            <div className="p-5 border-t-[1px] border-[#666666]">
            </div>
        </div>
    )
}

export default Menu