
import travelIcon from '../../assets/images/experts.svg'
import { Navbar } from './index'
import { SigninBtn } from '../ui';
import MenuIcon from '@mui/icons-material/Menu';
import { openMenu } from '../../store/main-slice';
import { useDispatch } from 'react-redux';
import React from 'react';


const Header = () => {

    const dispatch = useDispatch()
    const openHandler: React.MouseEventHandler<HTMLDivElement> = () => {
        dispatch(openMenu())
    }

    return (
        <div className='padding flex justify-between items-center py-4 border-b-[1px] border-[#E6E6E6]'>
            <img src={travelIcon} alt="we can travel experts" className='w-[270px] h-[44px] xm:w-[150px] fill-blue-500'/>
            <div className='flex items-center'>
                <div className='flex lg:hidden'>
                    <Navbar/>
                    <SigninBtn/>
                </div>
                <div onClick={openHandler} className='hidden lg:block ml-3 cursor-pointer'>
                    <MenuIcon style={{ fontSize:32 }}/>
                </div>
            </div>
        </div>
    )
}

export default Header