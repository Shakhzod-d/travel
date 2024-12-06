import { useState, useEffect } from "react"
import { useQuery } from "react-query"
import { useFetchData } from "../../hooks"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store/store"
import { handleGallery } from "../../store/main-slice"
import { ImagesType } from "../../types"
import { Base_URL } from "../../api"
import { Loading } from "../ui"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import { changeActiveThumb } from "../../store/main-slice"
import CloseIcon from '@mui/icons-material/Close'
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
    
    if (!picturesGallery) return null

    if(!loading) {
        return <Loading/>
    }

    let width = window.innerWidth > 1256

    return (
        <div className={`w-full animate__animated animate__zoomIn h-screen fixed justify-center items-center z-50 pointer-events-none break-words ${picturesGallery ? 'animate__zoomIn' : 'hidden'}`}>
            <div className="flex justify-center items-center w-full h-full pointer-events-none">
                <div className="relative pt-[50px] max-w-[1096px] w-[50%] lg:w-[70%] md:w-[80%] sm:w-[90%] pointer-events-auto rounded-2xl shadow-lg bg-white h-full px-11 sm:p-5">
                    <CloseIcon 
                        style={{ fontSize: width ? 48 : 32 }}
                        className="cursor-pointer absolute z-50 top-1 right-1"
                        onClick={() => dispatch(handleGallery())}
                    />
                    {
                        isLoading ? (
                            <Loading />
                        ) : error instanceof Error ? (
                            <p className="text-red-500 text-xl break-words">Error: {error.message}</p>
                        ) : (
                            <div>
                                <Swiper 
                                    modules={[Thumbs]} 
                                    thumbs={{ swiper: thumbsSwiper }}
                                    className="w-full cursor-pointer h-full"
                                    onSlideChange={handleSlideChange}
                                    initialSlide={activeThumb}
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
                                    className="w-full mt-4"
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
    )
}

export default PicturesGallery
