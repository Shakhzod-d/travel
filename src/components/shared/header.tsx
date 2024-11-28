import React from 'react';
import { Navbar } from './index'
import { openMenu } from '../../store/main-slice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '../ui';
import MenuIcon from '@mui/icons-material/Menu';
import travelIcon from '../../assets/images/experts.svg'

interface Prop{
    navBorder: string 
}

const Header = ({ navBorder }: Prop) => {

    const dispatch = useDispatch()
    const openHandler: React.MouseEventHandler<HTMLDivElement> = () => {
        dispatch(openMenu())
    }

    return (
        <div className='flex justify-between border-b-[1px] border-[#E6E6E6] bg-white'>
            <Container className='w-full'>
                <div className='flex justify-between items-center py-4 w-full'>    
                    <Link to='/'>
                        <img src={travelIcon} alt="we can travel experts" className='w-[270px] h-[44px] xm:w-[150px]'/>
                    </Link>
                    <div className='flex items-center'>
                        <div className='flex lg:hidden'>
                            <div className='flex items-center'>
                                <Navbar borderColor={navBorder}/>
                            </div>
                            {/* <SigninBtn/> */}
                        </div>
                        <div onClick={openHandler} className='hidden lg:block ml-3 cursor-pointer'>
                            <MenuIcon style={{ fontSize:32 }}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header