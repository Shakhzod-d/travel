import { OpinionCart } from '../ui'
import { clientOpinions } from '../../utils'
import { OpinionType } from '../../types'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Opinions = () => {
    return (
        <div className="padding">
            <h2 className="h2 md:text-3xl sm:text-2xl mb-8">What Our Clients Say About Us</h2>
            <Swiper
                className='pb-11 w-[65%] xl:w-full'
                slidesPerView={2}
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                navigation
                pagination={{clickable:true}}
                centeredSlides={true}
                grabCursor={true}
            >
                {
                    clientOpinions.map((item: OpinionType) => (
                        <SwiperSlide key={item.id}>
                            <OpinionCart
                                id={item.id}
                                phrase={item.phrase}
                                opinion={item.opinion}
                                name={item.name}
                                img={item.img}
                                job={item.job}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Opinions