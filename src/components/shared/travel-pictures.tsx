/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { Container } from "../ui";
import { Base_URL } from "../../api";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ImagesType } from "../../types";
import { 
  changePicturesModal, 
  handleGallery, 
  changeActiveThumb,
  handleGalleryType,
  handleModalType
} from "../../store/main-slice";

interface TravelPicturesProps {
  images: ImagesType[],
  title: string
}

const TravelPictures: FC<TravelPicturesProps> = ({ images, title }) => {
  const dispatch = useDispatch()
  const handlePictures = () => {
    dispatch(changePicturesModal())
    dispatch(handleModalType(''))
  }
  const handlePicturesGallery = (e: React.MouseEvent<HTMLImageElement>) => {
    dispatch(changeActiveThumb(Number(e.currentTarget.id)))
    dispatch(handleGallery())
    dispatch(handleGalleryType(""));
  }
  const { t } = useTranslation()
  return (
    <section className="pb-10 bg-white">
      <Container className="w-full">
          <div className="w-full flex flex-col items-center">
            <div className="w-full grid grid-cols-2 xl:flex xl:flex-col xl:items-center gap-4">
              <img 
                id='0'
                key={images[0].id}
                src={images[0]?.image.includes('media') ? images[0].image : `${Base_URL}/media/${images[0].image}`} 
                alt={title} 
                className="w-full h-[400px] xl:h-[400px] xl:w-1/2 lg:w-full cursor-pointer"
                onClick={handlePicturesGallery}
              />
              <div className="w-full grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-5">
                {
                  images?.slice(1,5)?.map((item: ImagesType, index: number) => (
                    images?.indexOf(item) == 4 && images?.length > 5 ? (
                    <div 
                      key={item.id} 
                      className="hoveringImage"
                    >
                      <img 
                        src={item.image.includes('media') ? item.image : `${Base_URL}/media/${item.image}`} 
                        alt={title} 
                        className={`w-full h-[191px] cursor-pointer xl:h-[400px] ${images?.indexOf(item) == 4 && images?.length > 5 ? 'cursor-pointer' : ''}`}
                        onClick={handlePictures}
                      />
                      <div className="hoveringContent pointer-events-none">
                        <div className="px-7 py-5 hoveringText">
                          {t("showphotos")}
                        </div>
                      </div>
                    </div>) : (
                      <img 
                        id={(index+1).toString()}
                        key={item.id}
                        src={item.image.includes('media') ? item.image : `${Base_URL}/media/${item.image}`}
                        alt={title} 
                        className={`w-full h-[191px] xl:h-[400px] cursor-pointer ${images?.indexOf(item) == 4 && images?.length > 5 ? 'cursor-pointer' : ''}`}
                        onClick={handlePicturesGallery}
                      />
                    )))
                  }
              </div>
            </div>
          </div>
      </Container>
    </section>
  );
};

export default TravelPictures;
