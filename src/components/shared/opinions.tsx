import { OpinionCart } from '../ui'
import { clientOpinions } from '../../utils'
import { OpinionType } from '../../types'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Carousel } from 'nuka-carousel';

const Opinions = () => {
    return (
        <div className="padding">
            <h2 className="h2 md:text-3xl sm:text-2xl mb-8">What Our Clients Say About Us</h2>
            <Carousel showDots showArrows wrapMode="wrap">
            {
                clientOpinions.map((item: OpinionType) => (
                    <div key={item.id} className='mr-2'>
                        <OpinionCart
                            id={item.id}
                            phrase={item.phrase}
                            opinion={item.opinion}
                            name={item.name}
                            img={item.img}
                            job={item.job}
                        />
                    </div>
                ))
            }
            </Carousel>
            {/* <div className='flex justify-center mt-2'>
                <button onClick={goBack} className='w-[40px] h-[40px] flex justify-center items-center text-xl text-white text-semibold bg-black rounded-full'>
                    {<ArrowBackIosNewIcon style={{ fontSize: 14, fontWeight: 600 }}/>}
                </button>
                <button onClick={goForward} className='w-[40px] h-[40px] flex justify-center items-center text-xl  text-white text-semibold bg-black rounded-full'>
                    {<ArrowForwardIosIcon style={{ fontSize: 14, fontWeight: 600 }}/>}
                </button>
            </div> */}
        </div>
    )
}

export default Opinions