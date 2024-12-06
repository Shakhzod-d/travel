import { useQuery } from "react-query"
import { useFetchData } from "../../hooks"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store/store"
import { changePicturesModal, handleGallery, changeActiveThumb } from "../../store/main-slice"
import { ImagesType } from "../../types"
import { Base_URL } from "../../api"
import { Loading } from "../ui"
import React from "react"

const PicturesModal = () => {
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.main)
    const { picturesModal, tourSlug } = state
    const { fetchdata } = useFetchData(`/api/tour/v1/detail/${tourSlug}`)
    const { data, isLoading, error } = useQuery({
        queryKey: ['pictures'],
        queryFn: fetchdata
    })

    const showSwiper = (e: React.MouseEvent<HTMLImageElement>) => {
        dispatch(changeActiveThumb(Number(e.currentTarget.id)))
        dispatch(handleGallery());
        dispatch(changePicturesModal())
    };
 
    const {
        title,
        images
    } = data || {}

    if(!picturesModal) return 
    
    return (
        <div className='w-full animate__animated animate__zoomIn h-screen fixed justify-center items-center z-50 pointer-events-none break-words'>
            <div className="flex justify-center items-center w-full h-full pointer-events-none">
                <div className="max-w-[1256px] pointer-events-auto rounded-2xl shadow-lg bg-white h-[90%] overflow-y-scroll p-11 sm:p-5 w-[90%]">
                    <div className="w-full flex justify-between">
                        <h3 className="text-[32px] sm:text-[24px] w-[85%] color-[#0C141D] break-words">{title}</h3>
                        <div
                            onClick={() => dispatch(changePicturesModal())}
                            style={{ fontSize: 30 }} 
                            className="h-[36px] w-[36px] cursor-pointer bg-[url('/icons/Vector.png')]"
                        />
                    </div>
                    <div>
                        {
                            isLoading ? (
                                <Loading/>
                            ) : error instanceof Error ? (
                                <p className="text-red-500 text-xl break-words">Error: {error.message}</p>
                            ) : (
                                <div className="w-full mt-9 sm:mt-5 grid grid-cols-2 sm:grid-cols-1 overflow-y-scroll gap-5 cursor-pointer">
                                    {
                                        images?.map((item: ImagesType, index: number) => (
                                            <img 
                                                key={item.id}
                                                id={index.toString()} 
                                                onClick={showSwiper} 
                                                src={item.image.includes('media') ? item.image : `${Base_URL}/media/${item.image}`} 
                                                alt={title}
                                                className="w-full h-[328px]"
                                            />
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div> 
                </div>
            </div>
        </div>
    )
    
}

export default PicturesModal