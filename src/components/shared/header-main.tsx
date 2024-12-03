import whiteIcon from '../../assets/images/icons/white-icon.png'
import Navbar from "./navbar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { SocialMedias } from '../../types';
import { socialMedias } from '../../utils';
import { Link } from 'react-router-dom';
import { openMenu } from '../../store/main-slice';
import { useDispatch } from 'react-redux';
import { Container, LocaleSelector } from "../ui";
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const HeaderMain = () => {
    let dispatch = useDispatch()
    const { t } = useTranslation()
    const openHandler: React.MouseEventHandler<HTMLDivElement> = () => {
        dispatch(openMenu())
    }

    return (
        <div className="overlay h-screen flex flex-col absolute top-0 left-0 items-center justify-between w-full bg-cover bg-center bg-no-repeat">
            <div className="w-full flex justify-center border-b-[1px] border-[#E6E6E6]">
                <Container className="box w-full flex justify-between items-center py-4">
                    <Link to={'/'}>
                        <img src={whiteIcon} alt="we can travel experts" className='w-[270px] h-[44px] xm:w-[180px]'/>
                    </Link>
                    <div className="flex lg:hidden">
                        <Navbar className='border-white'/>
                        <LocaleSelector/>
                    </div>
                    <div className='hidden lg:flex ml-3 cursor-pointer'>
                        <div className='mr-2 flex items-center'>
                            <LocaleSelector/>
                        </div>
                        <div onClick={openHandler}>
                            <MenuIcon style={{ fontSize:32, color:'white' }}/>
                        </div>
                    </div>
                </Container>
            </div>    
            <div className="max-w-[1256px] relative w-full flex flex-col justify-between px-5 pt-2 pb-9 2xl:pb-3 h-full">
                <div className='w-full flex flex-col  items-center justify-center pt-[100px] 2xl:pt-[50px] xl:pt-[20px]'>
                    <h2 className='font-[400px] headline max-w-[720px] lg:max-w-[600px] md:max-w-[400px] leading-[79px] 2xl:leading-[60px] uppercase text-[64px] 2xl:text-[42px] xl:[36px] lg:text-4xl sm:text-3xl sm:font-semibold text-white text-center w-full mb-8 xl:mb-3 break-words'>
                        {t("navigator")}
                    </h2>
                    <Link to={'/tours'} className='text-white  bg-white bg-opacity-15 text-[20px] xl:text-[16px] md:text-[12px] round px-11 md:px-7 sm:px-4 sm:py-1 py-2 border-[2px] border-white uppercase'>
                        {t("findTour")}
                    </Link>
                </div>
                <div className='w-full flex items-end'>
                    <div className='flex w-full h-[80px] sm:h-[130px] sm:flex-col sm:justify-center xm:justify-start justify-between items-end relative'>
                        <ScrollLink 
                            to="destinations" 
                            spy={true}
                            duration={200}
                            className='cursor-pointer absolute left-1/2 -translate-x-1/2 p-3 md:p-1 sm:top-9 flex justify-center items-center rounded-full bg-white bg-opacity-25 border-[1px] border-white'>
                            <ExpandMoreIcon className='text-white text-3xl'/>
                        </ScrollLink>
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