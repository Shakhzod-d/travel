import React, { useState, useEffect } from "react"
import { useQuery } from "react-query"
import { useFetchData } from "../../hooks"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store/store"
import { handleGallery } from "../../store/main-slice"
import { ImagesType } from "../../types"
import { Base_URL } from "../../api"
import { Loading } from "../ui"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Navigation } from 'swiper/modules'
import { changeActiveThumb } from "../../store/main-slice"
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";
import 'swiper/css'
import 'swiper/css/navigation'

const PicturesGallery = () => {
    const [loading, setLoading] = useState(false)   
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.main)
    const { picturesGallery, activeThumb, tourSlug } = state
    const { fetchdata } = useFetchData(`/api/tour/v1/detail/${tourSlug}`)
    const { data, isLoading, error } = useQuery({
        queryKey: ['pictures'],
        queryFn: fetchdata
    })

    const { 
        title, 
        images 
    } = data || {}

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null) 

    const handleThumbnailClick = (index: number) => {
        dispatch(changeActiveThumb(index))
    }

    const handleSlideChange = (swiper: any) => {
        dispatch(changeActiveThumb(swiper.activeIndex))
    }

    useEffect(() => {
        changeActiveThumb(activeThumb)
        setTimeout(() => {
            setLoading(true)
        }, 400);
    }, [])

    useEffect(() => {
        changeActiveThumb(activeThumb)
    }, [activeThumb])

    useEffect(() => {
        if (thumbsSwiper) {
            thumbsSwiper.slideTo(activeThumb)
        }
    }, [activeThumb, thumbsSwiper]) 

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }
    
    if (!picturesGallery) return null

    if(!loading) {
        return <Loading/>
    }
    return (
        <div className={`w-full animate__animated animate__zoomIn h-screen fixed justify-center items-center z-50 break-words ${picturesGallery ? 'animate__zoomIn' : 'hidden'}`}>
            <div className="flex justify-center items-center w-full h-full 2xl:p-3 p-9">
                <div className="relative w-full h-full bg-transparent flex flex-col items-center" onClick={() => dispatch(handleGallery())}>
                    <div onClick={stopPropagation} className="relative z-50 w-full flex justify-end pointer-events-auto">
                        <div style={{ fontSize: 36 }} className="cursor-pointer text-white" onClick={() => dispatch(handleGallery())}>  
                            <IoIosCloseCircleOutline/>
                        </div>
                    </div>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()} className={`button-prev pointer-events-auto absolute z-50 top-[45%] left-0 w-[50px] h-[50px] flex justify-center items-center text-xl text-black text-semibold bg-white rounded-full mr-2 ${activeThumb == 0 ? 'opacity-50 disabled' : ''}`}>
                        {<GrFormPreviousLink style={{ fontSize: 30, fontWeight: 600 }}/>}
                    </button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()} className={`button-next pointer-events-auto absolute z-50 top-[45%] right-0 w-[50px] h-[50px] flex justify-center items-center text-xl  text-black text-semibold bg-white rounded-full ${activeThumb == images?.length - 1 ? 'opacity-50 disabled' : ''} `}>
                        {<GrFormNextLink style={{ fontSize: 30, fontWeight: 600 }}/>}
                    </button>
                    <div onClick={stopPropagation} className="relative flex flex-col h-full max-w-[1096px] w-[50%] lg:w-[70%] md:w-[80%] sm:w-[90%] pointer-events-auto px-11 sm:p-5">
                        {
                            isLoading ? (
                                <Loading />
                            ) : error instanceof Error ? (
                                <p className="text-red-500 text-xl break-words">Error: {error.message}</p>
                            ) : (
                                <div>
                                    <Swiper 
                                        modules={[Thumbs, Navigation]} 
                                        thumbs={{ swiper: thumbsSwiper }}
                                        className="w-full cursor-pointer h-max mb-3"
                                        onSlideChange={handleSlideChange}
                                        initialSlide={activeThumb}
                                        navigation={{
                                            nextEl: '.button-next',
                                            prevEl: '.button-prev',
                                        }}
                                    >
                                        {
                                            images?.map((item: ImagesType) => (
                                                <SwiperSlide key={item.id}>
                                                    <img
                                                        id={item.id.toString()}
                                                        src={item.image.includes('media') ? item.image : `${Base_URL}/media/${item.image}`}
                                                        alt={title}
                                                        className="w-full h-[650px] 2xl:h-[90%] xl:h-[340px] object-contain object-center"
                                                    />
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>

                                    <Swiper
                                        modules={[Thumbs]}
                                        watchSlidesProgress
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        slidesPerView={'auto'}
                                        className="w-full"
                                        onSlideChange={(swiper) => changeActiveThumb(swiper.activeIndex)} 
                                    >
                                        {
                                            images.map((item: ImagesType, index: number) => (
                                                <SwiperSlide
                                                    key={item.id}
                                                    className={`cursor-pointer ${index === activeThumb ? 'border-[2px] border-gray-500 scaele-125' : ''}`} // Apply active class
                                                    onClick={() => handleThumbnailClick(index)}
                                                >
                                                    <img
                                                        id={item.id.toString()}
                                                        src={item.image.includes('media') ? item.image : `${Base_URL}/media/${item.image}`}
                                                        alt={title}
                                                        className="w-[70px] h-[70px] object-cover object-center"
                                                    />
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PicturesGallery
