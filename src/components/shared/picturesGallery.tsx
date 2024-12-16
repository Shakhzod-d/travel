import React, { useState, useEffect } from "react"
import { useQuery } from "react-query"
import { useFetchData } from "../../hooks"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store/store"
import { handleGallery, handleModalType, handleGalleryType } from "../../store/main-slice"
import { ImagesType, IncludesType } from "../../types"
import { Base_URL } from "../../api"
import { Loading } from "../ui"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import {
  changeActiveThumb,
  handleIncludedActive,
} from "../../store/main-slice";
import { IoIosCloseCircleOutline } from "react-icons/io";
import 'swiper/css'
import 'swiper/css/navigation'

const PicturesGallery = () => {
    const [loading, setLoading] = useState(false)   
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.main)
    const { picturesGallery, activeThumb, tourSlug, galleryType, includedActive } = state
    const { fetchdata } = useFetchData(`/api/tour/v1/detail/${tourSlug}`)
    const { data, isLoading, error } = useQuery({
        queryKey: ['pictures'],
        queryFn: fetchdata
    })

    const { 
      title, 
      images,
      includes
    } = data || {}
    let includeImgs = includes?.filter((item: IncludesType) => item.id == Number(galleryType))
    let imgs = galleryType == '' ? images : includeImgs?.[0]?.include?.images
    let includedActiveThumb = Number(includedActive)
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null) 

    const handleThumbnailClick = (index: number) => {
      galleryType == ""
        ? dispatch(changeActiveThumb(index))
        : dispatch(handleIncludedActive(index));
    }

    const handleSlideChange = (swiper: any) => {
      galleryType == ""
        ? dispatch(changeActiveThumb(swiper.activeIndex))
        : dispatch(handleIncludedActive(swiper.activeIndex));
    }

    useEffect(() => {
      changeActiveThumb(
        galleryType == "" ? activeThumb : includedActiveThumb
      );
      setTimeout(() => {
          setLoading(true)
      }, 400);
    }, [])

    useEffect(() => {
      changeActiveThumb(
        galleryType == "" ? activeThumb : includedActiveThumb
      );
    }, [activeThumb, includedActiveThumb])

    useEffect(() => {
      if (thumbsSwiper) {
          thumbsSwiper.slideTo(galleryType == "" ? activeThumb : includedActiveThumb)
      }
    }, [activeThumb, thumbsSwiper]) 

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
    }

    const hideGallery = () => {
      dispatch(handleModalType(''))
      dispatch(handleGalleryType(''))
      dispatch(handleGallery())
    }
    
    if (!picturesGallery) return null

    if(!loading) {
      return <Loading/>
    }
    return (
      <div
        className={`w-full animate__animated animate__zoomIn h-screen fixed justify-center items-center z-50 break-words ${
          picturesGallery ? "animate__zoomIn" : "hidden"
        }`}
      >
        <div className="flex justify-center  items-center w-full h-full 2xl:p-3 p-9">
          <div
            className="relative w-full  h-full bg-transparent flex flex-col items-center"
            onClick={hideGallery}
          >
            <div
              onClick={stopPropagation}
              className="relative z-50 w-full flex justify-end pointer-events-auto"
            >
              <div
                style={{ fontSize: 36 }}
                className="cursor-pointer text-white"
                onClick={hideGallery}
              >
                <IoIosCloseCircleOutline />
              </div>
            </div>
            <div
              onClick={stopPropagation}
              className="relative flex flex-col h-full justify-center max-w-[1096px] w-[50%] lg:w-[70%] md:w-[80%] sm:w-[90%] pointer-events-auto px-11 sm:p-5"
            >
              {isLoading ? (
                <Loading />
              ) : error instanceof Error ? (
                <p className="text-red-500 text-xl break-words">
                  Error: {error.message}
                </p>
              ) : (
                <div>
                  <Swiper
                    modules={[Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    className="w-full cursor-pointer h-max mb-3"
                    onSlideChange={handleSlideChange}
                    initialSlide={
                      galleryType == "" ? activeThumb : includedActiveThumb
                    }
                  >
                    {imgs?.map((item: ImagesType) => (
                      <SwiperSlide key={item.id}>
                        <img
                          id={item.id.toString()}
                          src={
                            item.image?.includes("media")
                              ? item.image
                              : `${Base_URL}/media/${item.image}`
                          }
                          alt={title}
                          className="w-full h-[650px] 2xl:h-[90%] xl:h-[340px] object-contain object-center"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Swiper
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    className="w-full"
                    onSlideChange={(swiper) =>
                      changeActiveThumb(swiper.activeIndex)
                    }
                  >
                    {imgs?.map((item: ImagesType, index: number) => (
                      <SwiperSlide
                        key={item.id}
                        className={`cursor-pointer ${
                          index ===
                          (galleryType == ""
                            ? activeThumb
                            : includedActiveThumb)
                            ? "border-[2px] border-gray-500 scaele-125"
                            : ""
                        }`} // Apply active class
                        onClick={() => handleThumbnailClick(index)}
                      >
                        <img
                          id={item.id.toString()}
                          src={
                            item.image?.includes("media")
                              ? item.image
                              : `${Base_URL}/media/${item.image}`
                          }
                          alt={title}
                          className="w-[70px] h-[70px] object-cover object-center"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default PicturesGallery
