import hero from '../../assets/images/hero.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SocialMedias } from '../../types';
import { socialMedias } from '../../utils';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${hero})` }} className='h-[900px] padding md:h-[600px] sm:h-[300px] w-full flex flex-col items-center justify-between pt-[220px] md:pt-[100px] sm:pt-[50px] pb-11 bg-cover bg-center bg-no-repeat'>
            <div className='w-full flex flex-col items-center'>
                <h2 className='font-bold text-[64px] md:text-4xl sm:text-xl sm:font-semibold text-white text-center w-full mb-3'>
                    CAN <br /> 
                    FOLLOW YOUR <br />  
                    CENTRAL ASIAN NAVIGATOR
                </h2>
                <button className='text-white  bg-white bg-opacity-15 text-[20px] md:text-[12px] round px-11 md:px-7 sm:px-4 sm:py-1 py-2 border-[2px] border-white'>FIND YOUR TOUR</button>
            </div>
            <div className='w-full flex justify-end'>
                <div className='flex w-1/2 sm:w-full sm:justify-center justify-between items-center'>
                    <div className='p-3 md:p-1 flex justify-center items-center rounded-full bg-white bg-opacity-25 border-[1px] border-white'>
                        <ExpandMoreIcon className='text-white text-3xl' />
                    </div>
                    <ul className='flex mr-0 sm:hidden'>
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
    )
}

export default Hero