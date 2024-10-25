import whiteIcon from '../../assets/images/icons/white-icon.png'
import Navbar from "./navbar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { SocialMedias } from '../../types';
import { socialMedias } from '../../utils';
import { Link } from 'react-router-dom';
import { openMenu } from '../../store/main-slice';
import { useDispatch } from 'react-redux';
import { Container, SigninBtn } from "../ui";

const HeaderMain = () => {
    let dispatch = useDispatch()

    const openHandler: React.MouseEventHandler<HTMLDivElement> = () => {
        dispatch(openMenu())
    }

    return (
        <div className="flex flex-col items-center w-full justify-between pb-9 sm:pb-5 bg-cover bg-center bg-no-repeat">
            <div className="w-full flex justify-center border-b-[1px] border-[#E6E6E6]">
                <Container className="box w-full flex justify-between items-center py-4">
                <img src={whiteIcon} alt="we can travel experts" className='w-[270px] h-[44px] xm:w-[180px]'/>
                    <div className="flex *:text-white lg:hidden">
                        <Navbar borderColor='white'/>
                        <SigninBtn/>
                    </div>
                    <div onClick={openHandler} className='hidden lg:block ml-3 cursor-pointer'>
                        <MenuIcon style={{ fontSize:32, color:'white' }}/>
                    </div>
                </Container>
            </div>    
            <div className="w-full padding mt-[200px] lg:mt-[80px] sm:mt-[30px]">
                <div className='w-full flex flex-col items-center'>
                    <h2 className='font-bold text-[64px] md:text-4xl sm:text-3xl sm:font-semibold text-white text-center w-full mb-3'>
                        CAN <br /> 
                        FOLLOW YOUR <br />  
                        CENTRAL ASIAN NAVIGATOR
                    </h2>
                    <button className='text-white  bg-white bg-opacity-15 text-[20px] md:text-[12px] round px-11 md:px-7 sm:px-4 sm:py-1 py-2 border-[2px] border-white'>FIND YOUR TOUR</button>
                </div>
                <div className='w-full flex items-end '>
                    <div className='flex w-full h-[80px] sm:h-[130px] sm:flex-col sm:justify-center  justify-between items-center relative'>
                        <div className='absolute left-1/2 -translate-x-1/2 p-3 md:p-1 sm:top-9 flex justify-center items-center rounded-full bg-white bg-opacity-25 border-[1px] border-white'>
                            <ExpandMoreIcon className='text-white text-3xl'/>
                        </div>
                        <ul className='flex mr-0 sm:mt-3 absolute right-0 sm:-translate-x-1/2 sm:left-1/2 w-max sm:bottom-0'>
                            {
                                socialMedias.map((item: SocialMedias) => (
                                    <li key={item.id} className={`p-1 border-[1px] border-white rounded-full ${item.name == 'facebook' ? '' : 'mr-2'}`}>
                                        <Link to={item.path} target='_blank' className='text-white'>{item.icon}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default HeaderMain