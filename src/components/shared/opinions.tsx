import { useRef } from 'react';
import { OpinionCart } from '../ui'
import { clientOpinions } from '../../utils'
import { OpinionType } from '../../types'
import { Carousel, SlideHandle  } from 'nuka-carousel';
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const Opinions = () => {
    const ref = useRef<SlideHandle>(null);

    const goBack = () => {
        if (ref.current) {
            ref.current.goBack();
        }
    };

    const goForward = () => {
        if (ref.current) {
            ref.current.goForward();
        }
    };
    let screenSize = window.innerWidth < 446
    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="h2 md:text-3xl sm:text-2xl mb-8">What Our Clients Say About Us</h2>
            <div className='w-full'>
                <Carousel 
                    ref={ref} 
                    scrollDistance="slide" 
                    wrapMode="wrap" 
                    swiping={true}
                    showDots
                >
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
                <div className={`justify-center ${screenSize ? 'hidden' : 'flex'}`}>
                    <button onClick={goBack} className='w-[40px] h-[40px] flex justify-center items-center text-xl text-white text-semibold bg-black rounded-full mr-2'>
                        {<GrFormPreviousLink style={{ fontSize: 22, fontWeight: 600 }}/>}
                    </button>
                    <button onClick={goForward} className='w-[40px] h-[40px] flex justify-center items-center text-xl  text-white text-semibold bg-black rounded-full'>
                        {<GrFormNextLink style={{ fontSize: 22, fontWeight: 600 }}/>}
                    </button>
                </div> 
            </div>
        </div>
    )
}

export default Opinions





